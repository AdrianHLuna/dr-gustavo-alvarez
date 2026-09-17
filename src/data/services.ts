import type { MedicalService } from "@/types/schema";

// Checkpoint de diseño: solo el primero de los 7 servicios/procedimientos
// del intake (los 6 restantes se añaden tras aprobar la dirección visual).
export const services: MedicalService[] = [
  {
    id: "s-urodinamia",
    slug: "urodinamia",
    name: "Urodinamia",
    description:
      "Estudio diagnóstico ambulatorio que evalúa cómo funcionan la vejiga y la uretra durante el llenado y el vaciado urinario.",
    longDescription:
      "La urodinamia es un estudio diagnóstico que mide la presión, el flujo y la capacidad de la vejiga durante el proceso de llenado y vaciado urinario. Permite identificar con precisión la causa de síntomas como urgencia, incontinencia o dificultad para orinar, y es la base para definir un tratamiento urológico dirigido en lugar de uno genérico.",
    type: "ambulatorio",
    duration: "30 a 45 minutos",
    recoveryTime: "No requiere recuperación; se puede reanudar la actividad normal de inmediato",
    isPainful: false,
    benefits: [
      "Identifica la causa exacta de los síntomas urinarios",
      "Permite diseñar un tratamiento dirigido en vez de uno genérico",
      "Estudio ambulatorio sin necesidad de hospitalización",
    ],
    postOpRecommendations: [
      "Puede presentarse ardor leve y pasajero al orinar durante las horas siguientes al estudio",
      "Se recomienda tomar abundantes líquidos durante el resto del día",
    ],
    technicalSpecs: {
      Tipo: "Estudio diagnóstico ambulatorio",
      Duración: "30 a 45 minutos",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Para qué sirve el estudio de urodinamia?",
        answer:
          "La urodinamia evalúa cómo funciona la vejiga y la uretra durante el llenado y el vaciado urinario. Permite identificar la causa exacta de síntomas como urgencia, incontinencia o dificultad para orinar, y define el tratamiento más adecuado para cada paciente.",
      },
      {
        question: "¿La urodinamia es dolorosa?",
        answer:
          "La urodinamia no es un estudio doloroso. Puede generar una molestia leve y pasajera durante la colocación de los catéteres, similar a la de un examen urológico de rutina, y no requiere anestesia ni hospitalización.",
      },
    ],
    relatedConditions: ["d-vejiga-hiperactiva"],
    lastReviewed: "2026-09-14",
    image: "/servicios/urodinamia.jpg",
    seo: {
      title: "Urodinamia en Tuxtla Gutiérrez | Dr. Gustavo Álvarez",
      description:
        "Estudio de urodinamia con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez. Diagnóstico preciso para tratar la vejiga hiperactiva.",
      keywords: ["urodinamia", "estudio urodinámico", "urólogo Tuxtla Gutiérrez", "vejiga hiperactiva"],
    },
  },
];
