import { NavItem } from "@/interfaces/navigation/menu-items";

// Fetch all navigation links
export function useNavigationHook() {
  /**
   * Fetch all nav links
   * @returns
   */
  const fetchNavLinks = async () => {
    const response = await fetch("/next/api/nav-links", { method: "GET" });
    const data = await response.json();
    return data;
  };

  /**
   * Create a new navigation link
   * @param navItem
   * @returns
   */
  const createNavLink = async (navItem: any) => {
    const response = await fetch("/next/api/nav-links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(navItem),
    });
    const data = await response.json();
    return data;
  };

  /**
   * Update an existing navigation link
   * @param navItem
   * @returns
   */
  const updateNavLink = async (navItem: NavItem) => {
    const response = await fetch("/next/api/nav-links", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(navItem),
    });
    const data = await response.json();
    return data;
  };

  /**
   * Delete a navigation link by ID
   * @param id
   * @returns
   */
  const deleteNavLink = async (id: number) => {
    const response = await fetch("/next/api/nav-links", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    return data;
  };

  return {
    fetchNavLinks,
    createNavLink,
    updateNavLink,
    deleteNavLink,
  };
}
