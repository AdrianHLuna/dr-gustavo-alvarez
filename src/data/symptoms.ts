import type { Symptom } from "@/types/schema";

// Checkpoint de diseño: 2 de los 10 síntomas del intake (los relacionados con
// el único par enfermedad/servicio ya cargado). Los 8 restantes se añaden
// tras aprobar la dirección visual.
export const symptoms: Symptom[] = [
  {
    id: "sy-miccion-frecuente",
    slug: "miccion-frecuente",
    name: "Micción frecuente",
    colloquialNames: ["Orinar seguido", "Ir al baño muy seguido"],
    description:
      "La micción frecuente, o necesidad de orinar seguido, es la sensación de tener que ir al baño con más frecuencia de la habitual, ya sea de día o de noche. Puede tener causas benignas y tratables, como la vejiga hiperactiva, o formar parte de otros padecimientos urológicos.",
    causes: [
      "Vejiga hiperactiva",
      "Infección de vías urinarias",
      "Consumo elevado de líquidos o cafeína",
      "Crecimiento prostático",
      "Diabetes no controlada",
    ],
    alarmSigns: [
      "Si la micción frecuente se acompaña de fiebre, dolor intenso en la espalda baja o sangre en la orina, acude a urgencias de inmediato.",
      "Si además presentas confusión, debilidad importante o no puedes orinar en absoluto, acude a urgencias sin demora.",
    ],
    whyConsult:
      "Consultar a un urólogo permite identificar si la micción frecuente se debe a una causa benigna y tratable, como la vejiga hiperactiva, o a un padecimiento que requiere atención más específica, evitando que el síntoma se prolongue sin diagnóstico.",
    faqs: [
      {
        question: "¿Cuántas veces al día es normal orinar?",
        answer:
          "En promedio se considera normal orinar entre 6 y 8 veces al día. Orinar con mayor frecuencia, sobre todo si interrumpe actividades diarias o el sueño, puede indicar vejiga hiperactiva, infección urinaria u otra causa que un urólogo debe evaluar.",
      },
      {
        question: "¿La micción frecuente siempre indica una infección?",
        answer:
          "No. La micción frecuente puede deberse a vejiga hiperactiva, consumo elevado de líquidos, crecimiento prostático u otras causas. Solo una evaluación urológica con estudios como la urodinamia permite identificar la causa real y el tratamiento adecuado.",
      },
    ],
    relatedConditions: ["d-vejiga-hiperactiva"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/miccion-frecuente.jpg",
    seo: {
      title: "Micción Frecuente: Causas | Dr. Gustavo Álvarez",
      description:
        "¿Orinas muy seguido? El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa las causas de la micción frecuente y su tratamiento.",
      keywords: ["micción frecuente", "orinar seguido", "urólogo Tuxtla Gutiérrez", "vejiga hiperactiva"],
    },
  },
  {
    id: "sy-nicturia",
    slug: "nicturia",
    name: "Necesidad de orinar varias veces durante la noche",
    colloquialNames: ["Nicturia", "Despertarse varias veces a orinar"],
    description:
      "La nicturia es la necesidad de levantarse dos o más veces durante la noche a orinar, interrumpiendo el descanso. Puede deberse a la vejiga hiperactiva, al crecimiento prostático o a otras condiciones que aumentan la producción de orina durante la noche.",
    causes: [
      "Vejiga hiperactiva",
      "Consumo de líquidos antes de dormir",
      "Crecimiento prostático",
      "Apnea del sueño",
      "Enfermedades como la diabetes o problemas cardiovasculares que aumentan la producción de orina nocturna",
    ],
    alarmSigns: [
      "Si te levantas a orinar muchas veces por la noche junto con hinchazón en las piernas, dificultad para respirar al acostarte o dolor en el pecho, acude a urgencias de inmediato.",
      "Si la nicturia se acompaña de fiebre o dolor intenso, acude a urgencias sin demora.",
    ],
    whyConsult:
      "Levantarse varias veces por la noche a orinar afecta la calidad del sueño y puede ser señal de vejiga hiperactiva, crecimiento prostático u otra condición médica. Un urólogo puede identificar la causa exacta y ofrecer un tratamiento que mejore el descanso.",
    faqs: [
      {
        question: "¿Cuántas veces es normal levantarse a orinar en la noche?",
        answer:
          "Levantarse una vez durante la noche a orinar puede considerarse normal, especialmente en personas mayores. Levantarse dos o más veces de forma constante se conoce como nicturia y conviene evaluarla con un urólogo para identificar la causa.",
      },
      {
        question: "¿La nicturia se puede tratar?",
        answer:
          "Sí. El tratamiento depende de la causa: puede incluir ajustar el horario de líquidos antes de dormir, tratar una vejiga hiperactiva o el crecimiento prostático, o solicitar estudios como la urodinamia cuando el origen no es claro.",
      },
    ],
    relatedConditions: ["d-vejiga-hiperactiva"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/nicturia.jpg",
    seo: {
      title: "Orinar Varias Veces en la Noche | Dr. Álvarez",
      description:
        "¿Te levantas varias veces por la noche a orinar? El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa la nicturia y sus causas.",
      keywords: ["nicturia", "orinar en la noche", "urólogo Tuxtla Gutiérrez", "vejiga hiperactiva"],
    },
  },
];
