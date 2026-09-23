"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { ArrowUpRight, Stethoscope } from "lucide-react";

interface EntityCardProps {
  title: string;
  description: string;
  href: Route;
  image?: string;
  badge?: string;
  index?: number;
  aspect?: "16/10" | "video" | "4/3";
}

/**
 * Tarjeta médica en cuadrícula con cabecera fotográfica, micro-interacciones
 * de hover, insignias tácticas y tipografía editorial elegante.
 */
export default function EntityCard({
  title,
  description,
  href,
  image,
  badge,
  index,
  aspect = "16/10",
}: EntityCardProps) {
  const [failed, setFailed] = useState(!image);

  const aspectClass =
    aspect === "video"
      ? "aspect-video"
      : aspect === "4/3"
      ? "aspect-[4/3]"
      : "aspect-[16/10]";

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300/90 hover:shadow-xl hover:shadow-blue-950/10"
    >
      {/* Cabecera de Imagen */}
      <div className={`relative ${aspectClass} w-full overflow-hidden bg-slate-100`}>
        {failed || !image ? (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-900/10 via-slate-100 to-blue-50 text-[var(--color-blue)]"
            role="img"
            aria-label={title}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-xs backdrop-blur-xs border border-blue-100">
              <Stethoscope className="h-6 w-6 text-[var(--color-blue)]" aria-hidden="true" />
            </div>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setFailed(true)}
          />
        )}

        {/* Gradiente protector sobre la imagen */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

        {/* Folio e Insignia sobre la imagen */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
          {index !== undefined && (
            <span className="editorial-folio flex h-7 w-7 items-center justify-center rounded-lg border border-white/30 bg-slate-900/60 text-xs font-bold text-white backdrop-blur-md">
              {String(index).padStart(2, "0")}
            </span>
          )}
          {badge && (
            <span className="ml-auto inline-flex items-center rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[11px] font-semibold text-[var(--color-navy)] backdrop-blur-md shadow-xs">
              {badge}
            </span>
          )}
        </div>

        {/* Título flotante sobre la imagen */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white drop-shadow-md transition-colors duration-300 group-hover:text-blue-100 flex items-center justify-between gap-2">
            <span className="line-clamp-1">{title}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-blue-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </h3>
        </div>
      </div>

      {/* Cuerpo de la tarjeta */}
      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <p className="text-sm text-[var(--color-slate)] line-clamp-3 leading-relaxed font-sans">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-[var(--color-blue)]">
          <span className="transition-colors group-hover:text-[var(--color-navy)]">Ver ficha clínica</span>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 transition-all duration-300 group-hover:bg-[var(--color-blue)] group-hover:text-white">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
