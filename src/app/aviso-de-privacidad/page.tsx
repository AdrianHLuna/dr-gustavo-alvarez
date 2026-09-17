import type { Metadata } from "next";
import { doctor } from "@/data";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: `Aviso de privacidad del consultorio de ${doctor.title} ${doctor.name}, conforme a la LFPDPPP.`,
  alternates: { canonical: "/aviso-de-privacidad" },
};

export default function AvisoDePrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Aviso de Privacidad" }]} />
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Aviso de Privacidad</h1>
      </header>

      <section className="space-y-6 pb-16 text-muted-foreground">
        <div>
          <h2 className="font-semibold text-foreground">Responsable</h2>
          <p className="mt-1">
            {doctor.title} {doctor.name}, con domicilio en {doctor.address}, {doctor.city}, {doctor.state},
            es responsable del tratamiento de sus datos personales conforme a la Ley Federal de Protección
            de Datos Personales en Posesión de los Particulares (LFPDPPP).
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">Datos Personales Recabados</h2>
          <p className="mt-1">
            Se recaban datos de identificación y contacto (nombre, teléfono, correo electrónico) cuando el
            paciente los proporciona voluntariamente por WhatsApp, teléfono o formulario de contacto.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">Finalidades del Tratamiento</h2>
          <p className="mt-1">
            Los datos se utilizan exclusivamente para agendar y confirmar citas médicas, dar seguimiento a
            la atención solicitada y responder dudas del paciente.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">Derechos ARCO</h2>
          <p className="mt-1">
            Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de
            sus datos personales. Para ejercerlos, contáctenos en {doctor.email}.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-foreground">Cookies y Analítica</h2>
          <p className="mt-1">
            Este sitio utiliza Google Analytics para entender el uso del sitio. Las cookies de analítica
            solo se activan tras su consentimiento explícito mediante el aviso de cookies.
          </p>
        </div>
      </section>
    </main>
  );
}
