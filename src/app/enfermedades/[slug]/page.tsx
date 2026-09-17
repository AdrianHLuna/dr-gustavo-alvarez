import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Activity, AlertCircle, AlertTriangle, CheckCircle2, ShieldAlert, Stethoscope, ArrowUpRight, HelpCircle } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { generateDiseaseSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHeroImage from "@/components/EntityHeroImage";

export const dynamicParams = false;

export function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(props: PageProps<"/enfermedades/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) return {};

  return {
    title: disease.seo.title,
    description: disease.seo.description,
    keywords: disease.seo.keywords,
    alternates: { canonical: `/enfermedades/${disease.slug}` },
    openGraph: {
      title: disease.seo.title,
      description: disease.seo.description,
      url: `/enfermedades/${disease.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function DiseasePage(props: PageProps<"/enfermedades/[slug]">) {
  const { slug } = await props.params;
  const disease = diseases.find((d) => d.slug === slug);
  if (!disease) notFound();

  const relatedServices = services.filter((s) => disease.relatedServices?.includes(s.id));
  const relatedSymptoms = symptoms.filter((s) => disease.relatedSymptoms?.includes(s.id));

  const sections = [
    { title: `¿Qué es ${disease.name.toLowerCase()}?`, content: disease.description },
  ];

  return (
    <>
      <StructuredData data={generateDiseaseSchemas(disease)} />
      <EntityHeroImage src={disease.image} alt={disease.name} />

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-4">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Enfermedades", href: "/enfermedades" },
            { label: disease.name },
          ]}
        />

        <header className="mt-4 mb-8">
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
            Ficha Clínica Especializada
          </span>
          <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
            {disease.name}
          </h1>
          {disease.colloquialNames && disease.colloquialNames.length > 0 && (
            <p className="mt-2 text-xs sm:text-sm text-[var(--color-slate)]">
              También conocida en consulta como: <span className="font-medium text-[var(--color-ink)]">{disease.colloquialNames.join(", ")}</span>
            </p>
          )}
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={disease.lastReviewed} />
          </div>
        </header>

        {sections.map((s, i) => (
          <section key={s.title} className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-xs">
            <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
              <span className="editorial-folio text-[var(--color-blue)]">{String(i + 1).padStart(2, "0")}</span>
              {s.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/85">{s.content}</p>
          </section>
        ))}

        <section className="mt-10">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">02</span>
            Síntomas característicos
          </h2>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {disease.symptoms.map((s, i) => (
              <li key={i} className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-sm text-[var(--color-ink)] font-medium shadow-2xs">
                <Activity className="h-4 w-4 text-[var(--color-blue)] shrink-0" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">03</span>
            Causas frecuentes
          </h2>
          <ul className="mt-4 space-y-2.5">
            {disease.causes.map((c, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3 text-sm text-[var(--color-ink)] shadow-2xs">
                <AlertCircle className="h-4 w-4 text-[var(--color-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">04</span>
            Factores de riesgo
          </h2>
          <ul className="mt-4 space-y-2.5">
            {disease.riskFactors.map((r, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/40 p-3 text-sm text-amber-950 shadow-2xs">
                <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">05</span>
            Posibles complicaciones
          </h2>
          <ul className="mt-4 space-y-2.5">
            {disease.complications.map((c, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/40 p-3 text-sm text-red-950 shadow-2xs">
                <ShieldAlert className="h-4 w-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">06</span>
            Abordajes y tratamientos
          </h2>
          <ul className="mt-4 space-y-2.5">
            {disease.treatments.map((t, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/30 p-3.5 text-sm font-medium text-[var(--color-ink)] shadow-2xs">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">07</span>
            Preguntas frecuentes
          </h2>
          <div className="mt-4 space-y-3">
            {disease.faqs.map((faq, i) => (
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

        {(relatedServices.length > 0 || relatedSymptoms.length > 0) && (
          <section className="mt-12 rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-6 shadow-xs">
            <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
              Contenido Relacionado
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedServices.map((s) => (
                <Link
                  key={s.id}
                  href={`/servicios/${s.slug}` as Route}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200/80 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-2xs transition-all hover:bg-[var(--color-blue)] hover:text-white hover:border-transparent"
                >
                  <Stethoscope className="h-3.5 w-3.5 text-[var(--color-blue)]" aria-hidden="true" />
                  <span>{s.name}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
              {relatedSymptoms.map((s) => (
                <Link
                  key={s.id}
                  href={`/sintomas/${s.slug}` as Route}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-2xs transition-all hover:bg-[var(--color-navy)] hover:text-white hover:border-transparent"
                >
                  <Activity className="h-3.5 w-3.5 text-[var(--color-slate)]" aria-hidden="true" />
                  <span>{s.name}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 p-8 text-center shadow-sm">
          <p className="font-heading text-2xl font-bold text-[var(--color-ink)]">
            {doctor.title} {doctor.name} atiende {disease.name.toLowerCase()}.
          </p>
          <p className="mt-2 text-sm text-[var(--color-slate)] max-w-md mx-auto">
            Agenda una consulta personalizada en Tuxtla Gutiérrez para obtener un diagnóstico preciso y un plan de tratamiento adecuado.
          </p>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-blue)] to-[var(--color-navy)] bg-[length:200%_auto] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:bg-right hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
          >
            <span>Agendar valoración urológica</span>
            <ArrowUpRight className="h-4 w-4 text-blue-200" aria-hidden="true" />
          </a>
        </section>
      </article>

      <FloatingButtons context={disease.name.toLowerCase()} />
    </>
  );
}
