import React, { useState } from "react";
import { Pagination } from "./Pagination";

export default { title: "Nav/Pagination" };

export const Default = () => {
  const [currentPage, setCurrentPage] = useState(5);
  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Pagination
        currentPage={currentPage}
        totalPages={20}
        onPageChange={setCurrentPage}
      />
      <p className="mt-4 text-sm text-[var(--text-muted)]">Current page: {currentPage}</p>
    </div>
  );
};

export const Simple = () => {
  const [currentPage, setCurrentPage] = useState(2);
  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
        showFirstLast={false}
      />
    </div>
  );
};

export const Minimal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
        showFirstLast={false}
        showPrevNext={false}
      />
    </div>
  );
};
