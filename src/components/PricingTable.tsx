import { Check } from "lucide-react";
import { motion } from "framer-motion";

type BillingCycle = "mensual" | "anual";

interface PricingTableProps {
  billingCycle: BillingCycle;
}

const precios = {
  mensual: { basico: "24,99€", pro: "49,99€", premium: "89,99€" },
  anual: {
    basico: "249€ (20,75€/mes)",
    pro: "499€ (41,58€/mes)",
    premium: "949€ (79,08€/mes)",
  },
};

const setup = {
  basico: "199€",
  pro: "399€",
  premium: "1190€",
};

export default function PricingTable({ billingCycle }: PricingTableProps) {

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      <div className="overflow-hidden">
        <table className="w-full text-center border-collapse rounded-xl text-gray-800 dark:text-gray-200 text-[10px] sm:text-sm md:text-base">
        <colgroup>
          <col />
          <col />
          <col className="bg-gray-100 dark:bg-[#2A2A2A]" />
          <col />
        </colgroup>
        <thead>
          <motion.tr
            className="bg-gray-200 dark:bg-[#2e2e2e]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
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
          </motion.tr>
        </thead>
        <tbody className="text-gray-700 dark:text-gray-300">
          {/* Precio */}
          <motion.tr
            className="border-t border-gray-300 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
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
          </motion.tr>

          {/* Filas de features */}
          {[
            "Web sencilla (servicios, precios, contacto, ubicación)",
            "Diseño adaptado a móvil",
            "Formulario de contacto o WhatsApp",
            "Agenda online para reservas (sin confirmación automática)",
            "Panel sencillo para citas",
            "Optimización SEO básica",
            "Recordatorios automáticos (WhatsApp/email)",
            "App instalable en móvil (PWA)",
            "Panel multiusuario",
          ].map((feature, i) => (
            <motion.tr
              key={i}
              className="border-t border-gray-300 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <td className="p-2 sm:p-4 text-left border-r border-gray-300 dark:border-gray-700">
                {feature}
              </td>
              {[
                i === 5 ? false : i < 3,          // Básico: first 3 true except SEO (index 5) false
                i === 5 ? true : i < 5,           // Pro: first 5 true plus SEO (index 5) true
                true,                            // Premium: all true
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
            </motion.tr>
          ))}
        </tbody>
        </table>
      </div>

      <div className="flex flex-col items-center justify-center mt-8 sm:mt-10">
        <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
          <span className="font-bold text-gray-900 dark:text-gray-200">
            PROMOCIÓN: Solo para los 10 próximos clientes que contraten el plan anual
          </span>
          <br />
          Paga solo 10 meses y disfruta de <span className="font-bold">2 meses gratis</span>.
          <br />
          <span className="text-gray-600 dark:text-gray-400 font-semibold">
            ¡Solo quedan 3 plazas disponibles!
          </span>
        </span>
      </div>
    </div>
  );
}