import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/shadcn/sheet";
import { X } from "lucide-react";
import { Separator } from "@/components/shadcn/separator";
import { Button } from "@/components/shadcn/button";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setContentSliceBits } from "@/lib/store/features/content/contentSlice";
import { Form } from "@/components/shadcn/form";
import { RenderInput } from "@/components/shadcn/formItems/renderInput";
import { RenderTextArea } from "@/components/shadcn/formItems/renderTextArea";
import { Input } from "@/components/shadcn/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  job_id: z.number(),
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(1, { message: "Phone is required." }),
  linkedIn: z.string().optional(),
  otherLink: z.string().optional(),
  whyProZ: z.string().min(1, { message: "This field is required." }),
  whyHire: z.string().min(1, { message: "This field is required." }),
  // background: z.string().min(1, { message: "Background is required." }),
  about: z.string().optional(),
  workingFrom: z.string().min(1, { message: "Please select a location." }),
  compensation: z.string().min(1, { message: "Compensation is required." }),
  cv: z.any(),
  cv_file_type: z.string().optional(),
});

const ApplicationsDrawer: React.FC<any> = ({ job_id }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job_id: job_id,
      name: "",
      email: "",
      phone: "",
      linkedIn: "",
      otherLink: "",
      whyProZ: "",
      whyHire: "",
      // background: '',
      about: "",
      workingFrom: "",
      compensation: "",
      cv: "",
      cv_file_type: "",
    },
  });

  const { showCareersDrawer } = useAppSelector((state) => state.content);
  const dispatch = useAppDispatch();

  const handleFileChange = (file: File): Promise<string | undefined> => {
    if (file) {
      const reader = new FileReader();
      return new Promise<string>((resolve, reject) => {
        reader.onload = () => {
          resolve(new TextDecoder().decode(reader.result as ArrayBuffer));
        };
        reader.onerror = () => {
          reject(new Error("Failed to read file"));
        };
        reader.readAsArrayBuffer(file);
      });
    }
    return Promise.resolve(undefined);
  };

  const restoreFileFromBinary = (binaryStr: string, fileName: string, mimeType: string): File => {
    const binaryArray = new Uint8Array(binaryStr.split("").map((char) => char.charCodeAt(0)));
    const arrayBuffer = binaryArray.buffer;
    const blob = new Blob([arrayBuffer], { type: mimeType });
    const file = new File([blob], fileName, { type: mimeType });
    return file;
  };

  const restoreAndDownloadFile = (binaryStr: string, fileName: string, mimeType: string): void => {
    const binaryArray = new Uint8Array(binaryStr.split("").map((char) => char.charCodeAt(0)));
    const arrayBuffer = binaryArray.buffer;
    const blob = new Blob([arrayBuffer], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    const fileList = data.cv as FileList;
    let cvToBinary = await handleFileChange(fileList[0]);
    const fileType = fileList[0].type;
    data.cv_file_type = fileType;
    if (cvToBinary) {
      data.cv = cvToBinary;
    } else {
      toast.error("Failed to process CV file.");
      return;
    }

    toggleDrawer();
    const response = await fetch("/next/api/career/applications", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      toast.success("Application submitted successfully");
    } else {
      toast.error("Failed to submit application");
    }
  };

  const toggleDrawer = () => {
    dispatch(setContentSliceBits({ bitToSet: "showCareersDrawer", value: !showCareersDrawer }));
  };

  return (
    <>
      <Sheet open={showCareersDrawer}>
        <SheetContent className="w-full max-w-[95vw] sm:max-w-[540px] min-w-[320px] md:min-w-[400px] lg:min-w-[450px] overflow-auto">
          <SheetHeader>
            <SheetTitle className="flex flex-row justify-between items-center">
              <span className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-primary">
                Contact information
              </span>
              <X
                className="cursor-pointer"
                size="20"
                onClick={() => {
                  toggleDrawer();
                }}
              />
            </SheetTitle>
          </SheetHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="dark:bg-background w-full px-3 py-10 bg-white flex-col justify-start items-start gap-[99px] inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-6 flex [&>*]:w-full">
                    <RenderInput
                      name="name"
                      form={form}
                      helpText="Please enter your full name."
                      label="Full name *"
                    />
                    <RenderInput
                      form={form}
                      name="email"
                      helpText="Please enter a valid email address."
                      label="Email *"
                    />
                    <RenderInput
                      form={form}
                      name="phone"
                      helpText="Please enter a valid phone number."
                      label="Phone number *"
                    />
                    <RenderInput
                      form={form}
                      name="linkedIn"
                      helpText="LinkedIn Profile"
                      label="LinkedIn profile"
                    />
                    <RenderInput
                      form={form}
                      name="otherLink"
                      helpText="Other network profile or website"
                      label="Other network profile or website"
                    />
                  </div>
                </div>
              </div>
              <h1>
                <span className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-primary">
                  ProZ.com and you
                </span>
              </h1>
              <div className="dark:bg-background px-3 py-10 bg-white flex-col justify-start items-start gap-[99px] inline-flex">
                <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-6 flex [&>*]:w-full">
                    <RenderTextArea
                      name="whyProZ"
                      form={form}
                      helpText="Why ProZ.com?"
                      label="Why do you want to work for ProZ.com? *"
                    />
                    <RenderTextArea
                      name="whyHire"
                      form={form}
                      helpText="Why should ProZ.com hire you?"
                      label="Why should ProZ.com want to hire you? *"
                    />
                    {/* <div className="self-stretch flex-col justify-start items-start gap-1.5 flex [&>*]:w-full">
                                            <RenderTextArea
                                                name="background"
                                                form={form}
                                                helpText="Please provide details about your background and previous experience that make you uniquely qualified to work at ProZ.com."
                                                label='Background and Experience *'
                                            />
                                        </div> */}
                    <RenderTextArea
                      name="about"
                      form={form}
                      helpText="Additional Information"
                      label="Who are you? Tell us something about yourself (hobbies, sports, interests, etc.)."
                    />
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-grey-700 text-sm font-medium font-['Poppins'] leading-tight">
                        I would be interested in working from...*
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="pt-0.5 justify-center items-center flex [&>*]:w-full">
                          <Input type="radio" value="remote" {...form.register("workingFrom")} />
                        </div>
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                          <div className="self-stretch text-grey-700 text-sm font-normal font-['Poppins']">
                            Remote
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="pt-0.5 justify-center items-center flex [&>*]:w-full">
                          <Input type="radio" value="Syracuse" {...form.register("workingFrom")} />
                        </div>
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                          <div className="self-stretch text-grey-700 text-sm font-normal font-['Poppins']">
                            Hybrid (I live in or near Syracuse, New York, USA)
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="pt-0.5 justify-center items-center flex [&>*]:w-full">
                          <Input type="radio" value="La Plata" {...form.register("workingFrom")} />
                        </div>
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                          <div className="self-stretch text-grey-700 text-sm font-normal font-['Poppins']">
                            Hybrid (I live in or near La Plata, Buenos Aires, Argentina)
                          </div>
                        </div>
                      </div>
                      <div className="justify-start items-center gap-2 inline-flex">
                        <div className="pt-0.5 justify-center items-center flex [&>*]:w-full">
                          <Input type="radio" value="Nairobi" {...form.register("workingFrom")} />
                        </div>
                        <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                          <div className="self-stretch text-grey-700 text-sm font-normal font-['Poppins']">
                            Hybrid (I live in or near Nairobi, Kenya)
                          </div>
                        </div>
                      </div>
                    </div>
                    <RenderInput
                      form={form}
                      name="compensation"
                      helpText="Please enter your desired compensation."
                      label="Desired compensation (per hour, in USD) *"
                    />
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-grey-700 text-sm font-medium font-['Poppins'] leading-tight">
                        Upload your CV *
                      </div>
                      <div className="self-stretch h-[126px] px-6 py-4 rounded-xl border border-[#eaecf0] flex-col justify-center items-center gap-1 flex [&>*]:w-full">
                        <Input
                          type="file"
                          {...form.register("cv")}
                          className="self-stretch h-[41px] px-3 py-2 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-[#eaeaea] justify-start items-center gap-2 inline-flex overflow-hidden cursor-pointer"
                        />
                        <div className="text-[#475466] text-sm font-normal font-['Poppins'] leading-tight">
                          or drag and drop
                        </div>
                        <div className="self-stretch text-center text-[#475466] text-xs font-normal font-['Poppins'] leading-[18px]">
                          PDF, DOCX (max. 2mb)
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mb-5" />
              <div className="flex justify-center items-center gap-4">
                <Button type="button" variant="outline" className="w-full" onClick={toggleDrawer}>
                  Cancel
                </Button>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ApplicationsDrawer;
