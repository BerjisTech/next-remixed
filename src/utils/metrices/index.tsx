// import GoogleAnalytics from "./GoogleAnalytics"
import MicrosoftClarity from "./MicrosoftClarity";
// import HubspotTracking from "./HubspotTracking"
import HubspotTracking from "./HubspotTracking";

const Metrics = () => (
  <>
    {/* <GoogleAnalytics /> */}
    <MicrosoftClarity />

    {/* Hubspot Tracking */}
    <HubspotTracking />
  </>
);

export default Metrics;
