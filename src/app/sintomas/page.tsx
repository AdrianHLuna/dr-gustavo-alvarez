import type { Metadata } from "next";
import type { Route } from "next";
import { symptoms } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";
import IndexRow from "@/components/IndexRow";

export const metadata: Metadata = {
  title: "Síntomas",
  alternates: { canonical: "/sintomas" },
};

export default function SymptomsIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Síntomas" }]} />
      <header className="mt-4 mb-8">
        <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
          Guía de Reconocimiento Oportuno
        </span>
        <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
          Síntomas frecuentes
        </h1>
        <p className="mt-3 text-base text-[var(--color-slate)] leading-relaxed">
          Identifica las señales de alarma urológica y conoce en qué momento es indispensable acudir a valoración médica.
        </p>
      </header>

      <div className="divide-y divide-[var(--color-line)]/60">
        {symptoms.map((symptom, i) => (
          <IndexRow
            key={symptom.id}
            index={i + 1}
            title={symptom.name}
            description={symptom.description}
            href={`/sintomas/${symptom.slug}` as Route}
            image={symptom.image}
          />
        ))}
      </div>
    </div>
  );
}
