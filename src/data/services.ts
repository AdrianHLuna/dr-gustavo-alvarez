import type { MedicalService } from "@/types/schema";

// 7 servicios vienen del intake real del doctor. Para llegar a los 10
// requeridos (AGENTS.md §3) se completaron 3 más de contenido clínico real,
// priorizando la Alta Especialidad más importante del doctor (Urología
// Oncológica): prostatectomía radical, nefrectomía y cistectomía radical.
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
  {
    id: "s-protesis-pene",
    slug: "protesis-de-pene",
    name: "Prótesis de pene",
    description:
      "Procedimiento quirúrgico que restaura la capacidad de erección mediante la colocación de un implante interno en el pene.",
    longDescription:
      "La prótesis de pene es un dispositivo médico que se coloca quirúrgicamente dentro del pene para restaurar la capacidad de tener una erección funcional, en casos de disfunción eréctil que no responde a otros tratamientos. Existen distintos tipos de implantes, y la elección depende de las características y preferencias de cada paciente tras una valoración urológica completa.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "60 a 90 minutos",
    recoveryTime: "Reincorporación a actividades normales en 4 a 6 semanas",
    isPainful: true,
    benefits: [
      "Restaura la función eréctil de forma duradera",
      "Es una solución definitiva cuando otros tratamientos no han funcionado",
      "Permite una vida sexual satisfactoria a largo plazo",
    ],
    postOpRecommendations: [
      "Reposo relativo durante las primeras semanas tras la cirugía",
      "Evitar actividad sexual hasta que el urólogo lo indique",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía hospitalaria",
      Duración: "60 a 90 minutos",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Cuándo se recomienda una prótesis de pene?",
        answer:
          "Se recomienda cuando la disfunción eréctil no responde a otros tratamientos disponibles. Es una decisión que se toma tras una valoración urológica completa que descarta otras alternativas menos invasivas.",
      },
      {
        question: "¿La prótesis de pene se siente o se nota al tacto?",
        answer:
          "Los implantes actuales están diseñados para lograr una apariencia y sensación lo más naturales posible tanto en reposo como en erección. El urólogo explica las características de cada tipo de implante antes de la cirugía.",
      },
    ],
    lastReviewed: "2026-09-14",
    image: "/servicios/protesis-de-pene.jpg",
    seo: {
      title: "Prótesis de Pene en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Colocación de prótesis de pene con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["prótesis de pene", "implante peneano", "urólogo Tuxtla Gutiérrez", "disfunción eréctil"],
    },
  },
  {
    id: "s-protesis-testicular",
    slug: "protesis-testicular",
    name: "Prótesis testicular",
    description:
      "Implante quirúrgico que restaura la apariencia física del escroto tras la extirpación de un testículo.",
    longDescription:
      "La prótesis testicular es un implante que se coloca dentro del escroto para restaurar su apariencia y volumen normales después de la extirpación de un testículo, ya sea por cáncer testicular, traumatismo u otra condición médica. El procedimiento puede realizarse en el mismo tiempo quirúrgico que la extirpación o de forma diferida.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "30 a 45 minutos",
    recoveryTime: "Reincorporación a actividades normales en 1 a 2 semanas",
    isPainful: true,
    benefits: [
      "Restaura la apariencia y simetría escrotal",
      "Favorece la recuperación de la autoestima tras la cirugía oncológica",
      "Puede colocarse en el mismo tiempo quirúrgico que la extirpación",
    ],
    postOpRecommendations: [
      "Uso de suspensorio o ropa interior de soporte durante la recuperación",
      "Evitar esfuerzo físico intenso durante las primeras semanas",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía hospitalaria",
      Duración: "30 a 45 minutos",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Cuándo se coloca una prótesis testicular?",
        answer:
          "Se coloca después de la extirpación de un testículo, con mayor frecuencia por cáncer testicular, para restaurar la apariencia y simetría del escroto. Puede colocarse en la misma cirugía de extirpación o en un tiempo posterior, según lo defina el urólogo.",
      },
      {
        question: "¿La prótesis testicular afecta la fertilidad o la función hormonal?",
        answer:
          "La prótesis testicular es únicamente estética; no tiene función hormonal ni reproductiva. Con un testículo sano restante, la mayoría de los hombres mantienen niveles hormonales y fertilidad normales.",
      },
    ],
    relatedConditions: ["d-cancer-testicular"],
    lastReviewed: "2026-09-14",
    image: "/servicios/protesis-testicular.jpg",
    seo: {
      title: "Prótesis Testicular en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Colocación de prótesis testicular con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["prótesis testicular", "implante testicular", "urólogo Tuxtla Gutiérrez", "cáncer testicular"],
    },
  },
  {
    id: "s-esfinter-urinario-artificial",
    slug: "esfinter-urinario-artificial",
    name: "Esfínter urinario artificial",
    description:
      "Dispositivo implantable que restaura el control voluntario de la orina en casos de incontinencia urinaria significativa.",
    longDescription:
      "El esfínter urinario artificial es un dispositivo que se implanta quirúrgicamente alrededor de la uretra para controlar de forma voluntaria la salida de la orina. Está indicado en casos de incontinencia urinaria significativa, con frecuencia tras una cirugía prostática o por daño neurológico, cuando otras medidas no han sido suficientes.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "60 a 90 minutos",
    recoveryTime: "Reincorporación a actividades normales en 4 a 6 semanas",
    isPainful: true,
    benefits: [
      "Restaura el control voluntario de la orina",
      "Mejora significativamente la calidad de vida en incontinencia moderada a severa",
      "Es una solución duradera cuando otros tratamientos no fueron suficientes",
    ],
    postOpRecommendations: [
      "Evitar esfuerzo físico intenso durante las primeras semanas",
      "Seguir las indicaciones del urólogo para activar el dispositivo",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía hospitalaria",
      Duración: "60 a 90 minutos",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Para quién está indicado el esfínter urinario artificial?",
        answer:
          "Está indicado en personas con incontinencia urinaria moderada a severa que no ha mejorado con otros tratamientos, con frecuencia después de una cirugía de próstata o por daño neurológico que afecta el control vesical.",
      },
      {
        question: "¿Cómo funciona el esfínter urinario artificial en el día a día?",
        answer:
          "El dispositivo mantiene la uretra cerrada de forma automática y el paciente lo abre de manera voluntaria mediante una bomba implantada cuando necesita orinar. El urólogo explica su manejo detallado durante la recuperación postoperatoria.",
      },
    ],
    relatedConditions: ["d-incontinencia-urinaria", "d-vejiga-neurogenica"],
    lastReviewed: "2026-09-14",
    image: "/servicios/esfinter-urinario-artificial.jpg",
    seo: {
      title: "Esfínter Urinario Artificial | Dr. Gustavo Álvarez",
      description:
        "Colocación de esfínter urinario artificial con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez.",
      keywords: ["esfínter urinario artificial", "incontinencia urinaria", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-mallas-anti-incontinencia",
    slug: "mallas-anti-incontinencia",
    name: "Mallas anti-incontinencia",
    description:
      "Procedimiento quirúrgico que coloca una malla de soporte para corregir la incontinencia urinaria de esfuerzo.",
    longDescription:
      "Las mallas anti-incontinencia son dispositivos de soporte que se colocan quirúrgicamente para dar sostén a la uretra y corregir la pérdida involuntaria de orina asociada a esfuerzos como toser, reír o hacer ejercicio. Es un procedimiento indicado tras una valoración urodinámica que confirme el tipo específico de incontinencia.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional",
    duration: "30 a 60 minutos",
    recoveryTime: "Reincorporación a actividades normales en 2 a 3 semanas",
    isPainful: true,
    benefits: [
      "Corrige la incontinencia urinaria de esfuerzo",
      "Procedimiento mínimamente invasivo con recuperación relativamente rápida",
      "Mejora significativamente la calidad de vida diaria",
    ],
    postOpRecommendations: [
      "Evitar esfuerzo físico intenso durante las primeras semanas",
      "Evitar relaciones sexuales hasta que el urólogo lo indique",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía hospitalaria",
      Duración: "30 a 60 minutos",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Para qué tipo de incontinencia sirven las mallas anti-incontinencia?",
        answer:
          "Las mallas anti-incontinencia están indicadas principalmente en la incontinencia urinaria de esfuerzo, es decir, la pérdida de orina al toser, reír, estornudar o hacer ejercicio. Un estudio urodinámico previo confirma si este procedimiento es el adecuado.",
      },
      {
        question: "¿Es un procedimiento seguro y duradero?",
        answer:
          "Es un procedimiento con amplia experiencia clínica y buenos resultados a largo plazo cuando se indica correctamente tras una valoración urológica completa. El urólogo explica los beneficios y consideraciones específicas de cada caso.",
      },
    ],
    relatedConditions: ["d-incontinencia-urinaria"],
    lastReviewed: "2026-09-14",
    image: "/servicios/mallas-anti-incontinencia.jpg",
    seo: {
      title: "Mallas Anti-Incontinencia | Dr. Gustavo Álvarez",
      description:
        "Colocación de mallas anti-incontinencia con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["mallas anti-incontinencia", "incontinencia urinaria de esfuerzo", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-radioterapia",
    slug: "radioterapia",
    name: "Radioterapia",
    description:
      "Tratamiento oncológico que utiliza radiación dirigida para destruir células cancerosas en tumores urológicos.",
    longDescription:
      "La radioterapia es un tratamiento oncológico que utiliza radiación de alta precisión dirigida al tumor para destruir las células cancerosas, minimizando el daño al tejido sano circundante. En urología oncológica se emplea principalmente en el cáncer de próstata y el cáncer de vejiga, ya sea como tratamiento principal o complementario a la cirugía.",
    type: "ambulatorio",
    duration: "Sesiones diarias de 15 a 30 minutos durante varias semanas",
    recoveryTime: "Reincorporación gradual a actividades normales, según tolerancia individual",
    isPainful: false,
    benefits: [
      "Tratamiento no quirúrgico dirigido al tumor",
      "Puede usarse como tratamiento principal o complementario a la cirugía",
      "Precisión que minimiza el daño al tejido sano circundante",
    ],
    postOpRecommendations: [
      "Puede presentarse cansancio acumulado durante el tratamiento",
      "Cuidado de la piel en la zona irradiada según indicación médica",
      "Seguimiento oncológico y urológico periódico tras finalizar el tratamiento",
    ],
    technicalSpecs: {
      Tipo: "Tratamiento oncológico ambulatorio",
      Duración: "Varias semanas en sesiones diarias",
      Doloroso: "No",
    },
    faqs: [
      {
        question: "¿Para qué tipo de cáncer urológico se usa la radioterapia?",
        answer:
          "En urología oncológica, la radioterapia se utiliza principalmente en el cáncer de próstata y el cáncer de vejiga, ya sea como tratamiento principal o de forma complementaria después de una cirugía, según el caso específico de cada paciente.",
      },
      {
        question: "¿La radioterapia duele durante la sesión?",
        answer:
          "La aplicación de la radioterapia en sí no es dolorosa. Los efectos secundarios, como cansancio o irritación de la piel en la zona tratada, suelen aparecer de forma gradual durante el tratamiento y se manejan con indicaciones específicas del equipo médico.",
      },
    ],
    relatedConditions: ["d-cancer-prostata", "d-cancer-vejiga"],
    lastReviewed: "2026-09-14",
    image: "/servicios/radioterapia.jpg",
    seo: {
      title: "Radioterapia Oncológica Urológica | Dr. Álvarez",
      description:
        "Radioterapia para cáncer de próstata y vejiga con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["radioterapia", "cáncer de próstata", "cáncer de vejiga", "urólogo oncólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-reconstruccion-urinaria",
    slug: "reconstruccion-urinaria",
    name: "Reconstrucción urinaria",
    description:
      "Cirugía especializada que repara o reconstruye segmentos dañados del sistema urinario para restaurar su función.",
    longDescription:
      "La reconstrucción urinaria agrupa procedimientos quirúrgicos especializados destinados a reparar segmentos dañados de la uretra, la vejiga o el sistema urinario superior, restaurando su función normal. Se indica en casos como la estenosis de uretra avanzada o el daño estructural causado por vejiga neurogénica u otras condiciones urológicas complejas.",
    type: "hospitalario",
    anesthesiaType: "Anestesia regional o general, según el caso",
    duration: "Variable según la complejidad del caso, de 1 a 4 horas",
    recoveryTime: "Reincorporación a actividades normales en 4 a 8 semanas",
    isPainful: true,
    benefits: [
      "Restaura la función urinaria normal en daños estructurales complejos",
      "Ofrece una solución definitiva en casos que no responden a tratamientos menos invasivos",
      "Mejora significativamente la calidad de vida a largo plazo",
    ],
    postOpRecommendations: [
      "Uso temporal de sonda urinaria según indicación del urólogo",
      "Reposo relativo durante las primeras semanas tras la cirugía",
      "Acudir a las revisiones postoperatorias programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía hospitalaria especializada",
      Duración: "1 a 4 horas, según el caso",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Cuándo se necesita una reconstrucción urinaria?",
        answer:
          "Se necesita cuando existe daño estructural en la uretra, la vejiga o el sistema urinario que no puede corregirse con tratamientos menos invasivos, como en casos avanzados de estenosis de uretra o daño asociado a la vejiga neurogénica.",
      },
      {
        question: "¿Qué tan larga es la recuperación de una reconstrucción urinaria?",
        answer:
          "La recuperación varía según la complejidad del caso, pero en general se estima entre 4 y 8 semanas para retomar las actividades normales. El urólogo da seguimiento cercano durante todo el proceso de cicatrización.",
      },
    ],
    relatedConditions: ["d-vejiga-neurogenica", "d-estenosis-uretra"],
    lastReviewed: "2026-09-14",
    image: "/servicios/reconstruccion-urinaria.jpg",
    seo: {
      title: "Reconstrucción Urinaria en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Cirugía de reconstrucción urinaria con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["reconstrucción urinaria", "uretroplastia", "urólogo Tuxtla Gutiérrez", "estenosis de uretra"],
    },
  },
  {
    id: "s-prostatectomia-radical",
    slug: "prostatectomia-radical",
    name: "Prostatectomía radical",
    description:
      "Cirugía oncológica que extirpa completamente la próstata como tratamiento principal del cáncer de próstata.",
    longDescription:
      "La prostatectomía radical es la extirpación quirúrgica completa de la glándula prostática, indicada como tratamiento principal del cáncer de próstata confinado al órgano. El procedimiento busca eliminar el tumor por completo, preservando en la medida de lo posible las estructuras cercanas relacionadas con la continencia urinaria y la función sexual.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "2 a 3 horas",
    recoveryTime: "Reincorporación a actividades normales en 4 a 6 semanas",
    isPainful: true,
    benefits: [
      "Elimina completamente el tumor confinado a la próstata",
      "Es un tratamiento curativo en casos diagnosticados a tiempo",
      "Permite seguimiento oncológico objetivo tras la cirugía",
    ],
    postOpRecommendations: [
      "Uso temporal de sonda urinaria durante la cicatrización inicial",
      "Ejercicios de piso pélvico para acelerar la recuperación del control urinario",
      "Acudir a las revisiones oncológicas y urológicas programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía oncológica hospitalaria",
      Duración: "2 a 3 horas",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Cuándo se recomienda una prostatectomía radical?",
        answer:
          "Se recomienda cuando el cáncer de próstata está confinado a la glándula y se busca un tratamiento con intención curativa. La decisión se toma tras una valoración oncológica y urológica completa que considera el riesgo del tumor y el estado de salud general del paciente.",
      },
      {
        question: "¿La prostatectomía radical afecta la continencia urinaria o la función sexual?",
        answer:
          "Puede haber incontinencia urinaria temporal y cambios en la función sexual tras la cirugía, que en muchos casos mejoran de forma gradual con el tiempo y ejercicios de piso pélvico. El urólogo explica el pronóstico específico según cada caso antes de la cirugía.",
      },
    ],
    relatedConditions: ["d-cancer-prostata"],
    lastReviewed: "2026-09-14",
    image: "/servicios/prostatectomia-radical.jpg",
    seo: {
      title: "Prostatectomía Radical en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Cirugía de prostatectomía radical con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["prostatectomía radical", "cirugía de próstata", "cáncer de próstata", "urólogo oncólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-nefrectomia",
    slug: "nefrectomia",
    name: "Nefrectomía",
    description:
      "Cirugía oncológica que extirpa parcial o totalmente un riñón afectado por cáncer renal.",
    longDescription:
      "La nefrectomía es la extirpación quirúrgica de un riñón, ya sea de forma parcial (conservando el tejido renal sano) o total, indicada principalmente en el tratamiento del cáncer renal. La elección entre nefrectomía parcial o total depende del tamaño, la ubicación del tumor y la función del riñón contralateral.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "2 a 4 horas",
    recoveryTime: "Reincorporación a actividades normales en 4 a 6 semanas",
    isPainful: true,
    benefits: [
      "Elimina el tumor renal de forma definitiva",
      "La nefrectomía parcial conserva tejido renal sano cuando es posible",
      "Permite seguimiento oncológico objetivo tras la cirugía",
    ],
    postOpRecommendations: [
      "Reposo relativo durante las primeras semanas tras la cirugía",
      "Seguimiento de la función renal mediante estudios de laboratorio",
      "Acudir a las revisiones oncológicas y urológicas programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía oncológica hospitalaria",
      Duración: "2 a 4 horas",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Se puede vivir normalmente con un solo riñón después de una nefrectomía?",
        answer:
          "Sí. La mayoría de las personas llevan una vida normal con un solo riñón funcional, siempre que se mantenga bajo seguimiento médico periódico de la función renal. El urólogo da indicaciones específicas de cuidado tras la cirugía.",
      },
      {
        question: "¿Cuál es la diferencia entre nefrectomía parcial y total?",
        answer:
          "La nefrectomía parcial extirpa solo la parte del riñón donde está el tumor, conservando tejido renal sano, mientras que la nefrectomía total extirpa el riñón completo. La elección depende del tamaño y la ubicación del tumor, evaluados por el urólogo oncólogo.",
      },
    ],
    relatedConditions: ["d-cancer-rinon"],
    lastReviewed: "2026-09-14",
    image: "/servicios/nefrectomia.jpg",
    seo: {
      title: "Nefrectomía en Tuxtla Gutiérrez | Dr. Gustavo Álvarez",
      description:
        "Cirugía de nefrectomía por cáncer renal con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["nefrectomía", "cáncer de riñón", "cirugía renal", "urólogo oncólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "s-cistectomia-radical",
    slug: "cistectomia-radical",
    name: "Cistectomía radical",
    description:
      "Cirugía oncológica que extirpa completamente la vejiga como tratamiento del cáncer de vejiga que invade la pared muscular.",
    longDescription:
      "La cistectomía radical es la extirpación quirúrgica completa de la vejiga urinaria, indicada en el cáncer de vejiga que invade la pared muscular del órgano. Tras la extirpación, se realiza una reconstrucción del sistema urinario para permitir la salida de la orina, cuyo tipo se decide junto con el paciente antes de la cirugía.",
    type: "hospitalario",
    anesthesiaType: "Anestesia general",
    duration: "3 a 5 horas",
    recoveryTime: "Reincorporación gradual a actividades normales en 6 a 8 semanas",
    isPainful: true,
    benefits: [
      "Elimina completamente el tumor cuando invade la pared de la vejiga",
      "Es un tratamiento con intención curativa en casos localizados",
      "Se acompaña de una reconstrucción urinaria planeada individualmente",
    ],
    postOpRecommendations: [
      "Cuidados específicos según el tipo de derivación urinaria realizada",
      "Reposo relativo durante las primeras semanas tras la cirugía",
      "Acudir a las revisiones oncológicas y urológicas programadas",
    ],
    technicalSpecs: {
      Tipo: "Cirugía oncológica hospitalaria",
      Duración: "3 a 5 horas",
      Doloroso: "Sí, con manejo del dolor postoperatorio",
    },
    faqs: [
      {
        question: "¿Cómo se orina después de una cistectomía radical?",
        answer:
          "Existen distintas formas de reconstrucción urinaria tras extirpar la vejiga, que el urólogo oncólogo explica y decide junto con el paciente antes de la cirugía según su caso específico y preferencias personales.",
      },
      {
        question: "¿Cuándo se necesita una cistectomía radical en lugar de un tratamiento más conservador?",
        answer:
          "Se indica cuando el cáncer de vejiga invade la pared muscular del órgano, etapa en la que los tratamientos endoscópicos ya no son suficientes para controlar la enfermedad. La decisión se basa en un estudio completo de la extensión del tumor.",
      },
    ],
    relatedConditions: ["d-cancer-vejiga"],
    lastReviewed: "2026-09-14",
    image: "/servicios/cistectomia-radical.jpg",
    seo: {
      title: "Cistectomía Radical en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Cirugía de cistectomía radical por cáncer de vejiga con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["cistectomía radical", "cáncer de vejiga", "cirugía de vejiga", "urólogo oncólogo Tuxtla Gutiérrez"],
    },
  },
];
