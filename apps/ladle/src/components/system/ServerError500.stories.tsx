import React from "react";
import { ServerError500 } from "./ServerError500";

export default { title: "System/ServerError500" };

export const Default = () => (
  <ServerError500
    onRetry={() => console.log("Retry clicked")}
    onReport={() => console.log("Report clicked")}
  />
);

export const CustomContent = () => (
  <ServerError500
    title="Database Connection Failed"
    description="We're experiencing technical difficulties with our database. Our team has been notified and is working on a fix."
    onRetry={() => console.log("Retry clicked")}
    onReport={() => console.log("Report clicked")}
  />
);

export const MinimalActions = () => (
  <ServerError500
    showReportButton={false}
    title="Service Unavailable"
    description="The service is temporarily unavailable. Please try again in a few minutes."
    onRetry={() => console.log("Retry clicked")}
  />
);

export const NoActions = () => (
  <ServerError500
    showRetryButton={false}
    showReportButton={false}
    title="Maintenance Mode"
    description="We're currently performing scheduled maintenance. We'll be back shortly."
  />
);
