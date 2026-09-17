"use client";

import { Phone, MessageCircle } from "lucide-react";
import { doctor } from "@/data";
import { trackEvent } from "@/lib/analytics";

/** Sticky Bottom Nav móvil — barra de acceso rápido con respuesta táctil inmediata */
export default function StickyBottomNav() {
  const cleanWhatsapp = doctor.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent(
    `Hola, ${doctor.title} ${doctor.name}. Vi su página web y me gustaría agendar una cita.`
  );

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex md:hidden border-t border-slate-200/90 bg-white/95 shadow-2xl backdrop-blur-md"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${doctor.phone}`}
        onClick={() => trackEvent("clic_agendar_cita", { source: "sticky_nav" })}
        className="relative flex w-[65%] min-h-[48px] items-center justify-center gap-2 bg-[var(--color-navy)] py-3 text-xs font-semibold text-white tracking-wide transition-colors hover:bg-[var(--color-blue)]"
      >
        <Phone className="h-4 w-4 text-blue-200" aria-hidden="true" />
        <span>Agendar Cita</span>
      </a>
      <a
        href={`https://wa.me/${cleanWhatsapp}?text=${message}`}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("clic_whatsapp", { source: "sticky_nav" })}
        className="flex w-[35%] min-h-[48px] items-center justify-center gap-1.5 bg-[#25D366] py-3 text-xs font-semibold text-white transition-opacity hover:opacity-95"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
