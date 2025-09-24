import { Check } from "lucide-react";

type BillingCycle = "mensual" | "anual";

interface PricingTableProps {
  billingCycle: BillingCycle;
}

const precios = {
  mensual: { basico: "20€", pro: "40€", premium: "80€" },
  anual: {
    basico: "200€ (16€/mes)",
    pro: "400€ (33€/mes)",
    premium: "850€ (71€/mes)",
  },
};

const setup = {
  basico: "399€",
  pro: "549€",
  premium: "1190€",
};

export default function PricingTable({ billingCycle }: PricingTableProps) {

  return (
    <div className="w-full overflow-x-auto max-w-6xl mx-auto px-2 sm:px-4">
      <table className="w-full text-center border-collapse rounded-xl overflow-hidden text-gray-800 dark:text-gray-200 text-[10px] sm:text-sm md:text-base">
        <colgroup>
          <col />
          <col />
          <col className="bg-gray-100 dark:bg-[#2A2A2A]" />
          <col />
        </colgroup>
        <thead>
          <tr className="bg-gray-200 dark:bg-[#2e2e2e]">
            <th className="p-2 sm:p-4 text-left border-r border-gray-300 dark:border-gray-700">
              Características
            </th>
            <th className="p-2 sm:p-4 pt-4 sm:pt-6 border-r border-gray-300 dark:border-gray-700">
              Básico
              <div className="text-[10px] sm:text-xs mt-1 text-gray-600 dark:text-gray-400">
                Setup {setup.basico}
              </div>
            </th>
            <th className="p-2 sm:p-4 pt-4 sm:pt-6 border-r relative border-2 border-gray-400 dark:border-gray-500">
              Pro
              <span className="absolute top-0 right-0 text-[6px] sm:text-[8px] font-bold px-2 py-0.5 rounded-bl-md bg-gray-800 text-white dark:bg-gray-300 dark:text-[#222222]">
                Más Popular
              </span>
              <div className="text-[10px] sm:text-xs mt-1 text-gray-600 dark:text-gray-400">
                Setup {setup.pro}
              </div>
            </th>
            <th className="p-2 sm:p-4 pt-4 sm:pt-6">
              Premium
              <div className="text-[10px] sm:text-xs mt-1 text-gray-600 dark:text-gray-400">
                Setup {setup.premium}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-300">
          {/* Precio */}
          <tr className="border-t border-gray-300 dark:border-gray-700">
            <td className="p-2 sm:p-4 text-left font-semibold border-r border-gray-300 dark:border-gray-700">
              Precio {billingCycle}
            </td>
            <td className="p-2 sm:p-4 border-r border-gray-300 dark:border-gray-700">
              {precios[billingCycle].basico}
            </td>
            <td className="p-2 sm:p-4 font-bold border-r bg-gray-100 border-gray-300 text-black dark:bg-[#2A2A2A] dark:border-gray-700 dark:text-white">
              {precios[billingCycle].pro}
            </td>
            <td className="p-2 sm:p-4">{precios[billingCycle].premium}</td>
          </tr>

          {/* Filas de features */}
          {[
            "Web sencilla (servicios, precios, contacto, ubicación)",
            "Diseño adaptado a móvil",
            "Formulario de contacto o WhatsApp",
            "Agenda online para reservas (sin confirmación automática)",
            "Panel sencillo para citas",
            "Recordatorios automáticos (WhatsApp/email)",
            "App instalable en móvil (PWA)",
            "Panel multiusuario",
          ].map((feature, i) => (
            <tr key={i} className="border-t border-gray-300 dark:border-gray-700">
              <td className="p-2 sm:p-4 text-left border-r border-gray-300 dark:border-gray-700">
                {feature}
              </td>
              {[
                i < 3,          // Básico: first 3 true, rest false
                i < 5,          // Pro: first 5 true, rest false
                true,           // Premium: all true
              ].map((included, j) => (
                <td
                  key={j}
                  className={`p-2 sm:p-4 border-r ${
                    j !== 2 ? "border-gray-300 dark:border-gray-700" : ""
                  }`}
                >
                  {included ? (
                    <Check className="mx-auto text-gray-700 dark:text-gray-300" size={18} />
                  ) : (
                    <span className="font-bold text-red-600 dark:text-red-500">✕</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-center text-sm mt-4 sm:mt-6 text-gray-600 dark:text-gray-400">
        <span className="font-semibold text-gray-900 dark:text-gray-200">
         PROMOCIÓN HOY -25% DE DESCUENTO EN TODOS LOS PLANES
        </span>
      </p>
    </div>
  );
}