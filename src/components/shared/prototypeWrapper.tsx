"use client";

import { usePathname } from "next/navigation";
import Prototype from "@/app/_prototype";

export default function PrototypeWrapper() {
  let pathname = usePathname() ?? ""; // Get the current route

  // Define pages where the Prototype banner should NOT appear
  const excludedRoutes = [
    "/pastey",
    "/managed-services",
    "/about/services",
    "/community/proz-pro-bono",
    "/360",
  ];
  const excludedPrefixes = ["/learn"];

  // Check if pathname is in excludedRoutes or starts with any prefix in excludedPrefixes
  if (
    excludedRoutes.includes(pathname) ||
    excludedPrefixes.some((prefix) => pathname.startsWith(prefix))
  ) {
    return null;
  }

  return <Prototype />;
}
