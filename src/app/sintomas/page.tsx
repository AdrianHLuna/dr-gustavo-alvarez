import type { Metadata } from "next";
import type { Route } from "next";
import { symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Síntomas",
  alternates: { canonical: "/sintomas" },
};

export default function SymptomsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
      <header className="mt-4 mb-10">
        <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
          Guía de Reconocimiento Oportuno
        </span>
        <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
          Síntomas frecuentes
        </h1>
        <p className="mt-3 max-w-2xl text-base text-[var(--color-slate)] leading-relaxed font-sans">
          Identifica las señales de alarma urológica y conoce en qué momento es indispensable acudir a valoración médica.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {symptoms.map((symptom, i) => (
          <EntityCard
            key={symptom.id}
            index={i + 1}
            title={symptom.name}
            description={symptom.description}
            href={`/sintomas/${symptom.slug}` as Route}
            image={symptom.image}
            badge="Orientación Médica"
          />
        ))}
      </div>
    </div>
  );
}

