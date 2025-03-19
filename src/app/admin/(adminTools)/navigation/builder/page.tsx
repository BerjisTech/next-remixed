"use client";
// components/admin/navigation/Builder.tsx
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { NavItem } from "@/interfaces/navigation/menu-items";
import NavItemComponent from "./_navItemElement";
import { toast } from "sonner";
import { useNavigationHook } from "@/hooks/useNavigationHook";
import { capitalize } from "@/utils/helpers";
import clsx from "clsx";

const Builder: React.FC = () => {
  const { fetchNavLinks, createNavLink } = useNavigationHook();
  const { register, handleSubmit, setValue, getValues, reset, control } = useForm();
  const [showNewNavForm, setShowNewNavForm] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [filteredParents, setFilteredParents] = useState<NavItem[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const [navCategories, setNavCategories] = useState<string[]>([]);
  const [parents, setParents] = useState<{ parent_id: number; name: string }[]>([]);
  const [showNewNavParentField, setShowNewNavParentField] = useState(false);

  useEffect(() => {
    const initializeNavItems = async () => {
      const items = await fetchNavLinks();
      setNavItems(items);
      extractCategories(items);
    };
    initializeNavItems();
  }, []);

  const extractCategories = (items: NavItem[]) => {
    const categories = Array.from(
      new Set(
        items.map((item) => item.location).filter((location) => location !== "") // Filter out empty strings
      )
    );
    setNavCategories(categories);
    setActiveCategory(categories[0]);
  };

  const onSubmit = async (data: any) => {
    const newNavItem = {
      ...data,
      nav_item_id: "", // This will be set by the backend
      parent_ids: getParentIds(),
    };
    try {
      await createNavLink(newNavItem);
      toast.success("Navigation item created successfully");
      reset();
      setShowNewNavForm(false);
    } catch {
      toast.error("Failed to create navigation item");
    }
  };

  const getParentIds = () => {
    return parents.map((parent) => parent.parent_id).join(",");
  };

  const addTag = (name: string, parent_id: number) => {
    if (name && !parents.some((parent) => parent.parent_id === parent_id)) {
      setParents([...parents, { parent_id, name }]);
    }
    setValue("parent_ids", "");
    setShowNewNavParentField(false);
  };

  const removeTag = (parent_id: number) => {
    setParents(parents.filter((parent) => parent.parent_id !== parent_id));
  };

  const filterParents = (value: string) => {
    setFilteredParents(
      navItems.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const filterCategories = (value: string) => {
    setFilteredCategories(
      navCategories.filter((category) => category.toLowerCase().includes(value.toLowerCase()))
    );
  };

  const selectTag = (navItem: NavItem) => {
    addTag(navItem.name, parseInt(navItem.nav_item_id, 10));
  };

  const toggleDropdown = () => {
    setShowNewNavParentField(!showNewNavParentField);
  };

  const hideDropdown = () => {
    setTimeout(() => {
      setShowNewNavParentField(false);
    }, 200);
  };

  const onLocationSelect = (category: string) => {
    setValue("location", category);
    setFilteredCategories([]);
  };

  return (
    <div>
      <div className="text-primary flex items-center justify-start border-b border-secondary capitalize navigation-header">
        {navCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={clsx("p-5 rounded-t-lg hover:bg-primary hover:text-white", {
              "bg-primary text-white dark:bg-primary": activeCategory === category,
            })}
          >
            {category && capitalize(category)}
          </button>
        ))}
        <button
          onClick={() => setActiveCategory("ALL")}
          className={clsx("p-5 rounded-t-lg hover:bg-primary hover:text-white", {
            "bg-primary text-white dark:bg-primary": activeCategory === "ALL",
          })}
        >
          ALL
        </button>
        <span className="flex-grow"></span>
        <button
          onClick={() => setShowNewNavForm(!showNewNavForm)}
          className="material-symbols-outlined"
        >
          {showNewNavForm ? "Remove" : "Add"}
        </button>
      </div>

      {showNewNavForm && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-grow w-full flex flex-col my-5 text-primary px-3"
        >
          <input
            {...register("name", { required: true })}
            className="outline-none focus:outline-none p-3 bg-white dark:bg-black border-e border-secondary"
            type="text"
            placeholder="Enter menu name"
          />
          <input
            {...register("url", { required: true })}
            className="outline-none focus:outline-none p-3 bg-white dark:bg-black border-e border-secondary"
            type="text"
            placeholder="Enter menu URL"
          />
          <div className="relative bg-white dark:bg-black border-e border-secondary">
            <Controller
              name="parent_ids"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  onKeyDown={(event) => {
                    if (event.key === "," || event.key === "Enter") {
                      event.preventDefault();
                      if (field.value) {
                        const value = field.value.trim();
                        const navItem = navItems.find((item) => item.name === value);
                        if (navItem) {
                          addTag(navItem.name, parseInt(navItem.nav_item_id, 10));
                        } else {
                          addTag(value, Date.now()); // Add with a temporary ID if not found
                        }
                      }
                    }
                  }}
                  onFocus={toggleDropdown}
                  onBlur={hideDropdown}
                  className="outline-none focus:outline-none bg-white dark:bg-black w-full p-3"
                  type="text"
                  placeholder="Enter menu parent"
                />
              )}
            />
            <div className="w-full flex flex-wrap gap-2">
              {parents.map((parent) => (
                <span
                  key={parent.parent_id}
                  className="rounded-md p-1 flex items-center justify-center bg-primary dark:bg-primary text-accent-foreground"
                >
                  {parent.name}
                  <span className="remove-tag" onClick={() => removeTag(parent.parent_id)}>
                    &#x2716;
                  </span>
                </span>
              ))}
            </div>
            {showNewNavParentField && filteredParents.length > 0 && (
              <div className="absolute top-[100%] right-0 left-0 m-0">
                <div className="bg-white border border-secondary rounded-b-lg m-0">
                  {filteredParents.map((navItem) => (
                    <div
                      key={navItem.nav_item_id}
                      onClick={() => selectTag(navItem)}
                      className="p-2 hover:bg-primary hover:text-white"
                    >
                      {navItem.name}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="relative bg-white dark:bg-black border-e border-secondary">
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    filterCategories(e.target.value);
                  }}
                  className="outline-none focus:outline-none bg-white dark:bg-black w-full p-3"
                  type="text"
                  placeholder="Enter or select a category (location)"
                />
              )}
            />
            {filteredCategories.length > 0 && (
              <div className="absolute top-[100%] right-0 left-0 bg-white border border-secondary rounded-b-lg z-10">
                {filteredCategories.map((category) => (
                  <div
                    key={category}
                    onClick={() => onLocationSelect(category)}
                    className="p-2 hover:bg-primary hover:text-white"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary dark:bg-primary text-accent-foreground p-4 rounded-lg"
          >
            Save Menu Item
          </button>
        </form>
      )}

      <div className="nav-items">
        {navItems
          .filter((item) => !activeCategory || item.location === activeCategory)
          .map((item) => (
            <NavItemComponent key={item.nav_item_id} navItem={item} navItems={navItems} />
          ))}
      </div>
    </div>
  );
};

export default Builder;
