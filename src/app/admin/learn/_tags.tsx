"use client";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import Image from "next/image";

const AdminTags: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [isUpdateTag, setIsUpdateTag] = useState(false);
  const [updateTagId, setUpdateTagId] = useState(0);
  const [newTagTitle, setNewTagTitle] = useState("");
  const { entityId } = useAppSelector((state) => state.profile);

  const getTags = async () => {
    let response = await fetch("/next/api/learn/tags-new-endpoints");
    let data = await response.json();
    setTags(data ? data : []);
    setLoading(false);
  };

  const createTag = async () => {
    if (newTagTitle.length === 0) {
      alert("Please enter a tag name");
      return;
    }

    const response = await fetch("/next/api/learn/tags-new-endpoints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tag_title: newTagTitle }),
    });

    const data = await response.json();
    if (data) {
      getTags();
      setNewTagTitle("");
    }
  };

  const editTag = async (tagId: number, title: any) => {
    setIsUpdateTag(isUpdateTag ? false : true);
    setUpdateTagId(tagId);
    setNewTagTitle(title);
  };

  const updateTag = async (tagId: number) => {
    if (newTagTitle.length === 0) {
      alert("Please enter a tag name");
      return;
    }

    const response = await fetch(`/next/api/learn/tags-new-endpoints`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tag_title: newTagTitle,
        tag_id: tagId,
        update_status: false,
      }),
    });

    const data = await response.json();
    if (data) {
      getTags();
      setNewTagTitle("");
      setIsUpdateTag(false);
      setUpdateTagId(0);
    }
  };

  const updateTagStatus = async (tagId: number, isActive: boolean) => {
    const response = await fetch(`/next/api/learn/tags-new-endpoints`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tag_id: tagId,
        is_active: isActive,
        update_status: true,
      }),
    });

    const data = await response.json();
    if (data) {
      getTags();
    }
  };

  const createUpdateTag = async () => {
    if (isUpdateTag) {
      updateTag(updateTagId);
    } else {
      createTag();
    }
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col justify-between items-center mb-4">
        <div className="self-start py-2">
          {isUpdateTag ? (
            <h1 className="text-2xl font-bold dark:text-white">Update Tag</h1>
          ) : (
            <h1 className="text-2xl font-bold dark:text-white">Add new Tag</h1>
          )}
        </div>
        <div className="flex w-full gap-4">
          <input
            type="text"
            placeholder="Enter tag name"
            value={newTagTitle}
            onChange={(e) => setNewTagTitle(e.target.value)}
            className="px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            className="px-4 py-2 bg-primary text-white rounded-md shadow-md"
            onClick={createUpdateTag}
          >
            {isUpdateTag ? <>Update Tag</> : <>Add Tag</>}
          </button>
        </div>
        <div className="self-start py-2">
          <h1 className="text-2xl font-bold dark:text-white">Current tags</h1>
        </div>
      </div>
      {!loading && tags.length > 0 && (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"></th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
              {tags.map((tag: any) => (
                <tr key={tag.learn_tag_id} className="hover:bg-gray-100 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                    {tag.learn_tag_id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                    {tag.tag_title}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium dark:text-gray-200 ${tag.is_active == "y" ? "text-primary" : "text-red-500"}`}
                  >
                    {tag.is_active == "y" ? "Active" : "Inactive"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                    <button
                      className="text-primary"
                      onClick={() => editTag(tag.learn_tag_id, tag.tag_title)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828zM4 12v4h4v-4H4z" />
                      </svg>
                    </button>
                    <button
                      className="text-primary"
                      onClick={() =>
                        updateTagStatus(tag.learn_tag_id, tag.is_active === "y" ? false : true)
                      }
                    >
                      <Image
                        width={25}
                        height={25}
                        src="/next/next_assets/images/icons/trash.svg"
                        alt="Delete icon"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {loading && <p className="text-center text-gray-500 dark:text-gray-400">Loading...</p>}
      {!loading && tags.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">No tags available</p>
      )}
    </div>
  );
};

export default AdminTags;
