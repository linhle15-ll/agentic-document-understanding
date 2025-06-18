'use client'
import React from "react";
import { SideNavBar } from "@/components/commons/navbar";
import { Menu } from "lucide-react";

import { ReactNode } from "react";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Hamburger button for small screens */}
      {!open && (
        <button
          aria-label="Open sidebar"
          className="fixed top-4 right-4 z-50 block lg:hidden p-2 rounded-full bg-white shadow"
          type="button"
          onClick={() => setOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* SideNavBar handles its own responsive logic */}
      <SideNavBar open={open} setOpen={setOpen} />

      {/* Main content, shifted right on large screens */}
      <div className="bg-lightWhite w-full min-h-screen lg:ml-64">
        {children}
      </div>
    </>
  );
}