"use client";
import { useEffect } from "react";

const HubSpotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "4041721",
          formId: "8919bedc-15d2-4eba-a8bb-26e86914b630",
          target: "#hubspot-form",
        });
      }
    };
  }, []);

  return <div id="hubspot-form"></div>;
};

export default HubSpotForm;
