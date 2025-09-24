import React from "react";

type BillingCycle = "mensual" | "anual";

interface BillingToggleProps {
  billingCycle: BillingCycle;
  setBillingCycle: (value: BillingCycle) => void;
}

export default function BillingToggle({
  billingCycle,
  setBillingCycle,
}: BillingToggleProps) {
  return (
    <div
      className="flex justify-center gap-4 mb-12"
      role="tablist"
      aria-label="Ciclo de facturación"
    >
      <button
        role="tab"
        aria-selected={billingCycle === "mensual"}
        onClick={() => setBillingCycle("mensual")}
        className={`px-4 py-2 rounded-full border transition ${
          billingCycle === "mensual"
            ? "bg-gray-800 text-white dark:bg-gray-100 dark:text-black border-transparent"
            : "bg-transparent text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-gray-500 hover:text-black dark:hover:text-white"
        }`}
      >
        Mensual
      </button>
      <button
        role="tab"
        aria-selected={billingCycle === "anual"}
        onClick={() => setBillingCycle("anual")}
        className={`px-4 py-2 rounded-full border transition ${
          billingCycle === "anual"
            ? "bg-gray-800 text-white dark:bg-gray-100 dark:text-black border-transparent"
            : "bg-transparent text-gray-700 dark:text-gray-400 border-gray-300 dark:border-gray-600 hover:border-gray-500 hover:text-black dark:hover:text-white"
        }`}
      >
        Anual
      </button>
    </div>
  );
}
