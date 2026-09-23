import type { Symptom } from "@/types/schema";

// Los 10 síntomas del intake real del doctor ya cubren el mínimo de 10
// (AGENTS.md §3) — aquí se completan los 8 que faltaban por redactar.
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
    image: "/sintomas/miccion.jpg",
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
  {
    id: "sy-disfuncion-erectil",
    slug: "dificultad-para-lograr-una-ereccion",
    name: "Dificultad o imposibilidad de lograr una erección",
    colloquialNames: ["Disfunción eréctil", "Impotencia"],
    description:
      "La dificultad o imposibilidad de lograr o mantener una erección suficiente para una relación sexual satisfactoria se conoce como disfunción eréctil. Es un síntoma frecuente que puede tener causas físicas, vasculares, hormonales o psicológicas, y en muchos casos tiene tratamiento efectivo.",
    causes: [
      "Enfermedades que afectan la circulación, como la diabetes o la hipertensión",
      "Cirugías previas de próstata o pélvicas",
      "Alteraciones hormonales",
      "Factores psicológicos como estrés o ansiedad",
      "Tabaquismo",
    ],
    alarmSigns: [
      "Si la dificultad para lograr una erección aparece junto con dolor en el pecho o falta de aire durante el esfuerzo físico o la actividad sexual, acude a urgencias de inmediato, ya que puede estar relacionado con un problema cardiovascular.",
    ],
    whyConsult:
      "La disfunción eréctil puede ser el primer signo visible de un problema circulatorio, hormonal o vascular de fondo, además de afectar la calidad de vida y las relaciones de pareja. Un urólogo puede identificar la causa y ofrecer opciones de tratamiento efectivas.",
    faqs: [
      {
        question: "¿La disfunción eréctil tiene tratamiento?",
        answer:
          "Sí. El tratamiento depende de la causa identificada y puede incluir manejo de enfermedades de fondo como la diabetes o la hipertensión, terapia dirigida, o en casos que no responden a otras opciones, la colocación de una prótesis de pene.",
      },
      {
        question: "¿La disfunción eréctil siempre es un problema psicológico?",
        answer:
          "No. Aunque los factores psicológicos pueden influir, la disfunción eréctil frecuentemente tiene una causa física, vascular u hormonal. Un urólogo evalúa de forma integral para identificar la causa real antes de definir el tratamiento.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-09-14",
    image: "/sintomas/dificultad_eeccion.jpg",
    seo: {
      title: "Dificultad para Lograr una Erección | Dr. Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa las causas de la disfunción eréctil y sus opciones de tratamiento.",
      keywords: ["disfunción eréctil", "dificultad para tener una erección", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-enrojecimiento-prepucio",
    slug: "enrojecimiento-del-prepucio",
    name: "Enrojecimiento del prepucio o del pene",
    colloquialNames: ["Piel del pene irritada", "Glande enrojecido"],
    description:
      "El enrojecimiento del prepucio o del pene es una señal de irritación o inflamación de la piel de esta zona, con frecuencia acompañada de comezón, ardor o molestia. Puede deberse a una infección, una reacción alérgica o una mala higiene local.",
    causes: [
      "Infecciones de transmisión sexual",
      "Infección por hongos (candidiasis)",
      "Reacción alérgica a jabones o productos de higiene",
      "Higiene local inadecuada",
      "Fricción o irritación mecánica",
    ],
    alarmSigns: [
      "Si el enrojecimiento se acompaña de fiebre, hinchazón importante o dolor intenso que impide orinar, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "El enrojecimiento persistente del prepucio o el pene puede ser señal de una infección de transmisión sexual u otra condición que requiere tratamiento específico. Un urólogo puede identificar la causa exacta mediante valoración clínica y estudios dirigidos.",
    faqs: [
      {
        question: "¿El enrojecimiento del pene siempre es una infección de transmisión sexual?",
        answer:
          "No siempre. Puede deberse también a infecciones por hongos, reacciones alérgicas a productos de higiene o mala higiene local. Solo una valoración urológica permite identificar la causa exacta y descartar una infección de transmisión sexual.",
      },
      {
        question: "¿Qué debo hacer si tengo el prepucio enrojecido y con comezón?",
        answer:
          "Se recomienda mantener una buena higiene local, evitar productos irritantes y acudir a valoración con un urólogo si el enrojecimiento no mejora en pocos días o se acompaña de secreción, dolor o lesiones visibles.",
      },
    ],
    relatedConditions: ["d-ets-its"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/enrojecimiento_prepusio.jpg",
    seo: {
      title: "Enrojecimiento del Prepucio o el Pene | Dr. Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa las causas del enrojecimiento del prepucio o el pene.",
      keywords: ["enrojecimiento del prepucio", "irritación del pene", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-erupciones-pene",
    slug: "erupciones-en-la-punta-del-pene",
    name: "Erupciones en la punta del pene",
    colloquialNames: ["Ronchas en el pene", "Lesiones en el glande"],
    description:
      "Las erupciones en la punta del pene son lesiones visibles en la piel del glande, que pueden presentarse como ronchas, ampollas, úlceras o manchas. Con frecuencia están relacionadas con infecciones de transmisión sexual, aunque también pueden deberse a irritación o reacciones alérgicas.",
    causes: [
      "Infecciones de transmisión sexual",
      "Reacción alérgica a productos de higiene o látex",
      "Infección por hongos",
      "Irritación mecánica por fricción",
    ],
    alarmSigns: [
      "Si las erupciones se acompañan de fiebre, dolor intenso o se extienden rápidamente, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "Las erupciones en la punta del pene con frecuencia son un signo visible de una infección de transmisión sexual que requiere tratamiento específico y oportuno. Un urólogo puede identificar la causa exacta mediante valoración clínica y estudios dirigidos.",
    faqs: [
      {
        question: "¿Las erupciones en el pene son contagiosas?",
        answer:
          "Depende de la causa. Muchas erupciones en el pene están relacionadas con infecciones de transmisión sexual, que sí pueden contagiarse a la pareja sexual. Por eso es importante una valoración urológica oportuna y evitar el contacto sexual hasta tener un diagnóstico.",
      },
      {
        question: "¿Cuándo debo preocuparme por una erupción en el pene?",
        answer:
          "Debes acudir a valoración urológica si la erupción no mejora en pocos días, se acompaña de dolor, secreción o fiebre, o si tuviste una relación sexual sin protección recientemente.",
      },
    ],
    relatedConditions: ["d-ets-its"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/erupcion_pene.jpg",
    seo: {
      title: "Erupciones en la Punta del Pene | Dr. Gustavo Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa erupciones y lesiones en la punta del pene.",
      keywords: ["erupciones en el pene", "lesiones en el glande", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-secrecion-fetida",
    slug: "secrecion-con-olor-fetido",
    name: "Secreción con olor fétido",
    colloquialNames: ["Flujo con mal olor", "Secreción maloliente del pene"],
    description:
      "La secreción con olor fétido en el pene es la salida de un fluido con mal olor desde la uretra o desde debajo del prepucio. Es un signo frecuente de infección y, con frecuencia, se acompaña de otros síntomas como enrojecimiento, ardor al orinar o dolor local.",
    causes: [
      "Infecciones de transmisión sexual",
      "Infección por hongos o bacterias bajo el prepucio (balanitis)",
      "Higiene local inadecuada",
    ],
    alarmSigns: [
      "Si la secreción con mal olor se acompaña de fiebre, dolor intenso o hinchazón importante del pene, acude a urgencias de inmediato.",
    ],
    whyConsult:
      "La secreción con olor fétido casi siempre indica un proceso infeccioso que requiere tratamiento específico. Un urólogo puede identificar el origen exacto mediante valoración clínica y estudios de laboratorio dirigidos.",
    faqs: [
      {
        question: "¿Qué significa tener secreción con mal olor en el pene?",
        answer:
          "Generalmente indica un proceso infeccioso, ya sea una infección de transmisión sexual o una infección local bajo el prepucio (balanitis). Un urólogo debe evaluar el caso con estudios específicos para identificar el origen exacto y dar tratamiento oportuno.",
      },
      {
        question: "¿La secreción con mal olor se quita solo con más higiene?",
        answer:
          "La higiene ayuda, pero si la secreción persiste, tiene mal olor marcado o se acompaña de otros síntomas, es señal de una infección que requiere tratamiento específico indicado por un urólogo, no solo medidas de higiene.",
      },
    ],
    relatedConditions: ["d-ets-its"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/secrecion_olor.jpg",
    seo: {
      title: "Secreción con Olor Fétido en el Pene | Dr. Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa la secreción con mal olor en el pene y sus causas.",
      keywords: ["secreción con mal olor", "flujo en el pene", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-disuria",
    slug: "dolor-o-ardor-al-orinar",
    name: "Dolor o sensación de ardor al orinar",
    colloquialNames: ["Ardor al orinar", "Disuria"],
    description:
      "El dolor o ardor al orinar, conocido médicamente como disuria, es una sensación molesta o de quemazón durante la micción. Es uno de los síntomas urinarios más frecuentes y suele indicar un proceso infeccioso o inflamatorio en las vías urinarias.",
    causes: [
      "Infección de vías urinarias",
      "Infecciones de transmisión sexual",
      "Estenosis de uretra",
      "Irritación por productos de higiene",
    ],
    alarmSigns: [
      "Si el ardor al orinar se acompaña de fiebre, dolor en la espalda baja o sangre en la orina, acude a urgencias de inmediato.",
      "Si no puedes orinar en absoluto junto con el dolor, acude a urgencias sin demora.",
    ],
    whyConsult:
      "El dolor o ardor al orinar casi siempre tiene una causa tratable, pero identificarla a tiempo evita que una infección se complique o que un estrechamiento de la uretra progrese sin diagnóstico. Un urólogo puede definir la causa exacta con estudios dirigidos.",
    faqs: [
      {
        question: "¿El ardor al orinar siempre es una infección urinaria?",
        answer:
          "Es la causa más frecuente, pero no la única. También puede deberse a infecciones de transmisión sexual, irritación local o, en casos de evolución prolongada, a un estrechamiento de la uretra (estenosis uretral). Un urólogo debe evaluar la causa específica.",
      },
      {
        question: "¿Cuándo debo consultar por dolor al orinar?",
        answer:
          "Debes consultar si el ardor persiste más de uno o dos días, se acompaña de fiebre, dolor en la espalda baja, sangre en la orina, o si tuviste una relación sexual sin protección recientemente.",
      },
    ],
    relatedConditions: ["d-ets-its", "d-estenosis-uretra"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/dolor_orinar.jpg",
    seo: {
      title: "Dolor o Ardor al Orinar | Dr. Gustavo Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa el dolor o ardor al orinar y sus causas.",
      keywords: ["ardor al orinar", "dolor al orinar", "disuria", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "sy-retencion-urinaria",
    slug: "necesidad-de-orinar-sin-poder-hacerlo",
    name: "Necesidad de orinar pero imposibilidad de hacerlo",
    colloquialNames: ["Retención urinaria", "No poder orinar"],
    description:
      "La retención urinaria es la sensación de necesidad urgente de orinar combinada con la imposibilidad total o parcial de hacerlo. Es una situación que puede presentarse de forma súbita o progresiva, y en su forma completa constituye una urgencia médica.",
    causes: [
      "Crecimiento prostático",
      "Estenosis de uretra",
      "Vejiga neurogénica",
      "Cáncer de próstata en etapas avanzadas",
    ],
    alarmSigns: [
      "Si no puedes orinar en absoluto y sientes dolor o distensión importante en la parte baja del abdomen, acude a urgencias de inmediato: es una urgencia urológica.",
    ],
    whyConsult:
      "La retención urinaria completa es una urgencia médica que requiere atención inmediata para evacuar la vejiga y evitar daño renal. Incluso cuando es parcial o intermitente, requiere valoración urológica para identificar y tratar la causa de fondo.",
    faqs: [
      {
        question: "¿Qué debo hacer si no puedo orinar en absoluto?",
        answer:
          "La imposibilidad total para orinar es una urgencia médica y debes acudir de inmediato a un servicio de urgencias, donde se colocará una sonda para vaciar la vejiga mientras se identifica la causa de fondo con un urólogo.",
      },
      {
        question: "¿La retención urinaria siempre es por crecimiento de la próstata?",
        answer:
          "Es una de las causas más frecuentes en hombres, pero no la única. También puede deberse a estenosis de uretra, vejiga neurogénica o, en casos avanzados, a cáncer de próstata. Un urólogo debe identificar la causa específica con estudios dirigidos.",
      },
    ],
    relatedConditions: ["d-vejiga-neurogenica", "d-estenosis-uretra", "d-cancer-prostata"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/orinar_imposibilidad.jpg",
    seo: {
      title: "No Poder Orinar: Retención Urinaria | Dr. Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa la retención urinaria y sus causas.",
      keywords: ["retención urinaria", "no puedo orinar", "urólogo Tuxtla Gutiérrez", "urgencia urológica"],
    },
  },
  {
    id: "sy-hematuria",
    slug: "sangre-en-la-orina",
    name: "Sangre en la orina",
    colloquialNames: ["Hematuria", "Orina con sangre"],
    description:
      "La sangre en la orina, conocida médicamente como hematuria, es la presencia de sangre visible o detectada en laboratorio en la orina. Puede ser indolora o acompañarse de otros síntomas, y siempre requiere una evaluación urológica, incluso si aparece una sola vez y desaparece por sí sola.",
    causes: [
      "Infección de vías urinarias",
      "Cáncer de vejiga",
      "Cáncer de próstata",
      "Cáncer de riñón",
      "Cálculos en el riñón o la vejiga",
    ],
    alarmSigns: [
      "Si la sangre en la orina se acompaña de dolor intenso, fiebre o imposibilidad para orinar, acude a urgencias de inmediato.",
      "Si notas coágulos de sangre en la orina o sangrado abundante, acude a urgencias sin demora.",
    ],
    whyConsult:
      "La sangre en la orina nunca debe ignorarse, incluso cuando no duele y desaparece por sí sola, ya que puede ser el primer signo de un cáncer urológico en etapa temprana, cuando el tratamiento tiene mejores resultados. Un urólogo debe evaluar siempre su causa.",
    faqs: [
      {
        question: "¿La sangre en la orina siempre es grave?",
        answer:
          "No siempre indica cáncer, pero sí requiere evaluación urológica en todos los casos, ya que puede tratarse desde una infección urinaria hasta un cáncer de vejiga, próstata o riñón. Ignorarla, incluso si desaparece sola, retrasa un diagnóstico que puede ser importante.",
      },
      {
        question: "¿Qué estudios se hacen para investigar la sangre en la orina?",
        answer:
          "El urólogo suele solicitar un examen general de orina, estudios de imagen del sistema urinario y, en algunos casos, una cistoscopia para observar directamente el interior de la vejiga y determinar el origen exacto del sangrado.",
      },
    ],
    relatedConditions: ["d-cancer-prostata", "d-cancer-vejiga", "d-cancer-rinon"],
    lastReviewed: "2026-09-14",
    image: "/sintomas/sangre_orina.jpg",
    seo: {
      title: "Sangre en la Orina (Hematuria) | Dr. Gustavo Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez, evalúa la sangre en la orina y sus causas.",
      keywords: ["sangre en la orina", "hematuria", "urólogo oncólogo Tuxtla Gutiérrez", "cáncer de vejiga"],
    },
  },
  {
    id: "sy-ivu-recurrente",
    slug: "infecciones-urinarias-recurrentes",
    name: "Infecciones urinarias recurrentes",
    colloquialNames: ["Infecciones de orina seguidas", "Cistitis de repetición"],
    description:
      "Las infecciones urinarias recurrentes son episodios repetidos de infección en las vías urinarias, generalmente definidos como más de dos episodios en seis meses o tres en un año. Requieren una evaluación urológica para identificar si existe una causa estructural o funcional de fondo.",
    causes: [
      "Anomalías estructurales del sistema urinario",
      "Vaciamiento incompleto de la vejiga",
      "Cálculos urinarios",
      "Higiene local inadecuada",
      "Sistema inmunológico debilitado",
    ],
    alarmSigns: [
      "Si una infección urinaria se acompaña de fiebre alta, dolor intenso en la espalda baja o confusión, acude a urgencias de inmediato, ya que puede indicar que la infección alcanzó los riñones.",
    ],
    whyConsult:
      "Las infecciones urinarias recurrentes pueden ser señal de una causa estructural o funcional de fondo que no se resuelve solo con tratar cada episodio por separado. Un urólogo puede realizar estudios dirigidos para identificar y corregir esa causa.",
    faqs: [
      {
        question: "¿Cuántas infecciones urinarias al año se consideran recurrentes?",
        answer:
          "Generalmente se consideran recurrentes cuando ocurren más de dos episodios en seis meses o tres episodios en un año. En estos casos es importante una valoración urológica para descartar una causa estructural o funcional de fondo.",
      },
      {
        question: "¿Las infecciones urinarias recurrentes se pueden prevenir?",
        answer:
          "En muchos casos sí, una vez identificada la causa de fondo mediante estudios urológicos. Las medidas de prevención dependen del origen específico, por lo que la evaluación individualizada es clave antes de indicar cualquier estrategia preventiva.",
      },
    ],
    relatedConditions: [],
    lastReviewed: "2026-09-14",
    image: "/sintomas/infecciones_recurrentes.jpg",
    seo: {
      title: "Infecciones Urinarias Recurrentes | Dr. Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa las infecciones urinarias recurrentes y sus causas.",
      keywords: ["infecciones urinarias recurrentes", "cistitis de repetición", "urólogo Tuxtla Gutiérrez"],
    },
  },
];
