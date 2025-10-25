import React, { useState } from "react";

import { Button } from "../form/Button";

import { Drawer } from "./Drawer";

export default { title: "Overlay/Drawer" };

export const Right = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Settings">
        <div className="space-y-4">
          <p>Drawer content from the right side</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Drawer>
    </div>
  );
};

export const Left = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} side="left" title="Navigation">
        <div className="space-y-4">
          <p>Drawer content from the left side</p>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </div>
      </Drawer>
    </div>
  );
};
