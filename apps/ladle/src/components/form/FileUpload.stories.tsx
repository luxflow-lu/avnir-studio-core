import React from "react";
import { FileUpload } from "./FileUpload";

export default { title: "Form/FileUpload" };

export const Single = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <FileUpload onFiles={(files) => console.log("Files:", files)} accept="image/*" />
  </div>
);

export const Multiple = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <FileUpload
      maxFiles={5}
      onFiles={(files) => console.log("Files:", files)}
      accept=".pdf,.doc,.docx"
    />
  </div>
);

export const Disabled = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <FileUpload disabled />
  </div>
);
