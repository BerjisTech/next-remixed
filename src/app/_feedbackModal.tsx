"use client";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog";
import { Button } from "@/components/shadcn/button";
import { Form } from "@/components/shadcn/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RenderTextArea } from "@/components/shadcn/formItems/renderTextArea";
import { usePathname } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import RenderStarRating from "@/components/shadcn/formItems/renderStarRating";

const formSchema = z.object({
  suggestion: z.string().min(2, { message: "This field is required." }),
  url: z.string().min(1, { message: "This field is required." }),
  rating: z.coerce.number().default(0),
});

const FeedbackModal = () => {
  let pathname = usePathname() ?? "";
  const { showFeedbackModal } = useAppSelector((state) => state.content);
  const { user } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      suggestion: "",
      url: "",
      rating: 0,
    },
  });

  const toggleDrawer = () => {
    dispatch(setContentSliceBits({ bitToSet: "showFeedbackModal", value: !showFeedbackModal }));
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/website-feedback?entityId=${user?.entity_id}`,
        {
          ...data,
        },
        { headers: { "Content-Type": "application/json", Accept: "application/json" } }
      );
      toggleDrawer();
      toast.success("Feedback saved successfully!");
    } catch (error) {
      toast.error("Error saving feedback!");
    }
  };

  useEffect(() => {
    if (showFeedbackModal) {
      form.setValue("url", pathname ?? "");
    }
    return () => {
      form.reset();
    };
  }, [showFeedbackModal]);

  return (
    <Dialog
      open={showFeedbackModal}
      onOpenChange={() => {
        toggleDrawer();
      }}
    >
      <DialogContent
        showCloseBtn={false}
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center">We’d love to hear your thoughts!</DialogTitle>
          <DialogDescription className="text-center">
            Your feedback shapes the future of our website. Please take a moment to share your
            insights and suggestions.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <RenderStarRating
              form={form}
              name="rating"
              label="How promising do you find this prototype?"
            />
            <RenderTextArea
              name="suggestion"
              form={form}
              label="Do you have any ideas, suggestions, or questions?"
            />
            <DialogFooter>
              <Button
                type="button"
                variant="destructive"
                onClick={() => {
                  toggleDrawer();
                }}
              >
                Cancel
              </Button>
              <Button autoFocus type="submit">
                Submit feedback
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackModal;
