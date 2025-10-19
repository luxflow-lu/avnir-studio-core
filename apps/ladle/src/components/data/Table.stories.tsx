import React, { useState } from "react";
import { Table } from "./Table";
import { Badge } from "./Badge";

export default { title: "Data/Table" };

const mockData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "active", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "inactive", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", status: "active", role: "Editor" },
];

const columns = [
  { key: "name", title: "Name", sortable: true },
  { key: "email", title: "Email", sortable: true },
  { 
    key: "status", 
    title: "Status", 
    render: (value: string) => (
      <Badge variant={value === "active" ? "success" : "warning"}>
        {value}
      </Badge>
    )
  },
  { key: "role", title: "Role", sortable: true },
];

export const Default = () => {
  const [sortBy, setSortBy] = useState<string>();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Table 
        columns={columns}
        data={mockData}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
    </div>
  );
};

export const Loading = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Table columns={columns} data={[]} loading />
  </div>
);

export const Empty = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Table columns={columns} data={[]} />
  </div>
);
