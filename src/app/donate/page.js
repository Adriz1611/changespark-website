"use client";

import React, { useState } from "react";
import { ClipboardCopy } from "lucide-react";

export default function Donate() {
  const [accountNumberCopied, setAccountNumberCopied] = useState(false);
  const [ifscCodeCopied, setIfscCodeCopied] = useState(false);

  const handleCopy = (text, setter) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 1000);
  };

  const CopyButton = ({ text, copied, onClick }) => (
    <button
      onClick={onClick}
      className="ml-2 p-1 text-green-700 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
    >
      <ClipboardCopy size={18} />
      {copied && (
        <span className="absolute ml-2 text-sm text-green-600">Copied!</span>
      )}
    </button>
  );

  return (
    <div className="flex flex-col items-center py-20 md:py-0 justify-center min-h-screen w-full bg-background-100">
      <h1 className="text-5xl uppercase font-bold font-heading text-purple-900 mb-12">
        Donate
      </h1>
      <div className="max-w-md w-full space-y-8 bg-background-200 p-8 rounded-md shadow-md">
        <div className="text-center">
          <p className="font-paragraph text-secondary-700 mb-8">
            Support our cause with a bank transfer
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-bold uppercase text-green-700 mb-4">
            Bank Transfer
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700">
                Account Number
              </label>
              <div className="mt-1 flex rounded-md ">
                <span className="inline-flex items-center px-3 rounded-md  bg-background-100 text-secondary-700 text-sm">
                  20200055762126
                </span>
                <CopyButton
                  text="20200055762126"
                  copied={accountNumberCopied}
                  onClick={() =>
                    handleCopy("20200055762126", setAccountNumberCopied)
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                IFSC Code
              </label>
              <div className="mt-1 flex rounded-md ">
                <span className="inline-flex items-center px-3 rounded-md bg-background-100 text-secondary-700 text-sm">
                  BDBL0001674
                </span>
                <CopyButton
                  text="BDBL0001674"
                  copied={ifscCodeCopied}
                  onClick={() => handleCopy("BDBL0001674", setIfscCodeCopied)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Account Name
              </label>
              <p className="mt-1 text-secondary-700 font-paragraph">
                Changespark Foundation
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-1">
                Bank
              </label>
              <p className="mt-1 text-secondary-700 font-paragraph">
                Bandhan Bank
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-secondary-700 text-sm font-paragraph">
            Thank you for your support!
          </p>
        </div>
      </div>
    </div>
  );
}
