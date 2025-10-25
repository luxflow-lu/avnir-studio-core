import React from "react";

import { NotFound404 } from "./NotFound404";

export default { title: "System/NotFound404" };

export const Default = () => <NotFound404 onHomeClick={() => console.log("Go home clicked")} />;

export const CustomContent = () => (
  <NotFound404
    title="Oops! Nothing here"
    description="The page you're looking for might have been moved, deleted, or doesn't exist."
    onHomeClick={() => console.log("Go home clicked")}
  />
);

export const NoButton = () => (
  <NotFound404
    showHomeButton={false}
    title="Access Denied"
    description="You don't have permission to access this resource."
  />
);

export const CustomIllustration = () => {
  const customIllustration = (
    <div className="w-64 h-64 mx-auto mb-8 text-[var(--brand)]">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );

  return (
    <NotFound404
      illustration={customIllustration}
      title="Something went wrong"
      description="We're having trouble loading this page. Please try again later."
      onHomeClick={() => console.log("Go home clicked")}
    />
  );
};
