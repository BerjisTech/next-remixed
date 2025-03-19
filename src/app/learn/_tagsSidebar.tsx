"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const TagsCarousel = ({ sendDataToParent }: any) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState<any[]>([]);
  const [selectedTags, setSelectedTags] = useState<any[]>([]);
  const searchParams = useSearchParams();
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const searchValue = searchParams?.get("search") || "";
        const response = await fetch(`/next/api/learn/tags-new-endpoints?search=${searchValue}`);
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, [searchParams]);

  useEffect(() => {
    sendDataToParent(selectedTags);
  }, [selectedTags]);

  const addRemoveTag = (tag_id: number) => {
    if (!selectedTags.includes(tag_id)) {
      setSelectedTags([...selectedTags, tag_id]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== tag_id));
    }
  };

  return (
    <div className="relative lg:sticky lg:h-screen max-h-[500px] lg:overflow-y-auto lg:hover:overflow-y-scroll lg:top-[80px] w-full flex items-center flex-row lg:flex-col lg:items-start">
      {tags && tags.length > 0 && (
        <div className="w-full lg:h-full">
          {/* Carrusel */}
          <div
            ref={carouselRef}
            className="flex gap-3 overflow-auto scroll-smooth h-full pb-2 flex-row lg:flex-col"
          >
            {tags.map((tag: any) => (
              <div
                key={tag.tag_id}
                className={`flex items-center justify-between px-3 py-2 gap-1 rounded-lg cursor-pointer transition-all duration-200 dark:bg-gray-700 dark:border-black dark:text-gray-100 ${
                  selectedTags.includes(tag.learn_tag_id)
                    ? "bg-primary dark:bg-primary-700 text-white"
                    : "bg-gray-50 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-500 border border-gray-200 text-gray-700"
                }`}
                onClick={() => addRemoveTag(tag.learn_tag_id)}
              >
                <span className="text-sm font-medium whitespace-nowrap">{tag.tag_title}</span>
                <span
                  className={`text-sm font-bold px-2 py-1 rounded-full dark:bg-black dark:text-white ${
                    selectedTags.includes(tag.learn_tag_id)
                      ? "bg-primary-50 text-primary"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {tag.total_courses || 0}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {tags && tags.length === 0 && (
        <div className="animate-pulse bg-gray-300 w-full h-[120px] rounded-lg"></div>
      )}
    </div>
  );
};

export default TagsCarousel;
