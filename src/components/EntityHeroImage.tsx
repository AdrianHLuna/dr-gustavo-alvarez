"use client";

import { useState } from "react";
import Image from "next/image";
import { Stethoscope, Activity } from "lucide-react";

interface EntityHeroImageProps {
  src: string;
  alt: string;
}

/**
 * Banner superior para fichas médicas de detalle con iluminación clínica y respaldo visual estético.
 */
export default function EntityHeroImage({ src, alt }: EntityHeroImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className="relative flex h-52 sm:h-64 md:h-72 w-full items-center justify-center overflow-hidden bg-gradient-to-r from-[#002244] via-[#00396c] to-[#004e92] text-white shadow-inner"
        role="img"
        aria-label={alt}
      >
        {/* Patrón de fondo geométrico */}
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full border border-white/30" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-white/30" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 p-3 shadow-lg backdrop-blur-md border border-white/20">
            <Stethoscope className="h-8 w-8 text-blue-200" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium text-blue-100 backdrop-blur-xs">
            <Activity className="h-3.5 w-3.5 text-blue-200" aria-hidden="true" />
            <span>Ficha Médica Informativa</span>
          </div>
          <p className="max-w-md text-sm sm:text-base font-medium text-white/90 drop-shadow-xs font-sans">
            {alt}
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--color-blue)] via-cyan-400 to-[var(--color-navy)]" />
      </div>
    );
  }

  return (
    <div className="relative h-52 sm:h-64 md:h-72 w-full overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
        onError={() => setFailed(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
    </div>
  );
}
