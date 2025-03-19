"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/shadcn/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/shadcn/sheet";
import { Form } from "@/components/shadcn/form";
import React, { useEffect, useState } from "react";
import { RenderInput } from "@/components/shadcn/formItems/renderInput";
import { RenderSelect } from "@/components/shadcn/formItems/renderSelect";
import { JOB_TYPES } from "@/constants/jobs";
import {
  useGetSoftwaresQuery,
  useGetSpecificDisciplinesQuery,
} from "@/lib/store/features/content/contentApiSlice";
import { RenderMultiSelect } from "@/components/shadcn/formItems/renderMultiSelect";
import { useGetUserPairsQuery } from "@/lib/store/features/profile/profileApiSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { Skeleton } from "@/components/shadcn/skeleton";
import { useContentHook } from "@/hooks/useContentHook";
import { RenderCheckbox } from "@/components/shadcn/formItems/renderCheckbox";
import axios from "axios";
import { toast } from "sonner";
import { RenderDatePicker } from "@/components/shadcn/formItems/renderDatePicker";
import ProzTooltip from "@/components/shared/prozTooltip";
import { X } from "lucide-react";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";

interface AddProjectHistoryProps {
  children: React.ReactNode;
}

const visibilityOptions = {
  y: "Public",
  n: "Private",
};

const currencyOptions = {
  usd: "USD",
  eur: "EUR",
};

const formSchema = z.object({
  short_description: z.string().min(2, { message: "Short description is required." }),
  language_pairs: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  job_type: z.string().min(2, { message: "Wiwo service is required." }),
  volume_amount: z.coerce.number().gte(0, { message: "This field is required." }).default(0),
  pricing_amount: z.coerce.number().gte(0, { message: "This field is required." }),

  // wiwo_payment_info_visibility: z.string().min(1, { message: "This field is required." }).default('y'),
  show_outsourcer: z.string().min(1, { message: "This field is required." }).default("y"),
  visible: z.string().min(1, { message: "This field is required." }).default("y"),
  cat_tool: z.string().min(1, { message: "This field is required." }),
  outsourcer_name: z.string().optional(),
  date_completed: z
    .date()
    .default(new Date())
    .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
      message: "Date must be a valid date",
    })
    .nullable(),
  pricing_currency: z.string().optional(),
  specific_disciplines: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  sample_text: z.string().min(1, { message: "This field is required." }),
  outsourcer_paid: z.string().default("n").optional(),
  show_in_project_history: z.string().default("n").optional(),
  project_history_id: z.coerce.number().optional(),
});

// useGetSpecificDisciplinesQuery
export function AddProjectHistory({ children }: AddProjectHistoryProps) {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useAppDispatch();
  const { showDrawerPh, project } = useAppSelector((state) => state.content);
  const { getLanguagePair } = useContentHook();
  const { entityId } = useAppSelector((state) => state.profile);
  const { data: specDisciplines } = useGetSpecificDisciplinesQuery("specific");
  const { data: softwares, isLoading: softwaresLoading } = useGetSoftwaresQuery();
  const { data: pairs, isLoading: pairsLoading } = useGetUserPairsQuery(entityId, {
    skip: !entityId,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      project_history_id: 0,
      short_description: "",
      job_type: "",
      specific_disciplines: [],
      sample_text: "",
      language_pairs: [],
      cat_tool: "",
      volume_amount: 0,
      pricing_amount: 0,
      pricing_currency: "",
      date_completed: new Date(),
      outsourcer_paid: "n",
      show_outsourcer: "y",
      show_in_project_history: "n",
      visible: "n",
      outsourcer_name: "",
    },
  });

  const getPairsData1 = (data: Record<string, string> | undefined) => {
    if (!data) {
      return [];
    }
    return Object.entries(data).map(([key, value]) => ({
      value: key, // Use the key as the "value"
      label: getLanguagePair(key), // Use a transformed value as the "label"
    }));
  };

  const hideDialog = () => {
    form.reset();
    dispatch(setContentSliceBits({ bitToSet: "showDrawerPh", value: false }));
    dispatch(setContentSliceBits({ bitToSet: "project", value: null }));
    dispatch(setContentSliceBits({ bitToSet: "refetchPh", value: true }));
  };
  const pairsData1: { value: string; label: string }[] = getPairsData1(pairs) ?? null;

  const specDisciplinesList: { value: string; label: string }[] = specDisciplines
    ? Object.entries(specDisciplines).map(([key, value]) => ({
        value: key, // Use the key as the "value"
        label: value, // Use the value as the "label"
      }))
    : [];

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/project-history`,
      {
        entity_id: entityId,
        ...data,
      },
      { headers: { "Content-Type": "application/json", Accept: "application/json" } }
    );
    if (response.status === 200) {
      let msg = project ? "Project updated successfully" : "Project added successfully";
      toast.success(msg);
      form.reset();
      hideDialog();
    }
  };

  useEffect(() => {
    setIsReady(true);
    if (project && isReady) {
      console.log("Setting project to edit id:" + project.project_history_id);
      form.setValue("project_history_id", project.project_history_id as number);
      form.setValue("job_type", project.job_type as string);
      form.setValue("short_description", project.short_description as string);
      form.setValue("sample_text", project.sample_text as string);
      form.setValue("language_pairs", project.language_pairs as string[]);
      form.setValue("cat_tool", project.cat_tool as string);
      form.setValue("volume_amount", project.volume_amount as number);
      form.setValue("pricing_amount", project.pricing_amount as number);
      form.setValue("show_in_project_history", project.show_in_project_history as string);
      form.setValue("visible", project.visible as string);
      form.setValue("outsourcer_paid", project.outsourcer_paid as string);
      form.setValue("pricing_currency", project.pricing_currency as string);
      form.setValue("specific_disciplines", project.disc_specs_ids as string[]);
    }
    // Trigger re-render when form values are set to populate dropdowns
  }, [project]);
  if (!isReady) return null;

  return (
    <Sheet onOpenChange={() => hideDialog()} open={showDrawerPh}>
      <ProzTooltip message="Add project">
        {/* <SheetTrigger asChild> */}
        {children}
        {/* </SheetTrigger> */}
      </ProzTooltip>
      <SheetContent
        className="min-w-[50rem] overflow-y-scroll"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <SheetHeader className="mb-5 relative">
          <X className="absolute right-2 top-2 cursor-pointer" onClick={() => hideDialog()} />
          <SheetTitle className="text-center">Add a new project history entry</SheetTitle>
          <SheetDescription className="text-center">
            The project history feature allows you to showcase select projects in your profile that
            are representative of your experience. You may also ask outsourcers to give you feedback
            on each project
          </SheetDescription>
        </SheetHeader>
        <div className="bg-accent p-4 rounded-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="block">
                <RenderInput
                  name={"short_description"}
                  form={form}
                  label={"Short Project Description"}
                ></RenderInput>
              </div>
              <div className="block md:flex gap-5">
                <div className="basis-1/2 w-full">
                  <RenderSelect
                    name={"job_type"}
                    form={form}
                    options={JOB_TYPES}
                    label={"Project role / service type"}
                  ></RenderSelect>
                </div>
                <div className="basis-1/2 w-full">
                  <RenderMultiSelect
                    form={form}
                    name="language_pairs"
                    options={pairsData1}
                    label="Language pairs"
                    maxCount={1}
                  />
                </div>
              </div>
              <div className="block">
                {specDisciplinesList && (
                  <RenderMultiSelect
                    helpText="Ex: Electronics. Include up to three categories, hitting enter after typing each one."
                    form={form}
                    name="specific_disciplines"
                    options={specDisciplinesList}
                    label="Subject matter / fields"
                    maxCount={2}
                  />
                )}
              </div>
              <div className="block">
                <RenderInput name={"sample_text"} form={form} label={"Sample text"}></RenderInput>
                {/* <RenderTagInput label="Representative terms" form={form} name="terms" /> */}
              </div>
              <div className="block md:flex gap-5">
                <div className="basis-1/2 w-full">
                  {softwaresLoading || !softwares ? (
                    <Skeleton className="w-full h-10" />
                  ) : (
                    <RenderSelect
                      name={"cat_tool"}
                      form={form}
                      options={softwares}
                      label={"CAT tool"}
                    ></RenderSelect>
                  )}
                </div>
                <div className="basis-1/2 w-full">
                  <RenderInput
                    name={"volume_amount"}
                    type="number"
                    form={form}
                    label={"Volume"}
                  ></RenderInput>
                </div>
              </div>
              <div className="block md:flex gap-5">
                <div className="basis-1/2 w-full">
                  <RenderInput
                    name={"pricing_amount"}
                    type="number"
                    form={form}
                    label={"Total payment amount"}
                  ></RenderInput>
                </div>
                <div className="basis-1/2 w-full">
                  <RenderSelect
                    name={"pricing_currency"}
                    form={form}
                    options={currencyOptions}
                    label={"Currency"}
                  ></RenderSelect>
                </div>
              </div>
              <div className="block md:flex gap-5">
                <div className="basis-1/2 w-full">
                  <RenderDatePicker
                    name={"date_completed"}
                    form={form}
                    label={"Date completed"}
                  ></RenderDatePicker>
                </div>
                <div className="basis-1/2 w-full">
                  <RenderSelect
                    name={"visible"}
                    form={form}
                    options={visibilityOptions}
                    label={"Visibility"}
                  ></RenderSelect>
                </div>
              </div>
              <div className="block md:flex gap-5">
                <RenderCheckbox
                  name={"outsourcer_paid"}
                  form={form}
                  label="The client has already made the payment."
                />
              </div>

              <div className="block md:flex gap-5">
                <div className="basis-1/2 w-full">
                  <RenderInput
                    name={"outsourcer_name"}
                    form={form}
                    label={"Outsourcer name"}
                  ></RenderInput>
                </div>
                <div className="basis-1/2 w-full">
                  <RenderSelect
                    name={"show_outsourcer"}
                    form={form}
                    options={visibilityOptions}
                    label={"Outsourcer identity visibility"}
                  ></RenderSelect>
                </div>
              </div>
              <div className="block md:flex gap-5">
                <RenderCheckbox
                  name={"show_in_project_history"}
                  form={form}
                  label="Show in project history."
                />
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
}
