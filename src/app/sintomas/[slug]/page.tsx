import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, Stethoscope, ArrowUpRight, HelpCircle, Activity } from "lucide-react";
import { doctor, symptoms, diseases } from "@/data";
import { generateSymptomSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import AlarmSignsSection from "@/components/AlarmSignsSection";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHeroImage from "@/components/EntityHeroImage";

export const dynamicParams = false;

export function generateStaticParams() {
  return symptoms.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/sintomas/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) return {};

  return {
    title: symptom.seo.title,
    description: symptom.seo.description,
    keywords: symptom.seo.keywords,
    alternates: { canonical: `/sintomas/${symptom.slug}` },
    openGraph: {
      title: symptom.seo.title,
      description: symptom.seo.description,
      url: `/sintomas/${symptom.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function SymptomPage(props: PageProps<"/sintomas/[slug]">) {
  const { slug } = await props.params;
  const symptom = symptoms.find((s) => s.slug === slug);
  if (!symptom) notFound();

  const relatedConditions = diseases.filter((d) => symptom.relatedConditions?.includes(d.id));

  return (
    <>
      <StructuredData data={generateSymptomSchemas(symptom)} />
      <EntityHeroImage src={symptom.image} alt={symptom.name} />

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-4">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Síntomas", href: "/sintomas" },
            { label: symptom.name },
          ]}
        />

        <header className="mt-4 mb-8">
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
            Guía de Orientación Clínica
          </span>
          <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
            {symptom.name}
          </h1>
          {symptom.colloquialNames && symptom.colloquialNames.length > 0 && (
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-slate)]">
              También conocido en consulta como: <span className="font-medium text-[var(--color-ink)]">{symptom.colloquialNames.join(", ")}</span>
            </p>
          )}
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/85">{symptom.description}</p>
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={symptom.lastReviewed} />
          </div>
        </header>

        <AlarmSignsSection signs={symptom.alarmSigns} />

        <section className="mt-10">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">01</span>
            Causas posibles
          </h2>
          <ul className="mt-4 space-y-2.5">
            {symptom.causes.map((c, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 text-sm text-[var(--color-ink)] shadow-2xs">
                <AlertCircle className="h-4 w-4 text-[var(--color-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-xs">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">02</span>
            ¿Por qué consultar a un urólogo?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/85">{symptom.whyConsult}</p>
        </section>

        {symptom.faqs && symptom.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
              <span className="editorial-folio text-[var(--color-blue)]">03</span>
              Preguntas frecuentes
            </h2>
            <div className="mt-4 space-y-3">
              {symptom.faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-xs">
                  <h3 className="font-heading text-base sm:text-lg font-semibold text-[var(--color-ink)] flex items-start gap-2.5">
                    <HelpCircle className="h-4 w-4 text-[var(--color-blue)] shrink-0 mt-1" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-slate)] pl-6 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedConditions.length > 0 && (
          <section className="mt-12 rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6 shadow-xs">
            <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
              Condiciones Relacionadas
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedConditions.map((d) => (
                <Link
                  key={d.id}
                  href={`/enfermedades/${d.slug}` as Route}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200/80 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-2xs transition-all hover:bg-[var(--color-blue)] hover:text-white hover:border-transparent"
                >
                  <Activity className="h-3.5 w-3.5 text-[var(--color-blue)]" aria-hidden="true" />
                  <span>{d.name}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 p-8 text-center shadow-sm">
          <p className="font-heading text-2xl font-bold text-[var(--color-ink)]">
            {doctor.title} {doctor.name} puede ayudarte con {symptom.name.toLowerCase()}.
          </p>
          <p className="mt-2 text-sm text-[var(--color-slate)] max-w-md mx-auto">
            No ignores los síntomas urinarios. Una valoración a tiempo evita complicaciones y permite un tratamiento eficaz.
          </p>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-blue)] to-[var(--color-navy)] bg-[length:200%_auto] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:bg-right hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
          >
            <span>Agendar valoración oportuna</span>
            <ArrowUpRight className="h-4 w-4 text-blue-200" aria-hidden="true" />
          </a>
        </section>
      </article>

      <FloatingButtons context={symptom.name.toLowerCase()} />
    </>
  );
}
