"use client";

import React from "react";
import Image from "next/image";

const NewEvents = () => {
  const [currentTab, setCurrentTab] = React.useState("details");
  const [currentIcon, setCurrentIcon] = React.useState("event");
  const [currentTitle, setCurrentTitle] = React.useState("New event");
  const [frequency, setFrequency] = React.useState("onlyOnce");
  const [location, setLocation] = React.useState("physical");
  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");

  const [guestEmail, setGuestEmail] = React.useState("");
  const [guestList, setGuestList] = React.useState([
    { name: "Guest 1", avatar: "https://via.placeholder.com/32" },
    { name: "Guest 2", avatar: "https://via.placeholder.com/32" },
    { name: "Guest 3", avatar: "https://via.placeholder.com/32" },
    { name: "Guest 4", avatar: "https://via.placeholder.com/32" },
  ]);
  const [permissions, setPermissions] = React.useState({
    consultList: true,
    addInvitees: false,
    suggestDate: false,
  });

  const handleInvite = () => {
    if (guestEmail) {
      setGuestList((prev) => [
        ...prev,
        { name: guestEmail, avatar: "https://via.placeholder.com/32" },
      ]);
      setGuestEmail("");
    }
  };

  const tabs: { icon: string; title: string }[] = [
    {
      icon: "description",
      title: "Details",
    },
    {
      icon: "keep",
      title: "Date and location",
    },
    {
      icon: "group",
      title: "Guests",
    },
  ];

  React.useEffect(() => {
    if (currentTab === "details") {
      setCurrentTitle("What's your event about?");
    }
    if (currentTab === "date and location") {
      setCurrentTitle("When and where will it take place?");
    }
    if (currentTab === "guests") {
      setCurrentTitle("Who should join?");
    }

    const currentTabData = tabs.find((tab) => tab.title.toLowerCase() === currentTab);
    if (currentTabData) {
      setCurrentIcon(currentTabData.icon);
    } else {
      // Handle the case where the tab is not found
      setCurrentIcon("event"); // Provide a default icon or handle the error
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTab]);

  return (
    <div className="w-full flex items-start justify-center h-[calc(100vh-100px)] pt-10">
      <div className="flex flex-col gap-4 rounded-md p-4 min-w-[500px] bg-white dark:bg-dark shadow-md">
        <div className="flex items-center justify-start gap-3">
          <span className="material-symbols-outlined">{currentIcon}</span>
          <span className="text-2xl font-bold">{currentTitle}</span>
        </div>
        <div className="flex items-center justify-start gap-3">
          {tabs.map((tab, index) => (
            <p
              key={index}
              onClick={() => setCurrentTab(tab.title.toLowerCase())}
              className={`flex-grow text-sm text-gray-500 cursor-pointer  border-t-2 border-solid capitalize ${currentTab === tab.title.toLowerCase() ? "text-primary font-bold border-primary" : "border-gray-500"}`}
              role="button"
            >
              {tab.title}
            </p>
          ))}
        </div>
        <div className="flex items-center justify-start gap-3">
          {currentTab === "details" && (
            <form className="w-full">
              {/* Title Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="e.g., Newsletter Bi-Weekly Review"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                />
              </div>

              {/* Category Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="workshop">Workshop</option>
                  <option value="meeting">Meeting</option>
                  <option value="conference">Conference</option>
                  <option value="webinar">Webinar</option>
                </select>
              </div>

              {/* Description Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  placeholder="Add a description to encourage guests to attend to your event. Links, emojis, and new lines are supported."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full h-24"
                ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
                >
                  Next
                </button>
              </div>
            </form>
          )}
          {currentTab === "date and location" && (
            <form className="w-full">
              {/* Date and Time Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                <div className="flex space-x-4">
                  <input
                    type="date"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                  <input
                    type="time"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-1/2"
                  />
                  <input
                    type="time"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-1/2"
                  />
                </div>
              </div>

              {/* Frequency Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Frequency</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="onlyOnce"
                      name="frequency"
                      value="onlyOnce"
                      checked={frequency === "onlyOnce"}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="h-4 w-4 text-primary"
                    />
                    <label htmlFor="onlyOnce" className="ml-2 text-sm text-gray-700">
                      Only once
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="recurring"
                      name="frequency"
                      value="recurring"
                      checked={frequency === "recurring"}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="h-4 w-4 text-primary"
                    />
                    <label htmlFor="recurring" className="ml-2 text-sm text-gray-700">
                      Every
                    </label>
                    <input
                      type="number"
                      min="1"
                      defaultValue="2"
                      className="ml-2 border border-gray-300 rounded-lg px-2 py-1 w-16"
                    />
                    <select className="ml-2 border border-gray-300 rounded-lg px-2 py-1">
                      <option value="weeks">weeks</option>
                      <option value="days">days</option>
                    </select>
                    <label className="ml-2 text-sm text-gray-700">End after</label>
                    <input
                      type="number"
                      min="1"
                      defaultValue="10"
                      className="ml-2 border border-gray-300 rounded-lg px-2 py-1 w-16"
                    />
                    <span className="ml-2 text-sm text-gray-700">occurrences</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>10 events will be created at the following dates:</p>
                    <p className="mt-1">
                      <span className="text-primary">Friday, January 6, 2024</span>,{" "}
                      <span className="text-primary">Wednesday, February 7, 2024</span>,{" "}
                      <span className="text-primary">+8</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Section */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="physical"
                      name="location"
                      value="physical"
                      checked={location === "physical"}
                      onChange={(e) => setLocation(e.target.value)}
                      className="h-4 w-4 text-primary"
                    />
                    <label htmlFor="physical" className="ml-2 text-sm text-gray-700">
                      Physical
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="virtual"
                      name="location"
                      value="virtual"
                      checked={location === "virtual"}
                      onChange={(e) => setLocation(e.target.value)}
                      className="h-4 w-4 text-primary"
                    />
                    <label htmlFor="virtual" className="ml-2 text-sm text-gray-700">
                      Virtual
                    </label>
                    <input
                      type="text"
                      placeholder="Link to the meeting"
                      className="ml-2 border border-gray-300 rounded-lg px-3 py-2 flex-1"
                    />
                    <button
                      type="button"
                      className="ml-2 px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-700"
                    >
                      Paste
                    </button>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700"
                >
                  Back
                </button>
                <div className="space-x-2">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          )}
          {currentTab === "guests" && (
            <form className="w-full">
              {/* Guests Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Name or email address"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full"
                  />
                  <button
                    type="button"
                    onClick={handleInvite}
                    className="ml-2 px-4 py-2 bg-primary text-white rounded-lg text-sm"
                  >
                    Invite
                  </button>
                </div>
                {/* Guest List */}
                <div className="flex mt-4 space-x-2">
                  {guestList.map((guest, index) => (
                    <Image
                      key={index}
                      src={guest.avatar}
                      alt={guest.name}
                      height="56"
                      width="56"
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                  ))}
                  <span className="text-sm text-gray-500 flex items-center">+4</span>
                </div>
              </div>

              {/* Guests Can Options */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Guests can</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consultList"
                      checked={permissions.consultList}
                      onChange={() =>
                        setPermissions((prev) => ({
                          ...prev,
                          consultList: !prev.consultList,
                        }))
                      }
                      className="h-4 w-4 text-primary"
                    />
                    <label htmlFor="consultList" className="ml-2 text-sm text-gray-700">
                      Consult guests list
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="addInvitees"
                      checked={permissions.addInvitees}
                      onChange={() =>
                        setPermissions((prev) => ({
                          ...prev,
                          addInvitees: !prev.addInvitees,
                        }))
                      }
                      className="h-4 w-4 text-primary"
                    />
                    <label htmlFor="addInvitees" className="ml-2 text-sm text-gray-700">
                      Add other invitees
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="suggestDate"
                      checked={permissions.suggestDate}
                      onChange={() =>
                        setPermissions((prev) => ({
                          ...prev,
                          suggestDate: !prev.suggestDate,
                        }))
                      }
                      className="h-4 w-4 text-primary"
                    />
                    <label htmlFor="suggestDate" className="ml-2 text-sm text-gray-700">
                      Suggest another date
                    </label>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700"
                >
                  Back
                </button>
                <div className="space-x-2">
                  <button
                    type="button"
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
                  >
                    Create event
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewEvents;
