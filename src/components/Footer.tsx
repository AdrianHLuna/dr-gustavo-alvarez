import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";

const MAX_LINKS = 6;

/**
 * Footer "Índice Editorial" — atmósfera oscura institucional en azul marino de marca
 * con detalles nítidos, enlaces accesibles y tipografía clara.
 */
export default function Footer() {
  const columns = [
    { title: "Enfermedades", base: "/enfermedades", items: diseases },
    { title: "Servicios", base: "/servicios", items: services },
    { title: "Síntomas", base: "/sintomas", items: symptoms },
  ] as const;

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#002b54] via-[#00396c] to-[#07172b] text-white">
      {/* Sombra ambiental sutil */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-full max-w-4xl rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-4 border-b border-white/10 pb-12 text-center">
          <Image
            src="/logo-white.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`}
            width={260}
            height={106}
            className="h-16 w-auto md:h-20 object-contain drop-shadow-md"
          />
          <p className="max-w-md text-sm text-blue-100/80 flex items-center justify-center gap-1.5">
            <MapPin className="h-4 w-4 text-[var(--color-blue-light)] shrink-0" aria-hidden="true" />
            <span>{doctor.address}, {doctor.city}, {doctor.state}</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-1">
            <a
              href={`tel:${doctor.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-xs border border-white/15 transition-all hover:bg-white/20"
            >
              <Phone className="h-3.5 w-3.5 text-[var(--color-blue-light)]" aria-hidden="true" />
              <span>{doctor.phone}</span>
            </a>
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/20 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-200 backdrop-blur-xs border border-emerald-400/30 transition-all hover:bg-[#25D366]/30 hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 border-b border-white/10 py-12 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-lg font-semibold text-white tracking-wide">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.slice(0, MAX_LINKS).map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`${col.base}/${item.slug}` as `${typeof col.base}/${string}`}
                      className="group flex items-center gap-1.5 text-sm text-blue-100/75 transition-colors hover:text-white"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[var(--color-blue-light)]" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={col.base as "/enfermedades"}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-blue-light)] transition-colors hover:text-white"
              >
                <span>Ver todos</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-blue-200/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-relaxed">
            La información de este sitio tiene fines educativos e informativos y no sustituye una consulta médica
            profesional. Ante cualquier urgencia, acude de inmediato a un servicio de urgencias.
          </p>
          <Link href="/aviso-de-privacidad" className="shrink-0 text-blue-200/80 hover:text-white transition-colors">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
