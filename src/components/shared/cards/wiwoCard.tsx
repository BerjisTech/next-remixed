"use client";
import React from "react";
import { Badge } from "@/components/shadcn/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shadcn/card";
import { Separator } from "@/components/shadcn/separator";
import { useContentHook } from "@/hooks/useContentHook";
import { capitalize, getFormattedDate } from "@/utils/helpers";
import { Wiwo } from "@/interfaces/wiwo";

const WiwoCard = ({ data }: { data: Wiwo }) => {
  const { getLanguagePair } = useContentHook();
  return (
    <Card className="w-full text-dark-blue-hue my-2">
      <CardHeader className="py-4">
        <CardTitle className="items-center text-sm !pb-0 !mb-0">
          <span className="underline font-bold">What I'm working on:</span>{" "}
          <span className="font-normal">{data.message}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-0">
        <div className="flex justify-between text-sm">
          <span className="text-sm">No reactions available!</span>
          <i>{getFormattedDate(data.time)}</i>
        </div>
        {(data.discipline || data.cat_tool || data.source_language || data.target_language) && (
          <React.Fragment>
            <Separator className="mb-4" />
            <div className=" flex flex-row">
              {data.discipline && (
                <Badge variant="custom" className="mr-2">
                  {capitalize(data.discipline)}
                </Badge>
              )}
              {data.cat_tool && (
                <Badge variant="custom" className="mr-2">
                  {capitalize(data.cat_tool)}
                </Badge>
              )}
              {(data.source_language || data.target_language) && (
                <Badge variant="custom" className="mr-2">
                  {getLanguagePair(data.source_language + "_" + data.target_language)}
                </Badge>
              )}
            </div>
          </React.Fragment>
        )}
      </CardContent>
    </Card>
  );
};

export default WiwoCard;
