"use client";

import Script from "next/script";

const HubspotTracking = () => {
  return (
    <Script
      id="hs-script-loader"
      strategy="afterInteractive"
      src="//js.hs-scripts.com/4041721.js"
      async
      defer
    />
  );
};

export default HubspotTracking;
