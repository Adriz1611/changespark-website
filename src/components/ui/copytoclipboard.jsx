"use client";
import { useState } from "react";
import { ClipboardCopy, Check } from "lucide-react";
import { motion } from "framer-motion";

export const CopytoClip = ({ detail }) => {
  const [copy, setCopy] = useState(false);
  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <div className="bg-background-300 px-2 py-2 flex flex-row gap-5 justify-between rounded-lg w-full">
      <span className="text-lg">{detail.value}</span>
      {copy ? (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Check className=" text-purple1-dark" size={24} />
        </motion.div>
      ) : (
        <ClipboardCopy
          size={24}
          className="cursor-pointer text-purple1-dark"
          onClick={() => handleCopy(detail.value)}
        />
      )}
    </div>
  );
};
