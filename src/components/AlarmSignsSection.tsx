import { AlertTriangle, AlertCircle } from "lucide-react";

interface AlarmSignsSectionProps {
  signs: string[];
}

/**
 * Señales de alarma clínicas con alta visibilidad y rigor médico.
 */
export default function AlarmSignsSection({ signs }: AlarmSignsSectionProps) {
  return (
    <section className="my-8 rounded-2xl border border-red-200 border-l-4 border-l-red-600 bg-red-50/70 p-6 shadow-sm shadow-red-900/5">
      <div className="flex items-center gap-2.5 font-heading text-lg font-bold text-red-800">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600">
          <AlertTriangle className="h-5 w-5" aria-hidden="true" />
        </span>
        <h2>Señales de alarma: acude a urgencias</h2>
      </div>
      <p className="mt-2 text-sm text-red-800/90 leading-relaxed font-sans">
        Si presentas cualquiera de los siguientes síntomas, acude de inmediato a un servicio de urgencias médicas o llama a emergencias. No demores tu atención.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-red-900 font-medium">
        {signs.map((sign, i) => (
          <li key={i} className="flex items-start gap-2.5 rounded-xl bg-white/70 p-2.5 border border-red-100/80 shadow-2xs">
            <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="leading-snug">{sign}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
