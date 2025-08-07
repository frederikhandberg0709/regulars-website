import React, { useState } from "react";

export default function FAQItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full space-y-2.5">
      <div
        className={`flex items-center select-none justify-between cursor-pointer w-full opacity-60 hover:opacity-100 transition-opacity duration-200 ease-in-out ${
          isOpen ? "opacity-100" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-bold text-lg">{title}</h2>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          className={`size-6 transition-transform duration-200 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
        </svg>
      </div>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="leading-relaxed">{children}</p>
        </div>
      </div>
    </div>
  );
}
