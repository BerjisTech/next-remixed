import { useState } from "react";
import { LANGUAGE_SERVICES_WITH_IDS } from "@/constants/common";

export const useFormatedLoopJobs = () => {
  const [formatedloopJobs, setFormatedLoopJobs] = useState<any>([]);

  const getformatedLoopJobs = (jobs: any) => {
    let formatedJobs = jobs.map((job: any) => ({
      // Transform each object from the first array to follow the format of the second
      id: job.id,
      applicants: job.applicants,
      web_url: "", // You can define a base URL or leave it empty
      type: job.type == "paid" ? "Managed services" : job.type,
      is_probono: job.type == "probono",
      summary: job.title,
      description: job.description,
      status: job.status,
      time_posted: job.date,
      time_expires: "", // Add value if you have it or leave it empty
      delivery_deadline: job.deadline || job.project_deadline,
      language_pairs: [job.language_pair.replace("-", "_")], // Adjust the format of the language pair
      volume_amount: job.total_units,
      volume_unit: job.unit,
      disc_spec_id: "", // If you have a specialization ID, add it here
      disc_other: "", // Additional information about the field of specialization
      language_service_ids: [getServiceIdByName(job.service) || 0], // Fill in if you have language service IDs
      contact_method: job.type == "probono" ? "email" : "url", // Contact method if available
      contact_info: {
        contact_hidden: false,
        hidden_reason: "",
        user_id: 0,
        user_uuid: "",
        type: "company",
        email: job.type == "probono" ? "probono@proz.com" : "", // You can add email if available
        show_email: job.type == "probono",
        full_name: `${job.poster_first_name} ${job.poster_last_name}`,
        show_full_name: true,
        job_title: "",
        business_id: job.business_id,
        business_img:
          job.type == "probono"
            ? "/next/next_assets/images/probono/ppb-logo.png"
            : "https://sslcdn.proz.com/zf/images/proz-round-logo.png",
        company: job.type == "probono" ? "ProZ.com Pro bono" : "ProZ.com managed services",
        url: job.type != "probono" ? "https://proz.com/services/page/jobs/" + job.id : "",
        show_url: job.type != "probono",
        address: "",
        show_address: false,
        city: job.company_city || "",
        show_city: Boolean(job.company_city),
        region: "",
        show_region: false,
        postal_code: "",
        show_postal_code: false,
        country: job.company_country,
        show_country: Boolean(job.company_country),
        phone: "",
        show_phone: false,
        fax: "",
        show_fax: false,
      },
      software_ids: [], // Fill in if you have related software
      offered_rate: {
        amount: job.unit_price,
        currency: "usd", // You can change the currency if you have this information
        unit: job.unit,
      },
      payment_notes: job.payment,
      blueboard_name: null,
      blueboard_avg_lwa: null,
      blueboard_entries: null,
      blueboard_link: null,
      provider_requirements: {
        proz_members_only: false,
        members_only_until: "",
        language_pairs: [job.language_pair.replace("-", "_")],
        language_pair_importance: "required",
        disc_gen_ids: [],
        disc_gen_importance: null,
        disc_spec_ids: [],
        disc_spec_importance: null,
        credentials: null,
        native_language: "",
        native_language_importance: "preferred",
        software: [],
        software_importance: null,
        country: null,
        country_importance: null,
        account_type: null,
        account_type_importance: null,
        additional_requirements: null,
      },
      pwd: "",
      confidentiality: null,
      text_excerpt: job.content_text,
      text_excerpt_require_translation: false,
      _links: {
        self: {
          href: "", // Reference URL if available
        },
      },
    }));
    setFormatedLoopJobs(formatedJobs);
  };

  const getServiceIdByName = (name: string) => {
    const service = LANGUAGE_SERVICES_WITH_IDS.find((service: any) =>
      service.service_name.toLowerCase().includes(name.toLowerCase())
    );
    return service ? service.service_id : null;
  };

  return { formatedloopJobs, getformatedLoopJobs };
};
