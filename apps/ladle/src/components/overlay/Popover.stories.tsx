import React from "react";
import { Popover } from "./Popover";
import { Button } from "../form/Button";

export default { title: "Overlay/Popover" };

const PopoverContent = () => (
  <div className="w-64 text-white">
    <h4 className="font-semibold mb-2">Popover Title</h4>
    <p className="text-[var(--text-muted)] text-sm mb-3">
      This is the popover content. It can contain any React elements.
    </p>
    <div className="flex gap-2">
      <Button size="sm">Action</Button>
      <Button size="sm" variant="outline">Cancel</Button>
    </div>
  </div>
);

export const Sides = () => (
  <div className="bg-[var(--bg)] text-white p-12 flex justify-center items-center gap-8">
    <Popover content={<PopoverContent />} side="top">
      <Button>Top</Button>
    </Popover>
    
    <Popover content={<PopoverContent />} side="bottom">
      <Button>Bottom</Button>
    </Popover>
    
    <Popover content={<PopoverContent />} side="left">
      <Button>Left</Button>
    </Popover>
    
    <Popover content={<PopoverContent />} side="right">
      <Button>Right</Button>
    </Popover>
  </div>
);

export const Alignments = () => (
  <div className="bg-[var(--bg)] text-white p-12 flex justify-center items-center gap-8">
    <Popover content={<PopoverContent />} align="start">
      <Button>Start</Button>
    </Popover>
    
    <Popover content={<PopoverContent />} align="center">
      <Button>Center</Button>
    </Popover>
    
    <Popover content={<PopoverContent />} align="end">
      <Button>End</Button>
    </Popover>
  </div>
);

export const SimpleContent = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <Popover content={
      <div className="text-white">
        <p className="text-sm">Simple popover content</p>
      </div>
    }>
      <Button>Click me</Button>
    </Popover>
  </div>
);
