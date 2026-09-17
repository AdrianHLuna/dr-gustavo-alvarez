"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { Stethoscope, ArrowUpRight } from "lucide-react";

interface IndexRowProps {
  index: number;
  title: string;
  description: string;
  href: Route;
  image?: string;
}

/**
 * Fila de la "lista-índice editorial" enriquecida: conserva la forma de lista
 * y la disposición limpia, pero con micro-interacciones vivas, folio en relieve,
 * transición suave de color, indicador de flecha y marco de miniatura con profundidad.
 */
export default function IndexRow({ index, title, description, href, image }: IndexRowProps) {
  const [failed, setFailed] = useState(!image);

  return (
    <Link
      href={href}
      className="group relative flex items-center gap-4 sm:gap-6 py-4 sm:py-5 px-3 sm:px-5 -mx-3 sm:-mx-5 rounded-2xl border border-transparent border-b-[var(--color-line)] transition-all duration-300 hover:border-blue-200/60 hover:bg-gradient-to-r hover:from-white hover:via-blue-50/30 hover:to-white hover:shadow-md hover:shadow-blue-950/5 hover:-translate-y-0.5"
    >
      <span className="editorial-folio flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50/90 via-slate-50 to-blue-100/60 border border-blue-200/60 text-[var(--color-blue)] font-bold text-sm sm:text-base shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--color-blue)] group-hover:text-white group-hover:border-transparent group-hover:shadow-md group-hover:shadow-blue-500/25">
        {String(index).padStart(2, "0")}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-heading text-lg sm:text-xl text-[var(--color-ink)] transition-colors duration-300 group-hover:text-[var(--color-blue)]">
            {title}
          </h3>
          <ArrowUpRight
            className="h-4 w-4 shrink-0 text-[var(--color-blue)] opacity-0 -translate-x-1.5 translate-y-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
            aria-hidden="true"
          />
        </div>
        <p className="mt-1 text-sm text-[var(--color-slate)] line-clamp-1 sm:line-clamp-2 max-w-xl transition-colors group-hover:text-slate-700">
          {description}
        </p>
      </div>

      <div className="relative h-14 w-14 sm:h-16 sm:w-16 md:h-18 md:w-18 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/70 shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:shadow-md group-hover:border-blue-300/80">
        {failed || !image ? (
          <div
            className="image-fallback flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-110"
            role="img"
            aria-label={title}
          >
            <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--color-blue)] drop-shadow-xs" aria-hidden="true" />
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="80px"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </Link>
  );
}
