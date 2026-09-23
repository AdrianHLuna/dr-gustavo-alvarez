"use client";

import { useState } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface MapFacadeProps {
  address: string;
  whatsapp?: string;
  googleMapsUrl?: string;
}

/**
 * Componente de Google Maps optimizado con marcador PIN y fallback robusto en caso de bloqueo.
 */
export default function MapFacade({ address, googleMapsUrl }: MapFacadeProps) {
  const [iframeError, setIframeError] = useState(false);
  const query = "Policlínica de Especialidades en Chiapas, Tuxtla Gutiérrez, Chiapas";
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const externalUrl =
    googleMapsUrl ??
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-100 shadow-md transition-all">
      {/* Botón flotante para GPS / Cómo llegar */}
      <a
        href={externalUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent("clic_google_maps")}
        className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-blue)] to-[var(--color-navy)] px-4 py-2 text-xs font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      >
        <Navigation className="h-3.5 w-3.5 text-cyan-300" aria-hidden="true" />
        <span>Cómo llegar (GPS)</span>
      </a>

      {iframeError ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-900/10 via-slate-50 to-blue-50/40 p-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[var(--color-blue)] shadow-md border border-blue-100">
            <MapPin className="h-7 w-7 text-red-600 fill-red-100" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-[var(--color-navy)]">
              Policlínica de Especialidades en Chiapas
            </h3>
            <p className="mt-1 text-xs text-[var(--color-slate)] max-w-sm">
              {address}
            </p>
          </div>
          <a
            href={externalUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-navy)] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-[var(--color-blue)] transition-colors"
          >
            <span>Ver mapa interactivo en Google Maps</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      ) : (
        <iframe
          src={mapsEmbedUrl}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación exacta del consultorio médico"
          onError={() => setIframeError(true)}
        />
      )}
    </div>
  );
}


