'use client'
import React from "react";

// Styled Tooltip component
export default function Tooltip({
  content,
  children,
}: {
  content: React.ReactNode;
  children: React.ReactNode;
}) {
  const [show, setShow] = React.useState(false);

  return (
    <span
      className="relative inline-block align-middle"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute left-1/2 z-50 -translate-x-1/2 mt-2 w-72 bg-gray-900 text-white text-xs rounded p-3 shadow-lg">
          {content}
        </div>
      )}
    </span>
  );
}