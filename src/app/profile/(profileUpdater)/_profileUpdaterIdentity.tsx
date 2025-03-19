"use client";
import { Form } from "@/components/shadcn/form";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomLabel from "@/components/shadcn/customLabel";
import { RenderInput } from "@/components/shadcn/formItems/renderInput";
import { ProzUser } from "@/interfaces/account";
import { Button } from "@/components/shadcn/button";
import { Save } from "lucide-react";
import { useAppSelector } from "@/lib/store/hooks";
import PersonalPrefCheckbox from "@/components/shared/preferences/personalPrefCheckbox";
import axios, { isAxiosError } from "axios";
import { useContentHook } from "@/hooks/useContentHook";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Alert from "@/components/shared/alert";

const formSchema = z.object({
  username: z.string().min(2, { message: "This field is required." }),
  contact_first: z.string().min(2, { message: "This field is required." }),
  contact_middle: z.string().optional(),
  contact_last: z.string().optional(),
});

const ProfileUpdaterIdentity = ({ user }: { user: ProzUser }) => {
  const { showDrawerProfile } = useAppSelector((state) => state.content);
  const { setDrawerVisibility } = useContentHook();
  const router = useRouter();
  const [errors, setErrors] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      contact_first: "",
      contact_middle: "",
      contact_last: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/update?entityId=${user.entity_id}`,
        {
          section: "profile-fields",
          fields: data,
        },
        { headers: { "Content-Type": "application/json", Accept: "application/json" } }
      );

      setErrors([]);
      setDrawerVisibility("identity");
      router.refresh();
      toast.success("Profile updated successfully!");
    } catch (error) {
      if (isAxiosError(error) && error.response?.data?.errors) {
        setErrors(error.response?.data?.errors as any[]);
        toast.error("Failed to update profile");
      }
    }
  };

  useEffect(() => {
    if (showDrawerProfile) {
      form.setValue("username", user.username ?? "");
      form.setValue("contact_first", user.contact_first ?? "");
      form.setValue("contact_middle", user.contact_middle ?? "");
      form.setValue("contact_last", user.contact_last ?? "");
    }
  }, [showDrawerProfile]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="w-full">
          <CustomLabel
            className="my-2"
            label={
              "Display name: " +
              (user?.contact_first ?? "") +
              " " +
              (user?.contact_middle ?? "") +
              " " +
              (user?.contact_last ?? "")
            }
            description="Choose the name you want visitors to see."
          />
          <div className="w-full p-4 rounded-custom bg-accent space-y-4 pb-5">
            <div className="w-full">
              <RenderInput
                helpText="Changing your username will not affect your VID status if your identity has been verified."
                label="Username"
                name={"username"}
                form={form}
              ></RenderInput>
            </div>
            <div className="block md:flex gap-5">
              <div className="basis-1/2 w-full">
                <RenderInput
                  disabled
                  helpText="First name"
                  label="First name"
                  name={"contact_first"}
                  form={form}
                ></RenderInput>
              </div>
              <div className="basis-1/2 w-full">
                <RenderInput
                  disabled
                  helpText="Middle name"
                  label="Middle name"
                  name={"contact_middle"}
                  form={form}
                ></RenderInput>
              </div>
            </div>
            <div className="w-full">
              <RenderInput
                disabled
                helpText="Last name"
                label="Last name"
                name={"contact_last"}
                form={form}
              ></RenderInput>
            </div>
            <div className="w-full pt-5">
              <PersonalPrefCheckbox
                prefName="name_opt_out"
                value={user.prof_prefs.name_opt_out}
                entityId={user.entity_id}
                label="I choose not to enter this information"
              />
            </div>
            {errors.length > 0 && (
              <Alert
                title="Failed to update profile"
                description={errors.map((item) => item.message)}
                variant="error"
              />
            )}
          </div>
          <div className="mt-5 flex justify-end">
            <Button>
              <Save /> Save updates
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProfileUpdaterIdentity;
