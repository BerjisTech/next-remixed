"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import { Separator } from "@/components/shadcn/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/shadcn/sheet";

interface BusinessFormData {
  business_name: string;
  logo_url: string;
  slogan: string;
  city: string;
  contact_phone: string;
  self_link: string;
}

interface EditBusinessDrawerProps {
  business: BusinessFormData;
  businessId: string;
}

export default function EditBusinessDrawer({ business, businessId }: EditBusinessDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BusinessFormData>({
    defaultValues: business,
  });

  const onSubmit = async (data: BusinessFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/businesses/${businessId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update business");
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error updating business:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.5 5H4.16667H17.5"
              stroke="#4D9D9D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.8334 5V16.6667C15.8334 17.1087 15.6578 17.5326 15.3452 17.8452C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83335C5.39133 18.3333 4.9674 18.1577 4.65484 17.8452C4.34228 17.5326 4.16669 17.1087 4.16669 16.6667V5M6.66669 5V3.33333C6.66669 2.89131 6.84228 2.46738 7.15484 2.15482C7.4674 1.84226 7.89133 1.66667 8.33335 1.66667H11.6667C12.1087 1.66667 12.5326 1.84226 12.8452 2.15482C13.1578 2.46738 13.3334 2.89131 13.3334 3.33333V5"
              stroke="#4D9D9D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Edit Business
        </Button>
      </SheetTrigger>
      <SheetContent className="min-w-[700px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex flex-row justify-between items-center">
            <span className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-primary">
              Edit Business Details
            </span>
            <X className="cursor-pointer" size="20" onClick={() => setIsOpen(false)} />
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <Separator className="mb-5" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Business Name</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("business_name", { required: true })}
            />
            {errors.business_name && <span className="text-red-500">Required</span>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Logo URL</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("logo_url")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Slogan</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("slogan")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">City</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("city", { required: true })}
            />
            {errors.city && <span className="text-red-500">Required</span>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Contact Phone</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("contact_phone")}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Website</label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              {...register("self_link")}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Updating..." : "Update Business"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
