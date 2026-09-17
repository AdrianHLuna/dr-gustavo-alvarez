import type { Metadata } from "next";
import type { Route } from "next";
import { services } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndexRow from "@/components/IndexRow";

export const metadata: Metadata = {
  title: "Servicios",
  alternates: { canonical: "/servicios" },
};

export default function ServicesIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]} />
      <header className="mt-4 mb-8">
        <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
          Intervenciones y Diagnóstico
        </span>
        <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
          Servicios y procedimientos
        </h1>
        <p className="mt-3 text-base text-[var(--color-slate)] leading-relaxed">
          Procedimientos diagnósticos y terapéuticos especializados con tecnología médica avanzada y recuperación guiada.
        </p>
      </header>

      <div className="divide-y divide-[var(--color-line)]/60">
        {services.map((service, i) => (
          <IndexRow
            key={service.id}
            index={i + 1}
            title={service.name}
            description={service.description}
            href={`/servicios/${service.slug}` as Route}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
