// proz-next/pages/api/course/all.ts

import { NextApiRequest, NextApiResponse } from "next";
import { mdl_course } from "@/interfaces/learning";
import { courses } from "@/server/data/learning";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const allCourses: mdl_course[] = await courses();

  res.status(200).json(allCourses);
}
