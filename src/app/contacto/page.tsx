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

/**
 * "Tarjeta de cita" — a propósito el mapa NO es dominante ni full-width (ese
 * patrón ya lo usan dr-raul-vega y dr-raul-mu-oz-gomez). Aquí es un recuadro
 * secundario junto a una tabla de horario tipo itinerario.
 */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pb-20 pt-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />
      <header className="mt-4 mb-10">
        <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
          Atención y Citas Médicas
        </span>
        <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
          Agenda tu cita
        </h1>
        <p className="mt-3 text-base text-[var(--color-slate)] leading-relaxed max-w-xl">
          Comunícate directamente con el consultorio del Dr. Gustavo Álvarez Velasco para agendar tu consulta de valoración urológica en Tuxtla Gutiérrez.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="space-y-8">
          {/* Horario de consulta */}
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
            <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
              Horario de Atención
            </span>
            <ul className="mt-4 divide-y divide-[var(--color-line)]/60">
              {schedule.map((row) => (
                <li key={row.day} className="flex items-center justify-between py-3 text-sm">
                  <span className="flex items-center gap-2.5 font-medium text-[var(--color-ink)]">
                    <Clock className="h-4 w-4 text-[var(--color-blue)]" aria-hidden="true" />
                    {row.day}
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-slate)] bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100">
                    {row.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Canales directos */}
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-sm">
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
              <li className="flex items-start gap-3.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3.5 text-sm text-[var(--color-ink)]">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--color-blue)] border border-slate-200/80 shadow-xs mt-0.5">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-[var(--color-slate)] font-semibold">Dirección</span>
                  <span className="text-xs leading-relaxed text-slate-700">
                    {doctor.address}, {doctor.city}, {doctor.state}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase block mb-3">
            Ubicación en Consultorio
          </span>
          <MapFacade address={`${doctor.address}, ${doctor.city}, ${doctor.state}`} whatsapp={doctor.whatsapp} />
          <p className="mt-4 text-xs text-[var(--color-slate)] leading-relaxed">
            Tuxtla Gutiérrez, Chiapas. Contamos con estacionamiento cercano y acceso adaptado para pacientes con movilidad reducida.
          </p>
        </div>
      </div>
    </div>
  );
}
