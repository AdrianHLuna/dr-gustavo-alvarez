"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface MapFacadeProps {
  address: string;
  whatsapp: string;
}

/**
 * Facade de Google Maps optimizado: carga el iframe solo tras interacción,
 * con marco redondeado, sombra clínica y botón de indicaciones táctil.
 */
export default function MapFacade({ address }: MapFacadeProps) {
  const [loaded, setLoaded] = useState(false);
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <div className="relative h-72 sm:h-80 w-full overflow-hidden rounded-2xl border border-[var(--color-line)] bg-gradient-to-br from-slate-50 to-blue-50/50 shadow-md shadow-blue-950/5 transition-all">
      {loaded ? (
        <iframe
          src={mapsEmbedUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación del consultorio"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            trackEvent("clic_google_maps");
            setLoaded(true);
          }}
          className="group flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-[var(--color-slate)] transition-colors hover:bg-blue-50/40"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--color-blue)] shadow-md shadow-blue-900/10 border border-blue-100 transition-transform group-hover:scale-110">
            <MapPin className="h-6 w-6" aria-hidden="true" />
          </div>
          <div className="text-center">
            <span className="font-heading text-lg font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-blue)] transition-colors block">
              Ver mapa e indicaciones
            </span>
            <span className="mt-1 block max-w-xs text-xs text-[var(--color-slate)] font-sans leading-relaxed">
              {address}
            </span>
          </div>
          <span className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-[var(--color-blue)] border border-blue-200/60 shadow-xs group-hover:bg-[var(--color-blue)] group-hover:text-white transition-colors">
            Activar mapa interactivo
          </span>
        </button>
      )}
    </div>
  );
}
