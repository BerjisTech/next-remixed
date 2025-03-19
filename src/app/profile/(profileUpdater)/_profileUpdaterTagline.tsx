"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TAGLINES_SERVICES } from "@/constants/common";
import { ProzUser, Taglines } from "@/interfaces/account";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Form } from "@/components/shadcn/form";
import { useForm } from "react-hook-form";
import { RenderInput } from "@/components/shadcn/formItems/renderInput";
import { Save } from "lucide-react";
import { useContentHook } from "@/hooks/useContentHook";
import CustomLabel from "@/components/shadcn/customLabel";
import { RenderTextArea } from "@/components/shadcn/formItems/renderTextArea";
import { Button } from "@/components/shadcn/button";

const formSchema = z.object({
  tagline: z.string().min(2, { message: "This field is required." }),
  profile_title: z.string().optional(),
  meta_description: z.string().optional(),
});

const ProfileUpdaterTagline = ({ user }: { user: ProzUser }) => {
  const { setDrawerVisibility } = useContentHook();
  let pathname = usePathname() ?? "";
  const [poolId, setPoolId] = useState<string>("");
  const [serviceId, setServiceId] = useState<number>(0);
  const currentTab: string = pathname.split("/").pop() as string;
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tagline: "",
      profile_title: "",
      meta_description: "",
    },
  });

  useEffect(() => {
    if (currentTab && ["translating", "interpreting", "subtitling"].includes(currentTab)) {
      setServiceId(TAGLINES_SERVICES[currentTab]);
    } else {
      setServiceId(0);
    }
  }, [currentTab]);

  useEffect(() => {
    const getTagline = (): void => {
      let tagline = "";
      let filteredTagline: Taglines[] = [];
      if (
        currentTab &&
        (currentTab === "translating" ||
          currentTab === "interpreting" ||
          currentTab === "subtitling")
      ) {
        const { pools_profiles, pools_taglines } = user.pools_data;
        if (currentTab === "interpreting" && pools_profiles && pools_profiles?.["interpreters"]) {
          setPoolId("interpreters");
          tagline = pools_taglines ? pools_taglines["interpreters"] : "";
        } else if (
          currentTab === "subtitling" &&
          pools_profiles &&
          pools_profiles?.["subtitlers"]
        ) {
          setPoolId("subtitlers");
          tagline = pools_taglines ? pools_taglines["subtitlers"] : "";
        } else {
          filteredTagline = Array.isArray(user?.service_specific_taglines)
            ? user.service_specific_taglines.filter((item) => item.service_id === serviceId)
            : [];
          tagline = filteredTagline.length > 0 ? filteredTagline[0].value : "";
        }
      } else {
        filteredTagline = Array.isArray(user?.service_specific_taglines)
          ? user.service_specific_taglines.filter((item) => item.service_id === 0)
          : [];
        tagline = filteredTagline.length > 0 ? filteredTagline[0].value : "";
      }
      form.setValue("tagline", tagline);
    };

    const getSeoData = (): void => {
      let metaTitle: string | undefined = "";
      let metaDesc: string | undefined = "";
      if (serviceId === 0) {
        metaTitle = user.profile_title;
        metaDesc = user.meta_description;
      } else {
        const filteredSeoData = Array.isArray(user?.service_specific_seo)
          ? user.service_specific_seo.filter((item) => item.service_id === serviceId)
          : [];
        if (filteredSeoData.length > 0) {
          metaTitle = filteredSeoData[0].meta_title;
          metaDesc = filteredSeoData[0].meta_description;
        }
      }
      form.setValue("meta_description", metaDesc ?? "");
      form.setValue("profile_title", metaTitle ?? "");
    };

    getTagline();
    getSeoData();

    return () => {
      form.reset();
    };
  }, [serviceId, user, currentTab]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/update?entityId=${user.entity_id}`,
      {
        section: "tagline-seo",
        serviceId,
        poolId,
        ...data,
      },
      { headers: { "Content-Type": "application/json", Accept: "application/json" } }
    );
    if (response.status === 200) {
      setDrawerVisibility("tagline_&_seo");
      router.refresh();
      toast.success("Tagline updated successfully!");
    }
  };

  return (
    <React.Fragment>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="w-full">
            <CustomLabel
              className="my-2"
              label="Tagline(s)"
              description="Use the tagline to tell visitors what sets you apart."
            />
            <div className="w-full p-4 rounded-custom bg-accent space-y-4">
              <RenderInput
                maxLength={40}
                helpText="Taglines appear next to your name in directory search results and on your profile. They play a key role in capturing client attention, so make them count. Highlight what sets you apart or your unique expertise to stand out. Example: 'Geology and environment specialist, PhD.' or '15 years in medical interpreting.'"
                label="Tagline:"
                name={"tagline"}
                form={form}
              ></RenderInput>
            </div>
          </div>

          <CustomLabel
            className="my-2"
            label="SEO: meta title & description"
            description="Personalize how your profile shows up on search engines."
          />
          <div className="w-full p-4 rounded-custom bg-accent space-y-4">
            <RenderInput
              helpText="This title will appear in search engine results (e.g., Google) and at the top of your browser tab. Aim for 50–60 characters and include relevant keywords to make your profile easier to find. Example: 'English to Portuguese translator specializing in veterinary topics.'"
              maxLength={60}
              name={"profile_title"}
              form={form}
              label={"Meta title:"}
            ></RenderInput>
            <RenderTextArea
              maxLength={160}
              helpText="This description appears in search engine results below the title. Use 140–160 characters to summarize your expertise and encourage clicks. Highlight key skills or services. Example: 'Professional English to Portuguese translator with expertise in veterinary and medical fields, delivering accurate and reliable translations.'"
              name={"meta_description"}
              form={form}
              label={"Meta description:"}
            ></RenderTextArea>
          </div>
          <div className="flex justify-end">
            <Button>
              <Save /> Save updates
            </Button>
          </div>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default ProfileUpdaterTagline;
