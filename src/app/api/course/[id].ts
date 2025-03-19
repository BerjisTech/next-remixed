// proz-next/pages/api/course/[id].ts

import { NextApiRequest, NextApiResponse } from "next";
import { getCourseById } from "@/server/data/learning";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Course ID is required" });
  }

  const courseData = await getCourseById(Number(id));

  if (!courseData) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.status(200).json(courseData);
}
