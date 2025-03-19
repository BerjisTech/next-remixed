"use client";
import React, { useEffect } from "react";
import { Form } from "@/components/shadcn/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios, { isAxiosError } from "axios";
import { toast } from "sonner";
import { Button } from "@/components/shadcn/button";
import { Save } from "lucide-react";
import { RenderInput } from "@/components/shadcn/formItems/renderInput";
import { ProzUser } from "@/interfaces/account";

const formSchema = z.object({
  username: z.string().min(2, { message: "This field is required." }),
});

const UpdateUsername = ({ user }: { user: ProzUser }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    form.setValue("username", user.username ?? "");
  }, [form, user.username]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/update?entityId=${user?.entity_id}`,
        {
          section: "profile-fields",
          fields: data,
        },
        { headers: { "Content-Type": "application/json", Accept: "application/json" } }
      );

      toast.success("Profile updated successfully!");
    } catch (error) {
      if (isAxiosError(error) && error.response?.data?.errors) {
        // setErrors((error.response?.data?.errors as any[]))
        toast.error("Failed to update profile");
      }
    }
  };

  return (
    <section
      id="username"
      className="dark:bg-black border-[1px] flex-grow border-custom-gray rounded-xl p-5 mt-5 bg-white flex flex-col gap-4 justify-start"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full">
            <RenderInput
              helpText="Changing your username will not affect your VID status if your identity has been verified."
              label="Username"
              name={"username"}
              form={form}
            ></RenderInput>
          </div>
          <div className="mt-5 flex justify-end">
            <Button>
              <Save /> Save updates
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default UpdateUsername;
