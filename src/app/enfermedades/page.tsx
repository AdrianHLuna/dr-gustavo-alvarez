import type { Metadata } from "next";
import type { Route } from "next";
import { diseases } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Enfermedades",
  alternates: { canonical: "/enfermedades" },
};

export default function DiseasesIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Enfermedades" }]} />
      <header className="mt-4 mb-10">
        <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
          Catálogo Clínico Urológico
        </span>
        <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
          Enfermedades que atiende
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--color-slate)] leading-relaxed font-sans">
          Guía clínica de afecciones del sistema urinario y reproductor masculino tratadas por el especialista, con diagnóstico de certeza y abordaje ético.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {diseases.map((disease, i) => (
          <EntityCard
            key={disease.id}
            index={i + 1}
            title={disease.name}
            description={disease.description}
            href={`/enfermedades/${disease.slug}` as Route}
            image={disease.image}
            badge="Catálogo Clínico"
          />
        ))}
      </div>
    </div>
  );
}

