import type { MedicalCondition } from "@/types/schema";

// Checkpoint de diseño (paso 5 del plan): solo la primera de las 6
// enfermedades del intake, para validar la dirección visual antes de escribir
// las 5 restantes. Grafo relacional completo y bidireccional con el servicio
// y los síntomas incluidos en este mismo checkpoint.
export const diseases: MedicalCondition[] = [
  {
    id: "d-vejiga-hiperactiva",
    slug: "vejiga-hiperactiva",
    name: "Vejiga hiperactiva",
    technicalName: "Síndrome de vejiga hiperactiva",
    colloquialNames: ["Vejiga nerviosa", "Vejiga irritable"],
    description:
      "La vejiga hiperactiva, también conocida como vejiga nerviosa, es un conjunto de síntomas urinarios provocado por contracciones involuntarias del músculo de la vejiga. Se manifiesta como urgencia repentina para orinar, micción frecuente durante el día y necesidad de levantarse varias veces por la noche.",
    symptoms: [
      "Necesidad urgente y repentina de orinar",
      "Micción frecuente durante el día",
      "Necesidad de orinar varias veces por la noche",
      "Pérdida involuntaria de orina asociada a la urgencia",
    ],
    causes: [
      "Contracciones involuntarias del músculo de la vejiga (detrusor)",
      "Alteraciones neurológicas que afectan el control vesical",
      "Envejecimiento del tejido vesical",
      "Infecciones urinarias recurrentes no tratadas",
      "Consumo elevado de cafeína o líquidos irritantes para la vejiga",
    ],
    riskFactors: [
      "Edad mayor a 60 años",
      "Enfermedades neurológicas previas",
      "Cirugías pélvicas o prostáticas previas",
      "Obesidad",
      "Infecciones urinarias de repetición",
    ],
    complications: [
      "Alteración del sueño por micción nocturna frecuente",
      "Aislamiento social por temor a la urgencia urinaria",
      "Infecciones urinarias recurrentes",
      "Impacto emocional y en la calidad de vida",
    ],
    treatments: [
      "Entrenamiento vesical y ejercicios de piso pélvico",
      "Modificación de hábitos de ingesta de líquidos",
      "Neuromodulación en casos seleccionados",
      "Estudio urodinámico para definir el tratamiento adecuado",
    ],
    faqs: [
      {
        question: "¿Qué es la vejiga hiperactiva?",
        answer:
          "La vejiga hiperactiva es un conjunto de síntomas urinarios que incluye urgencia repentina para orinar, micción frecuente durante el día y necesidad de levantarse varias veces por la noche a orinar. Ocurre por contracciones involuntarias del músculo de la vejiga y puede afectar la calidad de vida si no se evalúa a tiempo.",
      },
      {
        question: "¿La vejiga hiperactiva tiene cura?",
        answer:
          "La vejiga hiperactiva puede controlarse en la mayoría de los casos combinando entrenamiento vesical, ejercicios de piso pélvico y, cuando es necesario, estudios como la urodinamia para definir un tratamiento dirigido. El objetivo es reducir la urgencia y recuperar el control sobre la micción.",
      },
      {
        question: "¿Cuándo debo consultar a un urólogo por vejiga hiperactiva?",
        answer:
          "Debes consultar a un urólogo si la urgencia para orinar interrumpe tus actividades diarias, te despierta varias veces por la noche o se acompaña de pérdida involuntaria de orina. Una evaluación oportuna permite descartar otras causas y definir el tratamiento adecuado.",
      },
    ],
    relatedServices: ["s-urodinamia"],
    relatedSymptoms: ["sy-miccion-frecuente", "sy-nicturia"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/vejiga-hiperactiva.jpg",
    seo: {
      title: "Vejiga Hiperactiva en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Diagnóstico y tratamiento de vejiga hiperactiva con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, Chiapas. Agenda tu consulta.",
      keywords: ["vejiga hiperactiva", "vejiga nerviosa", "urólogo Tuxtla Gutiérrez", "urgencia urinaria"],
    },
  },
];
