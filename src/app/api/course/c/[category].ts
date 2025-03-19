// proz-next/pages/api/course/c/[category].ts

import { NextApiRequest, NextApiResponse } from "next";
import { getCoursesByCategory } from "@/server/data/learning";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;

  if (!category) {
    return res.status(400).json({ error: "Category ID is required" });
  }

  const categoryId = Number(category);
  const courses = await getCoursesByCategory(categoryId);

  res.status(200).json(courses);
}
