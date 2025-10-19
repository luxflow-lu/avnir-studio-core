import React from "react";
import { Tooltip } from "./Tooltip";
import { Button } from "../form/Button";

export default { title: "Overlay/Tooltip" };

export const Sides = () => (
  <div className="bg-[var(--bg)] text-white p-12 flex justify-center items-center gap-8">
    <Tooltip content="Tooltip on top" side="top">
      <Button>Top</Button>
    </Tooltip>
    <Tooltip content="Tooltip on bottom" side="bottom">
      <Button>Bottom</Button>
    </Tooltip>
    <Tooltip content="Tooltip on left" side="left">
      <Button>Left</Button>
    </Tooltip>
    <Tooltip content="Tooltip on right" side="right">
      <Button>Right</Button>
    </Tooltip>
  </div>
);

export const OnIcon = () => (
  <div className="bg-[var(--bg)] text-white p-6">
    <div className="flex items-center gap-2">
      <span>Hover the icon:</span>
      <Tooltip content="This is a help tooltip">
        <button className="text-[var(--text-muted)] hover:text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </Tooltip>
    </div>
  </div>
);
