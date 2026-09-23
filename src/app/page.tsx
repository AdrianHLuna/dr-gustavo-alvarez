import Link from "next/link";
import type { Route } from "next";
import { Banknote, CreditCard, Landmark, ShieldCheck, ArrowUpRight, Award, GraduationCap } from "lucide-react";
import { doctor, diseases, services, symptoms } from "@/data";
import { formatCredentials } from "@/lib/credentials";
import { generateHomeSchemas } from "@/lib/schemas";
import StructuredData from "@/components/StructuredData";
import DoctorPortrait from "@/components/DoctorPortrait";
import IndexRow from "@/components/IndexRow";
import EntityCard from "@/components/EntityCard";
import MapFacade from "@/components/MapFacade";

const paymentIcons: Record<string, typeof Banknote> = {
  Efectivo: Banknote,
  Transferencia: Landmark,
  "Tarjeta de débito": CreditCard,
  "Tarjeta de crédito": CreditCard,
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={generateHomeSchemas()} />

      {/* Hero editorial: fondo claro con iluminación radial ambiental, retrato oficial a la derecha,
          bloque tipográfico editorial a la izquierda con alta legibilidad y jerarquía premium */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl -z-10" />
        <div className="grid min-h-[90vh] grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 px-6 py-14 sm:py-16 md:px-14 lg:px-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/80 px-3.5 py-1.5 backdrop-blur-xs w-fit">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-blue)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-blue)]"></span>
              </span>
              <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)]">
                {doctor.specialty} · {doctor.city}, {doctor.state}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-[var(--color-ink)] tracking-tight">
              {doctor.title} {doctor.name}
            </h1>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-[var(--color-slate)] font-sans">
              {doctor.specialistTitle} con Alta Especialidad en{" "}
              <strong className="font-medium text-[var(--color-ink)]">{doctor.subspecialty}</strong>. Diagnóstico y
              tratamiento integral de padecimientos urológicos con más de 15 años de experiencia.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-blue)] to-[var(--color-navy)] bg-[length:200%_auto] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:bg-right hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
              >
                <span>Agendar cita</span>
                <ArrowUpRight className="h-4 w-4 text-blue-200" aria-hidden="true" />
              </a>
              <a
                href={`tel:${doctor.emergencyPhone ?? doctor.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50/60 px-6 py-3.5 text-sm font-semibold tracking-wide text-red-700 shadow-xs transition-all duration-300 hover:bg-red-600 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-red-600/20 hover:-translate-y-0.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600"></span>
                </span>
                <span>Urgencias · {doctor.emergencyPhone ?? doctor.phone}</span>
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2 text-xs text-[var(--color-slate)]">
              <ShieldCheck className="h-4 w-4 text-[var(--color-blue)] shrink-0" aria-hidden="true" />
              <span>{formatCredentials(doctor)}</span>
            </div>
          </div>

          <div className="relative min-h-[380px] md:min-h-full">
            <DoctorPortrait src={doctor.photo} alt={`${doctor.title} ${doctor.name}`} priority />
            {/* Placa flotante con efecto vidrio */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl shadow-slate-900/10 backdrop-blur-md transition-transform hover:-translate-y-1 sm:right-auto sm:min-w-[290px]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[var(--color-blue)] border border-blue-100">
                <Award className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <p className="font-heading text-3xl font-bold text-[var(--color-blue)] leading-none">
                  {doctor.stats?.[2]?.value ?? "+15"}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider font-semibold text-[var(--color-slate)]">
                  {doctor.stats?.[2]?.label ?? "Años de experiencia"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de estadísticas — refinada con gradiente y sombras suaves */}
      <section className="border-b border-[var(--color-line)] bg-gradient-to-r from-slate-50/80 via-blue-50/30 to-slate-50/80 py-3 backdrop-blur-xs">
        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-[var(--color-line)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {doctor.stats?.map((stat) => (
            <div key={stat.label} className="group px-6 py-6 text-center transition-transform duration-300 hover:-translate-y-0.5">
              <p className="font-heading text-4xl sm:text-5xl font-bold bg-gradient-to-br from-[var(--color-navy)] via-[var(--color-blue)] to-[var(--color-navy)] bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm font-semibold tracking-wider text-[var(--color-slate)] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre el especialista */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-12">
        <div className="relative aspect-[4/5] md:col-span-4">
          <DoctorPortrait src={doctor.photo} alt={`${doctor.title} ${doctor.name}`} frame />
        </div>
        <div className="flex flex-col justify-center md:col-span-8">
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
            Sobre el especialista
          </span>
          <h2 className="mt-1.5 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
            {doctor.title} {doctor.name}
          </h2>
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--color-ink)]/85">
            {doctor.bio}
          </p>
          <p className="mt-4 max-w-2xl italic text-[var(--color-slate)] border-l-2 border-[var(--color-blue)] pl-4 py-0.5">
            "{doctor.philosophy}"
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl border border-blue-200/70 bg-blue-50/60 px-4 py-2 text-xs font-medium text-[var(--color-navy)] shadow-xs">
              <GraduationCap className="h-3.5 w-3.5 text-[var(--color-blue)]" aria-hidden="true" />
              Céd Prof: {doctor.cedula} ({doctor.cedulaInstitucion})
            </span>
            {doctor.cedulaEspecialidad && (
              <span className="inline-flex items-center gap-2 rounded-xl border border-blue-200/70 bg-blue-50/60 px-4 py-2 text-xs font-medium text-[var(--color-navy)] shadow-xs">
                <Award className="h-3.5 w-3.5 text-[var(--color-blue)]" aria-hidden="true" />
                Céd Esp: {doctor.cedulaEspecialidad} ({doctor.cedulaEspecialidadInstitucion})
              </span>
            )}
          </div>

          <div className="mt-10">
            <p className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
              Formación y certificaciones
            </p>
            <ul className="mt-3 space-y-2">
              {[...doctor.education, ...doctor.certifications.map((c) => ({ degree: c.name, institution: c.institution, year: undefined }))].map(
                (item) => (
                  <li
                    key={item.degree}
                    className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 rounded-xl border border-slate-100/90 bg-white/70 p-3 text-sm shadow-xs transition-colors hover:border-blue-200 hover:bg-blue-50/30"
                  >
                    <span className="font-medium text-[var(--color-ink)] flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-blue)] shrink-0" />
                      {item.degree}
                    </span>
                    <span className="text-xs sm:text-sm text-[var(--color-slate)] sm:text-right font-sans">
                      {item.institution}
                      {item.year ? ` · ${item.year}` : ""}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Ubicación del Consultorio con Pin interactivo de primera vista */}
      <section id="ubicacion" className="border-t border-[var(--color-line)] bg-slate-50/50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8">
            <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
              Ubicación de Atención Médica
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl text-[var(--color-ink)] mt-1 font-bold">
              Ubicación del Consultorio
            </h2>
            <p className="mt-2 text-sm text-[var(--color-slate)] max-w-xl font-sans">
              {doctor.address}, {doctor.city}, {doctor.state}.
            </p>
          </div>
          <MapFacade
            address={`${doctor.address}, ${doctor.city}, ${doctor.state}`}
            googleMapsUrl={doctor.googleMapsUrl}
            whatsapp={doctor.whatsapp}
          />
        </div>
      </section>

      {/* Enfermedades — cuadrícula destacada de las 4 más importantes */}
      <section id="enfermedades" className="border-t border-[var(--color-line)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between border-b border-[var(--color-line)] pb-4 mb-8">
            <div>
              <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
                Catálogo Clínico Principal
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--color-ink)] mt-1 font-bold">
                Enfermedades más frecuentes
              </h2>
            </div>
            <Link
              href="/enfermedades"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue)] transition-colors hover:text-[var(--color-navy)]"
            >
              <span>Ver las 10 enfermedades</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diseases.slice(0, 4).map((disease, i) => (
              <EntityCard
                key={disease.id}
                index={i + 1}
                title={disease.name}
                description={disease.description}
                href={`/enfermedades/${disease.slug}` as Route}
                image={disease.image}
                badge="Alta Especialidad"
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/enfermedades"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200/80 bg-blue-50/50 px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all hover:bg-[var(--color-blue)] hover:text-white hover:border-transparent hover:shadow-md"
            >
              <span>Ver todas las enfermedades urológicas ({diseases.length})</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Servicios — cuadrícula destacada de los 4 más importantes */}
      <section id="servicios" className="border-t border-[var(--color-line)] py-16 bg-[var(--color-paper)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between border-b border-[var(--color-line)] pb-4 mb-8">
            <div>
              <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
                Procedimientos Médicos Principales
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--color-ink)] mt-1 font-bold">
                Servicios y procedimientos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue)] transition-colors hover:text-[var(--color-navy)]"
            >
              <span>Ver los 10 servicios</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, i) => (
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

          <div className="mt-10 text-center">
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200/80 bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] shadow-xs transition-all hover:bg-[var(--color-blue)] hover:text-white hover:border-transparent hover:shadow-md"
            >
              <span>Ver todos los servicios y procedimientos ({services.length})</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Síntomas — cuadrícula destacada de los 4 más importantes */}
      <section id="sintomas" className="border-t border-[var(--color-line)] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between border-b border-[var(--color-line)] pb-4 mb-8">
            <div>
              <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
                Guía de Orientación al Paciente
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl text-[var(--color-ink)] mt-1 font-bold">
                Síntomas frecuentes
              </h2>
            </div>
            <Link
              href="/sintomas"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-blue)] transition-colors hover:text-[var(--color-navy)]"
            >
              <span>Ver los 10 síntomas</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {symptoms.slice(0, 4).map((symptom, i) => (
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

          <div className="mt-10 text-center">
            <Link
              href="/sintomas"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200/80 bg-blue-50/50 px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition-all hover:bg-[var(--color-blue)] hover:text-white hover:border-transparent hover:shadow-md"
            >
              <span>Ver la guía completa de síntomas ({symptoms.length})</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Precio y formas de pago — tarjeta médica de honorarios con acabados premium */}
      <section className="border-t border-[var(--color-line)] bg-gradient-to-b from-[var(--color-paper)] to-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 rounded-3xl border border-blue-100/80 bg-white p-8 sm:p-12 shadow-lg shadow-blue-950/5 md:grid-cols-2">
            <div>
              <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
                Honorarios Claros y Transparentes
              </span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl text-[var(--color-ink)] font-bold">
                ${doctor.consultationPrice.toLocaleString("es-MX")}{" "}
                <span className="text-xl font-normal text-[var(--color-slate)]">MXN</span>
              </h2>
              <p className="mt-2 text-sm text-[var(--color-slate)]">
                Valoración integral de primera vez con exploración urológica especializada.
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-[var(--color-slate)] bg-blue-50/60 p-3 rounded-xl border border-blue-100/60">
                <ShieldCheck className="h-4 w-4 text-[var(--color-blue)] shrink-0" aria-hidden="true" />
                <span>Atención ética con recibo de honorarios deducible de impuestos.</span>
              </div>
            </div>
            <div>
              <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
                Métodos de Pago Aceptados
              </span>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctor.paymentMethods.map((method) => {
                  const Icon = paymentIcons[method] ?? Banknote;
                  return (
                    <li
                      key={method}
                      className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-sm font-medium text-[var(--color-ink)] shadow-xs transition-colors hover:border-blue-200 hover:bg-blue-50/40"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[var(--color-blue)] shadow-xs">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span>{method}</span>
                    </li>
                  );
                })}
              </ul>
              {doctor.insurances && doctor.insurances.length > 0 && (
                <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50/40 p-3.5 text-xs text-[var(--color-slate)] flex items-start gap-2.5">
                  <ShieldCheck className="h-4 w-4 text-[var(--color-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{doctor.insurances[0]}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA final con atmósfera clínica refinada */}
      <section className="relative overflow-hidden py-20 text-center border-t border-[var(--color-line)]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(0,114,216,0.08)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-4xl px-6">
          <span className="editorial-folio text-xs font-semibold tracking-wider text-[var(--color-blue)] uppercase">
            Cuidado Urológico Especializado
          </span>
          <h2 className="mt-2 font-heading text-3xl sm:text-4xl md:text-5xl text-[var(--color-ink)] font-bold">
            Agenda tu valoración con {doctor.title} {doctor.name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-slate)]">
            Recibe atención médica de primer nivel en Tuxtla Gutiérrez con la calidez y el rigor clínico que mereces.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/${doctor.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-navy)] via-[var(--color-blue)] to-[var(--color-navy)] bg-[length:200%_auto] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:bg-right hover:shadow-xl hover:shadow-blue-600/25 hover:-translate-y-0.5"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 text-blue-200" aria-hidden="true" />
            </a>
            <a
              href={`tel:${doctor.phone}`}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-[var(--color-ink)] shadow-xs transition-all duration-300 hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5"
            >
              <span>Llamar al consultorio</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
