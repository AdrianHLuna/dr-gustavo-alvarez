import type { Metadata } from "next";
import type { Route } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Servicios",
  alternates: { canonical: "/servicios" },
};

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <header className="mt-4 mb-10">
        <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
          Intervenciones y Diagnóstico
        </span>
        <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
          Servicios y procedimientos
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--color-slate)] leading-relaxed font-sans">
          Procedimientos diagnósticos y terapéuticos especializados con tecnología médica avanzada y recuperación guiada.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, i) => (
          <EntityCard
            key={service.id}
            index={i + 1}
            title={service.name}
            description={service.description}
            href={`/servicios/${service.slug}` as Route}
            image={service.image}
            badge={service.type === "ambulatorio" ? "Ambulatorio" : "Hospitalario"}
          />
        ))}
      </div>
    </div>
  );
}

