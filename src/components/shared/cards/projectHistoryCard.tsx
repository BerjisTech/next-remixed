"use client";
import React from "react";
import { Badge } from "@/components/shadcn/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Separator } from "@/components/shadcn/separator";
import { ProjectHistory } from "@/interfaces/account";
import { useContentHook } from "@/hooks/useContentHook";
import { getFormattedDate } from "@/utils/helpers";
import StarRating from "../starRating";
import { JOB_TYPES } from "@/constants/jobs";
import { useAppDispatch } from "@/lib/store/hooks";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
// setActiveSubNav: React.Dispatch<React.SetStateAction<any>>;

interface ProjectHistoryCardProp {
  data: ProjectHistory;
  canEdit?: boolean;
}

const ProjectHistoryCard: React.FC<ProjectHistoryCardProp> = ({ data, canEdit = false }) => {
  const dispatch = useAppDispatch();
  const handleEdit = () => {
    dispatch(setContentSliceBits({ bitToSet: "project", value: data }));
    dispatch(setContentSliceBits({ bitToSet: "showDrawerPh", value: true }));
  };
  const { getLanguagePair } = useContentHook();
  return (
    <Card className="w-full text-dark-blue-hue dark:bg-dark border-white my-2 !rounded-custom shadow-lg">
      <CardHeader className="py-4">
        <CardTitle className="flex justify-between items-center font-bold text-sm !pb-0 !mb-0">
          <span>{data.short_description}</span>
          {data.verified === "y" ? (
            <Badge variant="default">Verified</Badge>
          ) : (
            <Badge variant="secondary">Not verified</Badge>
          )}
        </CardTitle>
        {data.comment && <CardDescription>{data.comment}</CardDescription>}
      </CardHeader>
      <CardContent className="mt-0">
        <div className="flex flex-row flex-wrap gap-y-1">
          {data.job_type && (
            <Badge variant="custom" className="mr-2">
              {JOB_TYPES[data.job_type]}
            </Badge>
          )}
          {data.language_pairs.length > 0 &&
            data.language_pairs.map((item, index) => (
              <Badge variant="custom" className="mr-2" key={index}>
                {getLanguagePair(item)}
              </Badge>
            ))}
          {data.disc_specs.length > 0 &&
            data.disc_specs.map((item, index) => (
              <Badge variant="custom" className="mr-2" key={index}>
                {item}
              </Badge>
            ))}
        </div>
        <div className="text-sm mt-4 flex flex-row justify-between">
          <div className="">
            <span>
              <span className="font-bold">Volume:</span> {data.volume_amount}
            </span>
            &nbsp; &nbsp;
            <span>
              <span className="font-bold">Completed:</span>{" "}
              {data.date_completed && getFormattedDate(data.date_completed)}
            </span>
          </div>
          {canEdit && (
            <div>
              <span
                className="material-symbols-outlined text-primary"
                role="button"
                onClick={() => {
                  handleEdit();
                }}
              >
                edit
              </span>
            </div>
          )}
        </div>
        {(data.feedback === 1 || data.outsourcer_comment) && (
          <React.Fragment>
            <Separator className="my-2" />
            <div className="flex flex-row gap-2">
              {data.feedback === 1 && <StarRating rating="5" size="small" />} &nbsp;{" "}
              {data.outsourcer_comment && data.outsourcer_comment}
            </div>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectHistoryCard;
