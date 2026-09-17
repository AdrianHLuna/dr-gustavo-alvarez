"use client";

import { useState } from "react";
import Image from "next/image";
import { Stethoscope, Award, ShieldCheck } from "lucide-react";

interface DoctorPortraitProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  frame?: boolean;
}

/**
 * Retrato oficial del doctor con visual clinical fallback de alto impacto.
 * Cuando la fotografía está pendiente, muestra una composición institucional
 * con monograma, insignias médicas y profundidad atmosférica.
 */
export default function DoctorPortrait({ src, alt, className = "", priority, frame = false }: DoctorPortraitProps) {
  const [failed, setFailed] = useState(false);

  const content = failed ? (
    <div
      className={`relative h-full w-full overflow-hidden bg-gradient-to-br from-[#002b54] via-[#00396c] to-[#0a192f] flex flex-col items-center justify-center p-8 text-center text-white ${className}`}
      role="img"
      aria-label={alt}
    >
      {/* Patrón de fondo geométrico sutil */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full border border-white/20" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full border border-white/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full border border-white/10" />
      </div>

      {/* Emblema médico central */}
      <div className="relative mb-6 flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-3xl bg-white/10 p-4 shadow-2xl backdrop-blur-md border border-white/20">
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-blue)] to-[var(--color-navy)] shadow-inner">
          <Stethoscope className="h-10 w-10 sm:h-12 sm:w-12 text-white drop-shadow-md" aria-hidden="true" />
        </div>
        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md border-2 border-[#00396c]">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        </div>
      </div>

      {/* Título institucional */}
      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-medium tracking-wide text-blue-100 backdrop-blur-xs mb-3">
        <Award className="h-3.5 w-3.5 text-blue-200" aria-hidden="true" />
        Especialista Certificado
      </span>
      <h3 className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-white mb-1">
        {alt}
      </h3>
      <p className="max-w-xs text-xs sm:text-sm text-blue-100/80 font-sans">
        Cirugía Urológica · Urología Oncológica
      </p>
      <p className="mt-4 text-[11px] uppercase tracking-wider text-blue-200/60 font-mono">
        Tuxtla Gutiérrez, Chiapas
      </p>
    </div>
  ) : (
    <Image
      src={src}
      alt={alt}
      fill
      className={`absolute inset-0 object-cover ${frame ? "" : className}`}
      sizes="(max-width: 768px) 100vw, 50vw"
      priority={priority}
      onError={() => setFailed(true)}
    />
  );

  if (frame) {
    return (
      <div className={`mat-frame h-full w-full overflow-hidden ${className}`}>
        <div className="relative h-full w-full overflow-hidden rounded-xl">{content}</div>
      </div>
    );
  }

  return content;
}
