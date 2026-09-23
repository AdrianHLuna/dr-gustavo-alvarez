"use client";

import { useState } from "react";
import Image from "next/image";
import { Stethoscope, ShieldCheck } from "lucide-react";

interface EntityHeroImageProps {
  src: string;
  alt: string;
}

/**
 * Banner fotográfico de alta jerarquía visual para las fichas clínicas de detalle.
 */
export default function EntityHeroImage({ src, alt }: EntityHeroImageProps) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div className="relative mx-auto max-w-6xl px-6 pt-6">
        <div
          className="relative flex h-56 sm:h-72 md:h-80 w-full items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-r from-[#001f3f] via-[#003366] to-[#004b87] text-white shadow-lg border border-blue-900/40"
          role="img"
          aria-label={alt}
        >
          {/* Fondo geométrico abstracto */}
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full border border-white/30" />
            <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full border border-white/30" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-3.5 px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 p-3 shadow-lg backdrop-blur-md border border-white/20">
              <Stethoscope className="h-8 w-8 text-blue-200" aria-hidden="true" />
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur-md">
              <ShieldCheck className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              <span>Ficha Clínica Especializada</span>
            </div>
            <p className="max-w-xl text-base sm:text-lg font-bold text-white drop-shadow-md font-heading">
              {alt}
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-[var(--color-blue)] via-cyan-400 to-[var(--color-navy)]" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-6xl px-6 pt-6">
      <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 w-full overflow-hidden rounded-3xl shadow-lg border border-slate-200/80">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-102"
          sizes="(max-width: 1200px) 100vw, 1152px"
          priority
          onError={() => setFailed(true)}
        />
        {/* Gradientes superpuestos para legibilidad y elegancia */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-slate-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />

        {/* Insignia de validación médica flotante */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-slate-950/60 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md shadow-md">
            <ShieldCheck className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            <span>Revisión Médica por Urólogo Especialista</span>
          </div>
        </div>

        {/* Pie del banner con título en alto contraste */}
        <div className="absolute bottom-4 left-6 right-6 sm:bottom-6 sm:left-8 sm:right-8">
          <span className="editorial-folio text-xs font-bold tracking-widest text-cyan-300 uppercase drop-shadow-xs">
            Información Clínica para Pacientes
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-md mt-1">
            {alt}
          </h2>
        </div>
      </div>
    </div>
  );
}

