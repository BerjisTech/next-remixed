"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/shadcn/sheet";
import ProzTooltip from "@/components/shared/prozTooltip";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import { Form } from "@/components/shadcn/form";
import axios from "axios";
import { toast } from "sonner";
import { useContentHook } from "@/hooks/useContentHook";
import { useGetUserPairsQuery } from "@/lib/store/features/profile/profileApiSlice";
import { Skeleton } from "@/components/shadcn/skeleton";
import { RenderSelect } from "@/components/shadcn/formItems/renderSelect";
import { Button } from "@/components/shadcn/button";
import { useGetSpecificDisciplinesQuery } from "@/lib/store/features/content/contentApiSlice";
import { RenderTextArea } from "@/components/shadcn/formItems/renderTextArea";
import { RenderInput } from "@/components/shadcn/formItems/renderInput";

const formSchema = z.object({
  language_pair: z.string().min(2, { message: "This field is required." }),
  title: z.string().min(2, { message: "This field is required." }),
  discipline_id: z.coerce.number().gte(0, { message: "This field is required." }),
  translation_id: z.coerce.number().optional(),
  specific_field: z.coerce.number().gte(0, { message: "This field is required." }),
  source_text: z.string().min(2, { message: "This field is required." }),
  target_text: z.string().min(2, { message: "This field is required." }),
  content_type: z.string().min(2, { message: "This field is required." }).default("text"),
});

interface AddProjectHistoryProps {
  children: React.ReactNode;
}

const contentTypes = {
  html: "Html",
  text: "Text",
};

const AddSamples: React.FC<AddProjectHistoryProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { getLanguagePair } = useContentHook();
  const { entityId } = useAppSelector((state) => state.profile);
  const { showDrawerSamples, sample } = useAppSelector((state) => state.content);
  const { data: pairs, isLoading: pairsLoading } = useGetUserPairsQuery(entityId, {
    skip: !entityId,
  });
  const { data: specDisciplines, isLoading: specDisciplinesLoading } =
    useGetSpecificDisciplinesQuery("specific");
  const { data: genDisciplines, isLoading: genDisciplinesLoading } =
    useGetSpecificDisciplinesQuery("general");
  const [isReady, setIsReady] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      translation_id: 0,
      title: "",
      language_pair: "",
      discipline_id: 0,
      specific_field: 0,
      source_text: "",
      target_text: "",
      content_type: "text",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/portfolio`,
      {
        entity_id: entityId,
        ...data,
      },
      { headers: { "Content-Type": "application/json", Accept: "application/json" } }
    );
    if (response.status === 200) {
      let msg = sample ? "Sample updated successfully" : "Sample added successfully";
      toast.success(msg);
      form.reset();
      hideDialog();
    }
  };

  const hideDialog = () => {
    form.reset();
    dispatch(setContentSliceBits({ bitToSet: "showDrawerSamples", value: false }));
    dispatch(setContentSliceBits({ bitToSet: "sample", value: null }));
    dispatch(setContentSliceBits({ bitToSet: "refetchSamples", value: true }));
  };

  const getPairsData = (data: Record<string, string> | undefined) => {
    if (!data) {
      return null;
    }
    const updatedData: Record<string, string> = {};
    for (const [key, value] of Object.entries(data)) {
      updatedData[key] = getLanguagePair(key);
    }
    return updatedData;
  };

  const pairsData: Record<string, string> | null = getPairsData(pairs) ?? null;

  useEffect(() => {
    setIsReady(true);
    if (sample && isReady) {
      console.log("Setting project to edit id:" + sample.translation_id);
      form.setValue("translation_id", sample.translation_id as number);
      form.setValue("title", sample.title as string);
      form.setValue("language_pair", sample.language_pair as string);
      form.setValue("source_text", sample.source_text as string);
      form.setValue("target_text", sample.target_text as string);
      form.setValue("content_type", sample.content_type as string);
      form.setValue("specific_field", sample.detailed_field_id as number);
      form.setValue("discipline_id", sample.general_field_id as number);
    }
    // Trigger re-render when form values are set to populate dropdowns
  }, [sample]);
  if (!isReady) return null;

  return (
    <Sheet onOpenChange={() => hideDialog()} open={showDrawerSamples}>
      <ProzTooltip message="Add sample">{children}</ProzTooltip>
      <SheetContent
        className="min-w-[50rem] overflow-y-scroll"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <SheetHeader className="mb-5 relative">
          <X className="absolute right-2 top-2 cursor-pointer" onClick={() => hideDialog()} />
          <SheetTitle className="text-center">Portfolio/Sample Translations</SheetTitle>
        </SheetHeader>

        <div className="bg-accent p-4 rounded-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="block md:flex gap-5">
                <div className="w-full">
                  <RenderInput name={"title"} form={form} label={"Title"}></RenderInput>
                </div>
              </div>
              <div className="block md:flex gap-5">
                <div className="w-full">
                  {pairsLoading || !pairsData ? (
                    <Skeleton className="w-full h-10" />
                  ) : (
                    <RenderSelect
                      name={"language_pair"}
                      form={form}
                      options={pairsData}
                      label={"Language pair"}
                    ></RenderSelect>
                  )}
                </div>
              </div>
              <div className="block md:flex gap-5">
                <div className="basis-1/2 w-full">
                  {genDisciplinesLoading || !genDisciplines ? (
                    <Skeleton className="w-full h-10" />
                  ) : (
                    <RenderSelect
                      name={"discipline_id"}
                      form={form}
                      options={genDisciplines}
                      label={"General field"}
                    ></RenderSelect>
                  )}
                </div>
                <div className="basis-1/2 w-full">
                  {specDisciplinesLoading || !specDisciplines ? (
                    <Skeleton className="w-full h-10" />
                  ) : (
                    <RenderSelect
                      name={"specific_field"}
                      form={form}
                      options={specDisciplines}
                      label={"Detailed field"}
                    ></RenderSelect>
                  )}
                </div>
              </div>
              <div className="block md:flex gap-5">
                <div className="w-full">
                  <RenderSelect
                    name={"content_type"}
                    form={form}
                    options={contentTypes}
                    label={"Content type"}
                  ></RenderSelect>
                </div>
              </div>
              <div className="block md:flex gap-5">
                <div className="basis-1/2 w-full">
                  <RenderTextArea
                    name={"source_text"}
                    form={form}
                    label={"Source text"}
                  ></RenderTextArea>
                </div>
                <div className="basis-1/2 w-full">
                  <RenderTextArea
                    name={"target_text"}
                    form={form}
                    label={"Target text"}
                  ></RenderTextArea>
                </div>
              </div>
              <div className="flex justify-end mt-5">
                <Button type="submit" className="min-w-[10rem]">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default AddSamples;
