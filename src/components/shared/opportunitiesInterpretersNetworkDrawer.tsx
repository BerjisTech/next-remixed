"use client";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/shadcn/sheet";
import { X } from "lucide-react";
import { Trash } from "lucide-react";
import { Separator } from "@/components/shadcn/separator";
import { Form } from "@/components/shadcn/form";
import { useForm, useFieldArray } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomLabel from "@/components/shadcn/customLabel";
import { RenderInput } from "@/components/shadcn/formItems/renderInput";
import { Save } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { toast } from "sonner";

const formSchema = z.object({
  items: z.array(
    z.object({
      language: z.string().min(2, { message: "This field is required." }),
      total_calls: z.coerce.number().gte(0, { message: "This field is required." }).default(0),
    })
  ),
});

const OpportunitiesInterpretersNetworkDrawer: React.FC<any> = () => {
  const { showMissedCallsDrawer } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();

  const newItemForm = useForm<any>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [],
    },
  });

  useEffect(() => {
    fetch("/next/api/opportunities/missed-calls")
      .then((response) => response.json())
      .then((data) => {
        newItemForm.reset({
          items: data.map((item: any) => ({
            language: item.language,
            total_calls: item.total_calls,
          })),
        });
      })
      .catch((error) => console.error("Error fetching missed calls:", error));
  }, []);

  const { fields, append, remove } = useFieldArray({
    control: newItemForm.control,
    name: "items",
  });

  const toggleDrawer = () => {
    dispatch(
      setContentSliceBits({ bitToSet: "showMissedCallsDrawer", value: !showMissedCallsDrawer })
    );
  };

  const handleNewItemSubmit = (data: any) => {
    console.log(data);
    fetch("/next/api/opportunities/missed-calls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        toast.success("Missed calls updated successfully");
      })
      .catch((error) => {
        toast.error("Error updating missed calls");
        console.error("Error:", error);
      });
  };

  return (
    <Sheet open={showMissedCallsDrawer} onOpenChange={toggleDrawer}>
      <SheetContent className="min-w-[50rem] sm:w-[540px] overflow-auto">
        <SheetHeader className="flex flex-row justify-between items-center">
          <SheetTitle>Edit missed calls</SheetTitle>
          <X className="cursor-pointer" size="20" onClick={toggleDrawer} />
        </SheetHeader>
        <Separator className="mb-4" />
        <SheetDescription>
          {/* Add new item */}
          <div className="flex justify-end">
            <Button onClick={() => append({ language: "", total_calls: 0 })} className="mb-4">
              New item
            </Button>
          </div>
          <Form {...newItemForm}>
            <form
              onSubmit={newItemForm.handleSubmit(handleNewItemSubmit)}
              className="space-y-4 mb-4"
            >
              {fields.map((field, index) => (
                <div key={field.id} className="flex items-center space-x-4">
                  <div className="w-full">
                    <CustomLabel label="language" />
                    <div className="w-full p-4 rounded-custom bg-accent space-y-4">
                      <RenderInput
                        name={`items.${index}.language`}
                        helpText="Ex: Argentina"
                        form={newItemForm}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <CustomLabel label="Total Calls" />
                    <div className="w-full p-4 rounded-custom bg-accent space-y-4">
                      <RenderInput
                        name={`items.${index}.total_calls`}
                        type="number"
                        form={newItemForm}
                      />
                    </div>
                  </div>
                  <Button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-500 hover:bg-red-700"
                  >
                    <Trash />
                  </Button>
                </div>
              ))}
              <div className="flex justify-end">
                <Button type="submit">
                  <Save /> Submit
                </Button>
              </div>
            </form>
          </Form>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default OpportunitiesInterpretersNetworkDrawer;
