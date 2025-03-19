"use client";
import { Button } from "@/components/shadcn/button";
import { useContentHook } from "@/hooks/useContentHook";
import { AboutMe, ProzUser } from "@/interfaces/account";
import axios from "axios";
import { Save } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React, { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { toast } from "sonner";
import { TAGLINES_SERVICES } from "@/constants/common";
import { Textarea } from "@/components/shadcn/textarea";
import ReactQuill from "react-quill";

const ProfileUpdaterBio = ({ user }: { user: ProzUser }) => {
  const reactQuillRef = useRef<ReactQuill>(null);

  const { setDrawerVisibility } = useContentHook();
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);
  let pathname = usePathname() ?? "";
  const [value, setValue] = useState<string>("");
  const [poolId, setPoolId] = useState<string>("");
  const [serviceId, setServiceId] = useState<number>(0);
  const currentTab: string = pathname.split("/").pop() as string;

  useEffect(() => {
    if (currentTab && ["translating", "interpreting", "subtitling"].includes(currentTab)) {
      setServiceId(TAGLINES_SERVICES[currentTab]);
    } else {
      setServiceId(0);
    }
  }, [currentTab]);

  const aboutMe = useMemo(() => {
    let aboutMe = "";
    let filteredBio: AboutMe[] = [];

    if (currentTab && ["translating", "interpreting", "subtitling"].includes(currentTab)) {
      const { pools_profiles, pools_about_me } = user.pools_data;
      const serviceId = TAGLINES_SERVICES[currentTab];
      if (currentTab === "interpreting" && pools_profiles?.interpreters) {
        setPoolId("interpreters");
        aboutMe = pools_about_me?.interpreters || "";
      } else if (currentTab === "subtitling" && pools_profiles?.subtitlers) {
        setPoolId("subtitlers");
        aboutMe = pools_about_me?.subtitlers || "";
      } else {
        filteredBio =
          user.service_specific_about_me?.filter((item) => item.service_id === serviceId) || [];
        aboutMe = filteredBio.length > 0 ? filteredBio[0].value : "";
      }
    } else {
      filteredBio = user.service_specific_about_me?.filter((item) => item.service_id === 0) || [];
      aboutMe = filteredBio.length > 0 ? filteredBio[0].value : "";
    }

    return aboutMe;
  }, [currentTab, user]);

  // Update value when aboutMe changes
  useEffect(() => {
    setValue(aboutMe);
  }, [aboutMe]);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/update?entityId=${user.entity_id}`,
      {
        section: "bio",
        value,
        serviceId,
        poolId,
      },
      { headers: { "Content-Type": "application/json", Accept: "application/json" } }
    );
    if (response.status === 200) {
      setDrawerVisibility("bio");
      router.refresh();
      toast.success("Bio updated successfully!");
    }
  };

  const onChangeHandler = (value: string) => {
    if (serviceId === 0) {
      const sanitizedValue = value.replace(/ {2,}/g, (match) => "&nbsp;".repeat(match.length)); // Replace multiple spaces with &nbsp;
      setValue(sanitizedValue);
    } else {
      setValue(value);
    }
  };

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // Replace with your upload preset

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/upload`, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        const imageUrl = data.secureUrl;
        const quill = reactQuillRef.current;
        if (quill) {
          const range = quill.getEditorSelection();
          range && quill.getEditor().insertEmbed(range.index, "image", imageUrl);
        }
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ align: ["right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [{ color: ["#F00", "#0F0", "#00F", "#000", "#FFF", "color-picker"] }],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      // clipboard: {
      //     // toggle to add extra line breaks when pasting HTML:
      //     matchVisual: false,
      // },
    }),
    []
  );

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  useEffect(() => {
    setIsReady(true);
    return () => {
      setIsReady(false);
    };
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <form
      onSubmit={(event) => onSubmit(event)}
      className="flex flex-col justify-start items-start self-stretch relative gap-6"
    >
      <div className="flex flex-col justify-start items-start self-stretch gap-6">
        <div className="flex flex-col justify-start items-start self-stretch gap-2">
          <div className="flex flex-col justify-start items-start self-stretch relative gap-0.5">
            {/* <div className="flex justify-start items-center self-stretch relative gap-4">
                            <p className="text-lg font-semibold text-left text-dark-blue-hue dark:text-accent-foreground">
                                Bio
                            </p>
                        </div> */}
            <p className="self-stretch w-[649px] text-xs italic text-left text-dark-blue-hue">
              Start by adding a bio to let other linguists know who you are
            </p>
          </div>
          <div className="flex flex-col justify-start items-start self-stretch gap-[18px] p-4 rounded-custom bg-accent-light dark:bg-black">
            <div className="flex flex-col justify-start items-start self-stretch gap-1.5">
              {serviceId === 0 ? (
                <ReactQuill
                  ref={reactQuillRef}
                  theme="snow"
                  preserveWhitespace
                  className="w-full !min-h-[400]"
                  modules={modules}
                  formats={formats}
                  value={value}
                  onChange={(event) => onChangeHandler(event)}
                  placeholder="Enter the message..........."
                />
              ) : (
                <Textarea
                  defaultValue={value}
                  rows={15}
                  onChange={(event) => onChangeHandler(event.currentTarget.value)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-12 relative flex flex-row justify-end items-center">
        <Button type="submit">
          <Save />
          Save updates
        </Button>
      </div>
    </form>
  );
};

export default ProfileUpdaterBio;
