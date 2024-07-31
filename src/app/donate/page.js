"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCopyToClipboard } from "usehooks-ts";
import { ClipboardCopy, Check } from "lucide-react";

const bank = [
  {
    label: "Bank Name",
    value: "1234567890",
  },
  {
    label: "Account Number",
    value: "1234567890",
  },
  {
    label: "IFSC Code",
    value: "1234567890",
  },
];

export default function Donate() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = React.useState(false);

  return (
    <main className="flex flex-col items-center py-20 md:py-0 justify-center min-h-screen w-full bg-background-100">
      <Image
        src="/donate.jpg"
        alt="Donate"
        width={2000}
        height={2000}
        className="object-cover 
          absolute top-0 left-0 z-0 w-full h-full
          opacity-30
         "
      />

      <section className="bg-background-300 flex flex-col rounded-lg z-10 py-10 px-10 font-paragraph w-[80%]">
        <h1 className="font-heading text-5xl mb-10">Bank Details</h1>
        {bank.map((item, index) => (
          <div key={index}>
            <h2 className="font-heading">{item.label}</h2>
            <div className=" py-1  flex flex-row  items-center gap-3  w-full">
              <p className="bg-background-500 py-2 px-10 rounded-md">
                {item.value}
              </p>
              <div
                onMouseLeave={() => setCopied(false)}
                onClick={() => {
                  copy(item.value);
                  setCopied(true);
                }}
              >
                <div className="p-2 rounded-lg bg-background-600">
                  {copied ? (
                    <Check className="text-white" />
                  ) : (
                    <ClipboardCopy className="text-white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
