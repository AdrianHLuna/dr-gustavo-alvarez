import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ShieldCheck, Stethoscope, ArrowUpRight, HelpCircle } from "lucide-react";
import { doctor, services, diseases } from "@/data";
import { generateServiceSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import MedicalReviewByline from "@/components/MedicalReviewByline";
import FloatingButtons from "@/components/FloatingButtons";
import EntityHeroImage from "@/components/EntityHeroImage";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      url: `/servicios/${service.slug}`,
      type: "article",
      locale: "es_MX",
    },
  };
}

export default async function ServicePage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedConditions = diseases.filter((d) => service.relatedConditions?.includes(d.id));

  const specs: Array<[string, string]> = [
    ["Tipo", service.type === "ambulatorio" ? "Ambulatorio" : service.type === "hospitalario" ? "Hospitalario" : "Consultorio"],
    ...(service.duration ? ([["Duración", service.duration]] as Array<[string, string]>) : []),
    ...(service.recoveryTime ? ([["Recuperación", service.recoveryTime]] as Array<[string, string]>) : []),
    ["Doloroso", service.isPainful ? "Sí" : "No"],
  ];

  return (
    <>
      <StructuredData data={generateServiceSchemas(service)} />
      <EntityHeroImage src={service.image} alt={service.name} />

      <article className="mx-auto max-w-3xl px-6 pb-20 pt-4">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: service.name },
          ]}
        />

        <header className="mt-4 mb-8">
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
            Procedimiento Quirúrgico / Diagnóstico
          </span>
          <h1 className="mt-1 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
            {service.name}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/85">{service.description}</p>
          <div className="mt-4">
            <MedicalReviewByline lastReviewed={service.lastReviewed} />
          </div>
        </header>

        {/* Métricas del procedimiento */}
        <section className="rounded-2xl overflow-hidden border border-blue-100/90 bg-gradient-to-r from-blue-50/40 via-white to-blue-50/40 shadow-xs grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-blue-100/80">
          {specs.map(([label, value]) => (
            <div key={label} className="p-4 text-center">
              <p className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
                {label}
              </p>
              <p className="mt-1 font-heading text-base sm:text-lg font-bold text-[var(--color-ink)]">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-xs">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">01</span>
            En qué consiste
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-ink)]/85">{service.longDescription}</p>
        </section>

        <section className="mt-10">
          <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
            <span className="editorial-folio text-[var(--color-blue)]">02</span>
            Beneficios clínicos
          </h2>
          <ul className="mt-4 space-y-2.5">
            {service.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/30 p-3.5 text-sm font-medium text-[var(--color-ink)] shadow-2xs">
                <CheckCircle2 className="h-4 w-4 text-[var(--color-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </section>

        {service.postOpRecommendations.length > 0 && (
          <section className="mt-10">
            <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
              <span className="editorial-folio text-[var(--color-blue)]">03</span>
              Recomendaciones y cuidados
            </h2>
            <ul className="mt-4 space-y-2.5">
              {service.postOpRecommendations.map((r, i) => (
                <li key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 text-sm text-[var(--color-ink)] shadow-2xs">
                  <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {service.faqs && service.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="flex items-baseline gap-3 font-heading text-2xl text-[var(--color-ink)] font-bold">
              <span className="editorial-folio text-[var(--color-blue)]">04</span>
              Preguntas frecuentes
            </h2>
            <div className="mt-4 space-y-3">
              {service.faqs.map((faq, i) => (
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
              Enfermedades Relacionadas
            </span>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedConditions.map((d) => (
                <Link
                  key={d.id}
                  href={`/enfermedades/${d.slug}` as Route}
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200/80 bg-white px-4 py-2 text-xs font-semibold text-[var(--color-ink)] shadow-2xs transition-all hover:bg-[var(--color-blue)] hover:text-white hover:border-transparent"
                >
                  <Stethoscope className="h-3.5 w-3.5 text-[var(--color-blue)]" aria-hidden="true" />
                  <span>{d.name}</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 p-8 text-center shadow-sm">
          <p className="font-heading text-2xl font-bold text-[var(--color-ink)]">
            {doctor.title} {doctor.name} realiza {service.name.toLowerCase()}.
          </p>
          <p className="mt-2 text-sm text-[var(--color-slate)] max-w-md mx-auto">
            Agenda una valoración previa en Tuxtla Gutiérrez para determinar la indicación quirúrgica precisa y resolver todas tus dudas.
          </p>
          <a
            href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-blue)] to-[var(--color-navy)] bg-[length:200%_auto] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:bg-right hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
          >
            <span>Agendar valoración</span>
            <ArrowUpRight className="h-4 w-4 text-blue-200" aria-hidden="true" />
          </a>
        </section>
      </article>

      <FloatingButtons context={service.name.toLowerCase()} />
    </>
  );
}
