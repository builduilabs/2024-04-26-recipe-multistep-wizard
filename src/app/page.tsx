"use client";

import { motion } from "framer-motion";
import { ComponentProps, useState } from "react";

export default function Demo() {
  let [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-md rounded-lg bg-gray-700 shadow-lg shadow-black/25">
      <div className="flex justify-between rounded p-8">
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
        <Step step={4} currentStep={step} />
      </div>
      {/* Dynamic content based on `step` */}
      <div className="overflow-hidden">
        <motion.div
          transition={{ type: "spring", bounce: 0 }}
          animate={{ x: `${(step - 1) * -100}%` }}
          className="flex"
        >
          <div className="w-full shrink-0 space-y-2 px-8">
            <div className="h-4 w-5/6 rounded bg-gray-600" />
            <div className="h-4 rounded bg-gray-600" />
            <div className="h-4 w-4/6 rounded bg-gray-600" />
          </div>
          <div className="w-full shrink-0 space-y-2 px-8">
            <div className="h-4 w-4/6 rounded bg-gray-600" />
            <div className="h-4 rounded bg-gray-600" />
            <div className="h-4 w-5/6 rounded bg-gray-600" />
          </div>
          <div className="w-full shrink-0 space-y-2 px-8">
            <div className="h-4 rounded bg-gray-600" />
            <div className="h-4 w-5/6 rounded bg-gray-600" />
            <div className="h-4 w-4/6 rounded bg-gray-600" />
          </div>
          <div className="w-full shrink-0 space-y-2 px-8">
            <div className="h-4 w-4/6 rounded bg-gray-600" />
            <div className="h-4 w-5/6 rounded bg-gray-600" />
            <div className="h-4 rounded bg-gray-600" />
          </div>
          <div className="w-full shrink-0 space-y-2 px-8">
            <div className="h-4 w-4/6 rounded bg-gray-600" />
          </div>
        </motion.div>
      </div>
      <div className="px-8 pb-8">
        <div className="mt-10 flex justify-between">
          <button
            onClick={() => setStep(step < 2 ? step : step - 1)}
            className={`${
              step === 1 ? "pointer-events-none opacity-50" : ""
            } duration-350 rounded px-2 py-1 text-gray-400 transition hover:text-gray-200`}
          >
            Back
          </button>
          <button
            onClick={() => setStep(step > 4 ? step : step + 1)}
            className={`${
              step > 4 ? "pointer-events-none opacity-50" : ""
            } bg duration-350 flex items-center justify-center rounded-full bg-[#6479f2] px-3.5 py-1.5 font-medium tracking-tight text-white transition hover:bg-[#8293f8] active:bg-[#6479f2]`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function Step({ step, currentStep }: { step: number; currentStep: number }) {
  let status =
    currentStep === step
      ? "active"
      : currentStep < step
        ? "inactive"
        : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              duration: 0.2,
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "tween",
          ease: "circOut",
        }}
        className="absolute inset-0 rounded-full bg-[#8293f8]/25"
      ></motion.div>

      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "#334155",
            borderColor: "#475569",
            color: "#94a3b8", // neutral-400
          },
          active: {
            backgroundColor: "#334155",
            borderColor: "#6479f2", // blue-500
            color: "#6479f2", // blue-500
          },
          complete: {
            backgroundColor: "#8293f8", // blue-500
            borderColor: "#8293f8", // blue-500
            color: "#8293f8", // blue-500
          },
        }}
        transition={{ duration: 0.2 }}
        className="[--from:] relative flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold"
      >
        <div className="flex items-center justify-center">
          {status === "complete" ? (
            <CheckIcon className="h-6 w-6 text-white" />
          ) : (
            <span>{step}</span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CheckIcon(props: ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 0.1,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
