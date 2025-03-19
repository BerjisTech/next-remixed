import React, { useState } from "react";
import { BusinessProfile } from "@/interfaces/business";

interface EditableFields {
  common_name: string;
  contact_phone: string;
  website_url: string;
  description: string;
  city: string;
  slogan: string;
}

interface BusinessEditFormProps {
  business: BusinessProfile;
  onUpdate: (updatedData: Partial<EditableFields>) => void;
}

const BusinessEditForm: React.FC<BusinessEditFormProps> = ({ business, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<EditableFields>({
    common_name: business?.business_data?.common_name || "",
    contact_phone: business?.business_data?.contact_phone || "",
    website_url: business?.business_data?.website_url || "",
    description: business?.business_data?.description || "",
    city: business?.business_data?.city || "",
    slogan: business?.business_data?.slogan || "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="w-full space-y-4">
        <button
          onClick={() => setIsEditing(true)}
          className="px-4 py-2 text-white bg-primary rounded hover:bg-primary/80"
        >
          Edit Business Information
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Business Name
          <input
            type="text"
            name="common_name"
            value={formData.common_name}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Phone
          <input
            type="tel"
            name="contact_phone"
            value={formData.contact_phone}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Website
          <input
            type="url"
            name="website_url"
            value={formData.website_url}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          City
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Slogan
          <input
            type="text"
            name="slogan"
            value={formData.slogan}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </label>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Description
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          />
        </label>
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-primary rounded hover:bg-primary/80"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default BusinessEditForm;
