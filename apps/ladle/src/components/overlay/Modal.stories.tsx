import React, { useState } from "react";

import { Button } from "../form/Button";

import { Modal } from "./Modal";

export default { title: "Overlay/Modal" };

export const Default = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Modal Title">
        <p className="text-[var(--text-muted)] mb-4">
          This is a modal dialog. Press ESC or click outside to close.
        </p>
        <div className="flex gap-2 justify-end">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </div>
  );
};

export const WithoutTitle = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Button onClick={() => setOpen(true)}>Open Modal (No Title)</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <p className="text-[var(--text-muted)]">Modal without title</p>
      </Modal>
    </div>
  );
};
