import React, { useState } from "react";
import { CommandK } from "./CommandK";
import { Button } from "../form/Button";

export default { title: "Nav/CommandK" };

const mockItems = [
  {
    id: "new-project",
    label: "New Project",
    description: "Create a new project",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>,
    onSelect: () => console.log("New project")
  },
  {
    id: "settings",
    label: "Settings",
    description: "Open application settings",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    onSelect: () => console.log("Settings")
  },
  {
    id: "help",
    label: "Help & Support",
    description: "Get help and support",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    onSelect: () => console.log("Help")
  },
  {
    id: "logout",
    label: "Logout",
    description: "Sign out of your account",
    icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>,
    onSelect: () => console.log("Logout")
  }
];

export const Default = () => {
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-[var(--bg)] text-white p-6">
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>
          Open Command Palette
        </Button>
        <p className="text-sm text-[var(--text-muted)]">
          Or press <kbd className="px-2 py-1 bg-white/10 rounded text-xs">⌘K</kbd> (Mac) or <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Ctrl+K</kbd> (Windows/Linux)
        </p>
      </div>
      
      <CommandK
        open={open}
        onClose={() => setOpen(false)}
        items={mockItems}
      />
    </div>
  );
};
