"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ClipboardCopy, Heart } from "lucide-react";

const bankDetails = [
  { label: "Account Number", value: "20200055762126" },
  { label: "IFSC Code", value: "BDBL0001674" },
  { label: "Account Name", value: "Changespark Foundation" },
  { label: "Bank", value: "Bandhan Bank" },
];

export default function Donate() {
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyButton = ({ text, field }) => (
    <div className="relative inline-block">
      <button
        onClick={() => handleCopy(text, field)}
        className="ml-2 p-2 text-green-700 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
      >
        <ClipboardCopy size={18} />
      </button>
      {copiedField === field && (
        <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 text-xs bg-green-100 text-green-800 px-2 py-1 rounded whitespace-nowrap">
          Copied!
        </span>
      )}
    </div>
  );

  return (
    <main className="flex items-center justify-center min-h-screen bg-background-100 p-4 pt-24">
      <div className="w-full max-w-md bg-background-200 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-5xl uppercase font-bold font-heading text-purple-900 text-center mb-2">
            Donate
          </h1>
          <p className="text-secondary-700 text-center mb-6">
            Support our cause with a bank transfer
          </p>

          <div className="mb-6 relative h-48">
            <Image
              src="/donate.jpg"
              alt="Donate"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <h2 className="text-xl font-semibold text-green-700 mb-4 flex items-center justify-center">
            <Heart className="mr-2" size={24} />
            Bank Transfer Details
          </h2>

          <div className="space-y-4">
            {bankDetails.map((detail, index) => (
              <div key={index} className="flex flex-col">
                <label className="text-sm font-medium text-secondary-700 mb-1">
                  {detail.label}
                </label>
                <div className="flex items-center bg-background-100 rounded-md p-2">
                  <span className="flex-grow text-secondary-800">
                    {detail.value}
                  </span>
                  {(detail.label === "Account Number" ||
                    detail.label === "IFSC Code") && (
                    <CopyButton text={detail.value} field={detail.label} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-secondary-700 text-sm">
              Thank you for your support! Your contribution makes a difference.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
