import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scissors,
  Smartphone,
  Calendar,
  BarChart,
  Quote,
  ChevronDown,
} from "lucide-react";
import BillingToggle from "../components/BillingToggle";
import PricingTable from "../components/PricingTable";
import ThemeToggle from "../components/themeToggle";
import headerImage from "../assets/peluqueria-header.png";
import beneficiosImage from "../assets/foto-beneficios.png";
import ejemploEscritorio from "../assets/ejemplo-escritorio.png";
import ejemploMovil from "../assets/ejemplo-movil.png";
import ejemploAmbas from "../assets/ejemplo-ambas.png";

type BillingCycle = "mensual" | "anual";

export default function PeluqueriaLanding() {
  const faqs = [
    {
      question: "¿Cuánto tardan en tener mi web lista?",
      answer:
        "En menos de 7 días tu web y app estarán funcionando con todas las automatizaciones.",
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer: "No, nos encargamos de todo. Tú solo te enfocas en tus clientes.",
    },
    {
      question: "¿Qué pasa si necesito soporte?",
      answer:
        "Incluimos soporte inicial y documentación básica para que nunca te sientas perdido.",
    },
    {
      question: "¿Puedo cambiar de plan más adelante?",
      answer:
        "Sí, puedes empezar con el plan Básico y subir a Pro o Premium cuando quieras, sin complicaciones.",
    },
    {
      question: "¿Qué pasa si quiero añadir más funciones después?",
      answer: "Puedes solicitar mejoras o nuevas funciones en cualquier momento. Te ofrecemos opciones de ampliación según tus necesidades.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, puedes cancelar cuando quieras y sin costes adicionales. Solo tienes que avisarnos y la anulación se realiza el mismo día, sin necesidad de antelación. Ten en cuenta que no se realizan devoluciones de pagos ya efectuados.",
    },
    {
      question: "¿La web es mía si dejo de pagar?",
      answer:
        "El servicio funciona bajo un modelo de suscripción. Mientras esté activo, tendrás acceso completo a tu web y app. Si cancelas la suscripción, se pierde el acceso.",
    },
    {
      question: "¿Mi web estará optimizada para Google (SEO)?",
      answer:
        "La optimización para Google (SEO) está incluida en los planes Pro y Premium. El plan Básico no incluye optimización SEO.",
    },
    {
      question: "¿El dominio está incluido en el precio?",
      answer:
        "El dominio (ejemplo: www.tunegocio.com) no está incluido en los planes porque su precio depende del nombre que quieras. Si ya tienes dominio, lo conectamos sin problema. Si no, te ayudamos a comprarlo a tu nombre para que siempre sea tuyo.",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("mensual");

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="font-poppins bg-white text-black dark:bg-[#161616] dark:text-white">
      {/* Botón Dark/Light */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* Logo GlowUp Studio */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 text-center">
        <h1 className="font-bodoni text-[#1A1A1A] dark:text-[#F5F5F5]">
          <span className="block text-xl md:text-2xl mb-[-4px]">GlowUp</span>
          <span className="block text-4xl md:text-5xl mt-0">Studio</span>
        </h1>
      </div>

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-[50vh] flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <img
          src={headerImage}
          alt="Peluquería Header"
          className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-10"
        />
        <div
          className={`absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_70%,rgba(255,255,255,0.9)_100%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_70%,rgba(0,0,0,0.7)_100%)]`}
        />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold z-10"
        >
          Haz que tu peluquería funcione sola
        </motion.h1>
        <p className="mt-4 text-base md:text-lg z-10 text-gray-600 dark:text-[#B0B0B5]">
          Web + App + Automatizaciones en solo 7 días
        </p>
      </motion.section>


      {/* Beneficios */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 w-full bg-gray-100 dark:bg-[#1E1E1E]"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
          >
            <Calendar className="mx-auto mb-4 text-gray-400" size={40} />
            <h3 className="font-semibold">Reserva online 24/7</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-[#B0B0B5]">
              Tus clientes reservan solos, incluso fuera de horario.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
          >
            <Smartphone className="mx-auto mb-4 text-gray-400" size={40} />
            <h3 className="font-semibold">App con tu logo</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-[#B0B0B5]">
              Una aplicación móvil profesional que refuerza tu marca.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 2 * 0.2 }}
          >
            <Scissors className="mx-auto mb-4 text-gray-400" size={40} />
            <h3 className="font-semibold">Recordatorios automáticos</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-[#B0B0B5]">
              Reduce un 80% las ausencias con WhatsApp automático.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 3 * 0.2 }}
          >
            <BarChart className="mx-auto mb-4 text-gray-400" size={40} />
            <h3 className="font-semibold">Métricas y control fácil</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-[#B0B0B5]">
              Visualiza citas, estadísticas e ingresos fácilmente.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Métricas */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 w-full bg-gray-50 dark:bg-[#161616]"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0 * 0.2 }}
            >
              <h3 className="text-5xl md:text-6xl font-bold">35%</h3>
              <p className="text-lg font-semibold mt-2">Más reservas</p>
              <p className="text-base mt-1 text-gray-700 dark:text-[#B0B0B5]">
                Disponibilidad 24/7 aumenta las reservas significativamente.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 1 * 0.2 }}
            >
              <h3 className="text-5xl md:text-6xl font-bold">80%</h3>
              <p className="text-lg font-semibold mt-2">Menos ausencias</p>
              <p className="text-base mt-1 text-gray-700 dark:text-[#B0B0B5]">
                Recordatorios automáticos reducen las citas perdidas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 2 * 0.2 }}
              className="col-span-2"
            >
              <h3 className="text-5xl md:text-6xl font-bold">4h</h3>
              <p className="text-lg font-semibold mt-2">Ahorro semanal</p>
              <p className="text-base mt-1 text-gray-700 dark:text-[#B0B0B5]">
                Tiempo que recuperas para enfocarte en tus clientes.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <img
              src={beneficiosImage}
              alt="Beneficios peluquería"
              className="rounded-xl shadow-lg max-w-sm w-full object-cover"
            />
            <p className="text-base mt-4 text-center leading-relaxed max-w-sm text-gray-700 dark:text-[#B0B0B5]">
              Las peluquerías incrementan ingresos un promedio del 35% en 3 meses,
              mientras reducen el tiempo administrativo.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mockups */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Ejemplos de webs y apps</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0 * 0.2 }}
            className="rounded-xl p-4 shadow-md bg-gray-100 dark:bg-[#1A1A1A]"
          >
            <img
              src={ejemploEscritorio}
              alt="Ejemplo versión escritorio"
              className="rounded-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 1 * 0.2 }}
            className="rounded-xl p-4 shadow-md bg-gray-100 dark:bg-[#1A1A1A]"
          >
            <img
              src={ejemploMovil}
              alt="Ejemplo versión móvil"
              className="rounded-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 2 * 0.2 }}
            className="rounded-xl p-4 shadow-md bg-gray-100 dark:bg-[#1A1A1A]"
          >
            <img
              src={ejemploAmbas}
              alt="Ejemplo ambas versiones"
              className="rounded-lg w-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Compromiso */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 text-center w-full bg-gray-50 dark:bg-[#1E1E1E]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">
            Tu éxito es nuestro compromiso
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Soporte incluido",
                text: "Te ayudamos con cualquier duda o problema técnico durante el uso de tu web y app.",
              },
              {
                title: "Formación rápida",
                text: "Sesión inicial para que aprendas a usar tu panel de citas y sacarle partido desde el día 1.",
              },
              {
                title: "Garantía de satisfacción",
                text: "Te damos 30 días de garantía: si la web/app no funciona correctamente o no cumple con lo que hemos prometido, te devolvemos el dinero.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="rounded-xl p-6 shadow-md bg-gray-100 dark:bg-[#1A1A1A]"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-[#B0B0B5]">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-[#B0B0B5] max-w-3xl mx-auto mt-6">
            Importante: el número de reservas, ventas o contactos depende de tu marketing y tu gestión. Nosotros garantizamos la <span className="font-semibold">calidad y el funcionamiento técnico</span> de la web/app.
          </p>
        </div>
      </motion.section>

      {/* Testimonios */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "“Desde que usamos este sistema tenemos un 40% más de reservas y ya no perdemos llamadas.”",
              name: "Laura Gómez",
              role: "Dueña de Peluquería Brillo",
            },
            {
              text: "“Los recordatorios automáticos han reducido las ausencias casi por completo.”",
              name: "Carlos Pérez",
              role: "Barbería Central",
            },
            {
              text: "“En menos de una semana ya teníamos nuestra app lista con nuestro logo.”",
              name: "Marta Ruiz",
              role: "Estética Bella",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="rounded-xl p-6 shadow-md bg-gray-100 dark:bg-[#1A1A1A]"
            >
              <Quote className="mx-auto mb-4 text-gray-400" size={32} />
              <p className="italic text-gray-700 dark:text-[#B0B0B5]">{t.text}</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
              <p className="text-sm text-gray-600 dark:text-[#B0B0B5]">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 text-center bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-[#1A1A1A] dark:via-[#2E2E2E] dark:to-[#1A1A1A]"
      >
        <h2 className="text-4xl font-bold mb-6">
          ¿Listo para llenar tu agenda?
        </h2>
        <p className="mb-8 text-lg">
          Reserva hoy para aprovechar el 25% de descuento y en menos de 7 días
          tendrás tu sistema funcionando.
        </p>
      </motion.section>

      {/* Packs */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 bg-gray-50 dark:bg-[#1E1E1E]"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Nuestros Packs Profesionales
        </h2>
        <BillingToggle
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
        />
        <div className="relative flex justify-center">
          <PricingTable billingCycle={billingCycle} />
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-6 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Preguntas frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 rounded-lg cursor-pointer bg-gray-100 dark:bg-[#1A1A1A]"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-400" />
                </motion.div>
              </div>
              <AnimatePresence>
                {openFAQ === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-sm mt-3 text-gray-700 dark:text-[#B0B0B5]"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="py-6 text-center text-sm bg-gray-100 text-gray-600 dark:bg-[#161616] dark:text-[#B0B0B5]"
      >
        GlowUp Studio
      </motion.footer>
    </div>
  );
}
