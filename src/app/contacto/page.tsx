import type { Metadata } from "next";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import MapFacade from "@/components/MapFacade";

export const metadata: Metadata = {
  title: "Contacto",
  alternates: { canonical: "/contacto" },
};

const schedule = [
  { day: "Lunes a viernes", hours: "8:00 – 19:00" },
  { day: "Sábado", hours: "10:00 – 14:00" },
];

export default function ContactPage() {
  const fullAddress = `${doctor.address}, ${doctor.city}, ${doctor.state}`;

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />

      <header className="mt-4 mb-8">
        <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
          Ubicación y Atención Médica
        </span>
        <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
          Ubicación del Consultorio
        </h1>
        <p className="mt-3 text-base text-[var(--color-slate)] leading-relaxed max-w-2xl font-sans">
          Encuentra la ubicación exacta del consultorio del Dr. Gustavo Álvarez Velasco en Tuxtla Gutiérrez, Chiapas.
        </p>
      </header>

      {/* Mapa de Google desplegado DE PRIMERAS con Pin exacto */}
      <section className="mb-10">
        <MapFacade address={fullAddress} googleMapsUrl={doctor.googleMapsUrl} whatsapp={doctor.whatsapp} />
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--color-slate)] px-1">
          <span className="flex items-center gap-1.5 font-medium text-[var(--color-ink)]">
            <MapPin className="h-4 w-4 text-[var(--color-blue)] shrink-0" aria-hidden="true" />
            <span>{fullAddress}</span>
          </span>
          <span>Estacionamiento cercano y acceso adaptado para pacientes.</span>
        </div>
      </section>

      {/* Horarios y Canales de Atención Directos */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Horario de consulta */}
        <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-xs">
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
            Horario de Atención
          </span>
          <ul className="mt-4 divide-y divide-[var(--color-line)]/60">
            {schedule.map((row) => (
              <li key={row.day} className="flex items-center justify-between py-3.5 text-sm">
                <span className="flex items-center gap-2.5 font-medium text-[var(--color-ink)]">
                  <Clock className="h-4 w-4 text-[var(--color-blue)]" aria-hidden="true" />
                  {row.day}
                </span>
                <span className="text-xs font-semibold text-[var(--color-slate)] bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                  {row.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Canales directos */}
        <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-xs">
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
            Contacto Directo
          </span>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5 text-sm font-semibold text-emerald-900 transition-all hover:bg-emerald-500 hover:text-white hover:border-transparent hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-xs">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs uppercase tracking-wider opacity-75">WhatsApp Consultorio</span>
                  <span>{doctor.whatsapp}</span>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`tel:${doctor.phone}`}
                className="flex items-center gap-3.5 rounded-xl border border-blue-100 bg-blue-50/40 p-3.5 text-sm font-semibold text-[var(--color-ink)] transition-all hover:bg-[var(--color-navy)] hover:text-white hover:border-transparent hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-navy)] text-white shadow-xs">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs uppercase tracking-wider opacity-75">Llamada Telefónica</span>
                  <span>{doctor.phone}</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

