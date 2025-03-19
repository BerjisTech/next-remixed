"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAppSelector } from "@/lib/store/hooks";
import { toast } from "sonner";

const LearnPage: React.FC = () => {
  const [hasMoodleId, setHasMoodleId] = useState(true);
  const [moodleCourseId, setMoodleCourseId] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<any[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [description, setDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [durationUnit, setDurationUnit] = useState("hour");
  const [trainerId, setTrainerId] = useState("");
  const [contentDescription, setContentDescription] = useState("");
  const [linkToEvent, setLinkToEvent] = useState("");
  const [selectedMemberships, setSelectedMemberships] = useState<string[]>([]);
  const [pricing, setPricing] = useState("");
  let { entityId } = useAppSelector((state) => state.profile);
  const [learn_course_id, setLearnCourseId] = useState(0);
  let pathname = usePathname() ?? "";
  const [courseId, setCourseId] = useState(pathname.split("/").pop());
  const [courseValidId, setCourseValidId] = useState(false);
  const membershipTypes = [
    { id: "none", value: "none", label: "None" },
    { id: "platinum", value: "platinum", label: "Standard" },
    { id: "pro_plus", value: "pro_plus", label: "Plus" },
    { id: "pro_premium", value: "pro_premium", label: "Premium" },
    { id: "bus_started", value: "bus_started", label: "Business starter" },
    { id: "bus_standard", value: "bus_standard", label: "Business standard" },
    { id: "bus_plus", value: "bus_plus", label: "Business plus" },
    { id: "bus_enterprise", value: "bus_enterprise", label: "Business enterprise" },
  ];
  // const [defaultPricing, setDefaultPricing] = useState('Not available');
  const [customPricing, setCustomPricing] = useState<{ priceSegments: any }>({
    priceSegments: [],
  });
  const [currentSegmentMembership, setCurrentSegmentMembership] = useState("");
  const [currentSegmentType, setCurrentSegmentType] = useState("paid");
  const [currentSegmentStoreItem, setCurrentSegmentStoreItem] = useState("");

  const handleMoodleCourseIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMoodleCourseId(e.target.value);
  };

  const getCourse = async (courseId: string, get_from_moodle: boolean = false) => {
    toast.info("Loading course!");
    const response = await fetch(
      `/next/api/learn/mdl-courses?entityId=${entityId}&courseId=${courseId}&dbCourses=${!get_from_moodle ? 1 : 0}`
    );
    const data = await response.json();
    if (data) {
      setCourseValidId(true);
    }
    if (get_from_moodle) {
      setTitle(data.displayname);
      setDescription(data.summary);
      setImage(data.db_data_course ? data.db_data_course.image_link : "");
      setCourseDuration(data.db_data_course ? data.db_data_course.duration_total : "");
      setDurationUnit(data.db_data_course ? data.db_data_course.duration_unit : "hour");
      setTrainerId(data.db_data_course ? data.db_data_course.trainer_id : "");
      setContentDescription(data.db_data_course ? data.db_data_course.course_content : "");
      setLinkToEvent(data.db_data_course ? data.db_data_course.link_to_event : "");
      setLearnCourseId(data.db_data_course.learn_course_id || 0);
      setMoodleCourseId(courseId);
    } else {
      setTitle(data.course.title || "");
      setDescription(data.course.description || "");
      setImage(data.course.image_link || "");
      setCourseDuration(data.course.duration_total || "");
      setDurationUnit(data.course.duration_unit || "hour");
      setTrainerId(data.course.trainer_id || "0");
      setContentDescription(data.course.course_content || "");
      setLinkToEvent(data.course.link_to_event || "");
      setLearnCourseId(data.course.learn_course_id || 0);
      setMoodleCourseId(courseId);
      setCustomPricing({ priceSegments: data.pricing });
      getCourseTags(data.course.learn_course_id);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = {
      mdl_course_id: moodleCourseId,
      learn_course_id: learn_course_id || 0,
      title: title,
      description: description,
      image_link: image,
      duration_total: courseDuration,
      duration_unit: durationUnit || "hour",
      trainer_id: trainerId,
      course_content: contentDescription,
      link_to_event: linkToEvent,
      created_by: entityId,
      pricing: customPricing.priceSegments,
      tags: selectedTags,
    };

    try {
      let is_update = courseId && !isNaN(Number(courseId)) && parseInt(courseId || "0") > 0;
      const response = await fetch("/next/api/learn/mdl-courses", {
        method: is_update ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Error creating course");
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (is_update) {
        toast.success("Course updated successfully");
      } else {
        toast.success("Course created successfully");
      }

      window.location.href = `/next/admin/learn`;
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (courseId && !isNaN(Number(courseId)) && Number(courseId) > 0) {
      setCourseValidId(true);
      getCourse(courseId);
    } else {
      console.log("No course ID provided");
    }
  }, [courseId, entityId]);

  const getTags = async () => {
    let response = await fetch("/next/api/learn/tags-new-endpoints");
    let data = await response.json();
    setTags(data ? data : []);
  };

  const getCourseTags = async (courseId: any) => {
    if (!courseId) {
      return;
    }
    const response = await fetch(`/next/api/learn/tags-new-endpoints?courseId=${courseId}`);
    const data = await response.json();

    const uniqueTags = data.filter(
      (tag: any, index: number, self: any) =>
        index === self.findIndex((t: any) => t.learn_tag_id === tag.learn_tag_id)
    );

    setSelectedTags(uniqueTags.map((tag: any) => tag.learn_tag_id));
  };

  useEffect(() => {
    getTags();
  }, []);

  const handlePricingChange = () => {
    if (!currentSegmentMembership || !currentSegmentType) {
      return;
    }

    if (currentSegmentType === "paid" && !currentSegmentStoreItem) {
      return;
    }

    if (currentSegmentType === "free") {
      setCurrentSegmentStoreItem("0");
    }

    const newSegment = {
      membership: currentSegmentMembership,
      store_item_id: currentSegmentStoreItem,
    };
    setCustomPricing({
      priceSegments: [...customPricing.priceSegments, newSegment],
    });
    setCurrentSegmentMembership("");
    setCurrentSegmentType("paid");
    setCurrentSegmentStoreItem("");
  };

  const getMembershipNameById = (id: string) => {
    const membership = membershipTypes.find((type) => type.id === id);
    return membership ? membership.label : "";
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!selectedTags.includes(e.target.value)) {
      setSelectedTags([...selectedTags, e.target.value]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Learn</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex space-x-4 items-center">
          <div className="flex-1">
            <label htmlFor="moodleCourseId" className="block text-sm font-medium">
              Moodle course ID:
            </label>
            <input
              type="text"
              id="moodleCourseId"
              value={hasMoodleId ? moodleCourseId : 0}
              onChange={handleMoodleCourseIdChange}
              className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${hasMoodleId ? "bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700" : "bg-gray-200 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"}`}
            />
            {/* button to search course */}
          </div>
          <div className="flex-1 self-end">
            <button
              type="button"
              className="px-4 py-2 bg-primary text-white rounded-md"
              onClick={() => getCourse(moodleCourseId, true)}
            >
              Search
            </button>
          </div>
          {/* <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="noMoodleCourseId"
                            onChange={(e) => setHasMoodleId(!e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="noMoodleCourseId" className="text-sm font-medium">No Moodle course ID</label>
                    </div> */}
        </div>
        {/* Has course */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="IE: How to Start Your Career as a Translator."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            disabled={!courseValidId}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description:
          </label>
          <textarea
            id="description"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="IE: How to Start Your Career as a Translator."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={!courseValidId}
          ></textarea>
        </div>
        <div className="flex flex-col space-x-4">
          <label htmlFor="description" className="block text-sm font-medium">
            Tags:
          </label>
          <select
            id="tags"
            className="mt-1 self-end block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            onChange={handleTagChange}
            disabled={!courseValidId}
          >
            <option value="">Select tags</option>
            {tags.map((tag: any) => (
              <>
                {!selectedTags.includes(tag.learn_tag_id) && (
                  <option key={tag.learn_tag_id} value={tag.learn_tag_id}>
                    {tag.tag_title}
                  </option>
                )}
              </>
            ))}
          </select>
          <div className="flex flex-wrap">
            {selectedTags.map((tag: any) => (
              <span
                key={tag}
                className="mt-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-1 rounded-md mr-2"
              >
                #{tags.find((t: any) => t.learn_tag_id == tag)?.tag_title}
                <span
                  className="ml-2 cursor-pointer text-red-500 dark:text-red-500 font-bold text-sm rounded-full p-2"
                  onClick={() => setSelectedTags(selectedTags.filter((tagId) => tagId !== tag))}
                >
                  X
                </span>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium">
            Image preview:
          </label>
          <input
            type="text"
            id="image"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="IE: https://lms.proz.com/course_image.png"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            disabled={!courseValidId}
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="courseDuration" className="block text-sm font-medium">
              Duration:
            </label>
            <input
              type="number"
              id="courseDuration"
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="IE: 20"
              value={courseDuration}
              onChange={(e) => setCourseDuration(e.target.value)}
              disabled={!courseValidId}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="durationUnit" className="block text-sm font-medium">
              Unit:
            </label>
            <select
              id="durationUnit"
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={durationUnit}
              onChange={(e) => setDurationUnit(e.target.value)}
              disabled={!courseValidId}
            >
              <option value="hour">Hours</option>
              <option value="minutes">Minutes</option>
            </select>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="trainerId" className="block text-sm font-medium">
              Trainer ID:
            </label>
            <input
              type="number"
              min="0"
              id="trainerId"
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="IE: 12341234"
              value={trainerId}
              onChange={(e) => setTrainerId(e.target.value)}
              disabled={!courseValidId}
              onWheel={(e) => e.preventDefault()}
            />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mt-6 mb-4">Additional information</h3>
        </div>
        {hasMoodleId && (
          <>
            <div>
              <label htmlFor="contentDescription" className="block text-sm font-medium">
                Course content:
              </label>
              <textarea
                id="contentDescription"
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="10 videos"
                value={contentDescription}
                onChange={(e) => setContentDescription(e.target.value)}
                disabled={!courseValidId}
              ></textarea>
            </div>
            {/* <div>
                        <label htmlFor="certificate" className="block text-sm font-medium">Certificate:</label>
                        <input type="text" id="certificate" className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder='IE: https://lms.proz.com/certificate_preview.png'/>
                    </div> */}
          </>
        )}
        {!hasMoodleId && (
          <>
            <div>
              <label htmlFor="linkToEvent" className="block text-sm font-medium">
                Link to event:
              </label>
              <input
                type="text"
                id="linkToEvent"
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="IE: https://www.proz.com/tv/EventName123"
                value={linkToEvent}
                onChange={(e) => setLinkToEvent(e.target.value)}
                disabled={!courseValidId}
              />
            </div>
          </>
        )}
        <div>
          <label htmlFor="membershipTypes" className="block text-sm font-medium">
            Pricing:
          </label>
          <div className="mt-1 flex flex-wrap gap-4">
            <div className="flex items-center">
              <select
                onChange={(e) => setCurrentSegmentMembership(e.target.value)}
                disabled={!courseValidId}
                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select membership</option>
                {membershipTypes.map((type) =>
                  !customPricing.priceSegments.some(
                    (segment: any) => segment.membership === type.id
                  ) ? (
                    <option key={type.id} value={type.value}>
                      {type.value}
                    </option>
                  ) : null
                )}
              </select>
              <select
                id="membershipType"
                className="mt-1 mx-2 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={currentSegmentType}
                onChange={(e) => setCurrentSegmentType(e.target.value)}
                disabled={!courseValidId}
              >
                <option value="paid">Paid</option>
                <option value="free">Free</option>
              </select>
              {currentSegmentType === "paid" && (
                <input
                  type="text"
                  id="storeItem"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter the store item ID"
                  value={currentSegmentStoreItem}
                  onChange={(e) => setCurrentSegmentStoreItem(e.target.value)}
                  disabled={!courseValidId}
                />
              )}
            </div>
            <button
              type="button"
              className="px-4 py-2 bg-primary text-white rounded-md"
              onClick={handlePricingChange}
              disabled={!courseValidId}
            >
              Add pricing segment
            </button>
          </div>
          <div className="flex">
            <ul>
              {customPricing.priceSegments.map((segment: any, index: any) => (
                <li key={index} className="mt-1">
                  {segment.membership ? getMembershipNameById(segment.membership) : ""} -{" "}
                  {segment.store_item_id > 0 ? "Store item:" + segment.store_item_id : "Free"}
                  <button
                    type="button"
                    className="ml-2 px-2 py-1 bg-red-500 text-white rounded-md"
                    onClick={() => {
                      const newSegments = customPricing.priceSegments.filter(
                        (_: any, i: number) => i !== index
                      );
                      setCustomPricing({ priceSegments: newSegments });
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md"
            disabled={!courseValidId}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LearnPage;
