import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { ShieldCheck, Calendar } from "lucide-react";
import { doctor } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import MobileMenu from "./MobileMenu";

const navItems: { label: string; href: Route }[] = [
  { label: "Inicio", href: "/" },
  { label: "Enfermedades", href: "/enfermedades" },
  { label: "Servicios", href: "/servicios" },
  { label: "Síntomas", href: "/sintomas" },
  { label: "Contacto", href: "/contacto" },
];

/**
 * Header Editorial — mástil de alta definición con credenciales médicas superiores,
 * navegación con subrayado cinético y fijación con vidrio esmerilado suave.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/95 backdrop-blur-md transition-shadow duration-300 shadow-xs">
      <div className="hidden md:flex items-center justify-center gap-2 border-b border-[var(--color-line)]/60 bg-[var(--color-paper)]/70 px-6 py-1.5 text-center text-xs tracking-wide text-[var(--color-slate)]">
        <ShieldCheck className="h-3.5 w-3.5 text-[var(--color-blue)] shrink-0" aria-hidden="true" />
        <span>{formatCredentials(doctor)}</span>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-3.5">
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-90" aria-label={`${doctor.title} ${doctor.name}`}>
          <Image
            src="/logo-black.png"
            alt={`${doctor.title} ${doctor.name} — ${doctor.specialistTitle}`}
            width={220}
            height={90}
            className="h-13 w-auto md:h-15 object-contain"
            priority
          />
        </Link>
        <nav aria-label="Principal" className="hidden md:flex items-center gap-8">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-draw whitespace-nowrap text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-blue)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 rounded-xl bg-[var(--color-navy)] px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-xs transition-all duration-300 hover:bg-[var(--color-blue)] hover:shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5"
        >
          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Agendar cita</span>
        </a>
        <MobileMenu items={navItems} />
      </div>
    </header>
  );
}
