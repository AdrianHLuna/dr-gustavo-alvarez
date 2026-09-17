import type { MedicalCondition } from "@/types/schema";

// 6 enfermedades vienen del intake real del doctor. Para llegar a las 10
// requeridas (AGENTS.md §3) se completaron 4 más de contenido clínico real
// y verificable, priorizando la Alta Especialidad más importante del doctor
// (Urología Oncológica): cáncer de próstata, vejiga, riñón y testículo.
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
  {
    id: "d-pene-escondido",
    slug: "pene-escondido",
    name: "Pene escondido",
    technicalName: "Pene oculto o enterrado",
    colloquialNames: ["Pene enterrado", "Pene retráctil"],
    description:
      "El pene escondido, también llamado pene enterrado, es una condición en la que el pene queda parcialmente oculto bajo la piel del abdomen, el pubis o el escroto, dando la apariencia de un tamaño menor al real. Puede presentarse desde la infancia o desarrollarse en la edad adulta, con frecuencia asociado al sobrepeso.",
    symptoms: [
      "Pene con apariencia visualmente más pequeña de lo habitual",
      "Piel excedente alrededor de la base del pene",
      "Dificultad para la higiene local",
      "Molestia o irritación de la piel circundante",
    ],
    causes: [
      "Acumulación de tejido graso en el pubis (panículo adiposo)",
      "Piel del pene con elasticidad o fijación insuficiente",
      "Cicatrización anómala tras una circuncisión previa",
      "Factores congénitos presentes desde el nacimiento",
    ],
    riskFactors: ["Obesidad", "Circuncisión previa con complicaciones", "Antecedentes congénitos"],
    complications: [
      "Dificultad para la higiene y aumento de infecciones locales",
      "Dificultad para tener relaciones sexuales satisfactorias",
      "Afectación psicológica y de autoestima",
    ],
    treatments: [
      "Manejo del peso corporal cuando el sobrepeso es la causa principal",
      "Cirugía correctiva de reconstrucción del pene visible",
      "Valoración urológica individualizada según la causa",
    ],
    faqs: [
      {
        question: "¿Qué es el pene escondido o enterrado?",
        answer:
          "El pene escondido es una condición en la que el pene queda oculto bajo la piel del pubis, el abdomen o el escroto, lo que da la apariencia de un tamaño menor al real. Puede deberse a acumulación de grasa local, características de la piel o cicatrización tras una circuncisión.",
      },
      {
        question: "¿El pene escondido tiene tratamiento?",
        answer:
          "Sí. El tratamiento depende de la causa: en algunos casos basta con reducir el tejido graso del pubis, y en otros se requiere una cirugía reconstructiva que libere y exponga el pene. Un urólogo debe evaluar cada caso de forma individual.",
      },
      {
        question: "¿El pene escondido afecta la función urinaria o sexual?",
        answer:
          "Puede dificultar la higiene, favorecer irritaciones de la piel y afectar la vida sexual y la autoestima, aunque no siempre altera la función urinaria. Por eso conviene una valoración urológica para definir si requiere corrección quirúrgica.",
      },
    ],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/pene-escondido.jpg",
    seo: {
      title: "Pene Escondido: Causas y Tratamiento | Dr. Álvarez",
      description:
        "El Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, evalúa y trata el pene escondido o enterrado en adultos.",
      keywords: ["pene escondido", "pene enterrado", "urólogo Tuxtla Gutiérrez", "cirugía urológica"],
    },
  },
  {
    id: "d-incontinencia-urinaria",
    slug: "incontinencia-urinaria",
    name: "Incontinencia urinaria",
    technicalName: "Incontinencia urinaria",
    colloquialNames: ["Escape de orina", "Pérdida de orina"],
    description:
      "La incontinencia urinaria es la pérdida involuntaria de orina, ya sea al toser, hacer esfuerzo, sentir urgencia repentina o de forma constante. Puede presentarse en distintos grados y afecta tanto a hombres como a mujeres, con causas que van desde debilidad muscular hasta cirugías previas de próstata.",
    symptoms: [
      "Escape de orina al toser, estornudar o hacer esfuerzo",
      "Pérdida de orina asociada a urgencia repentina",
      "Goteo constante o intermitente de orina",
      "Necesidad de usar protección absorbente",
    ],
    causes: [
      "Debilidad del esfínter urinario",
      "Cirugías previas de próstata",
      "Daño neurológico que afecta el control vesical",
      "Debilidad del piso pélvico",
      "Envejecimiento del tejido muscular urinario",
    ],
    riskFactors: [
      "Cirugía prostática previa",
      "Edad avanzada",
      "Enfermedades neurológicas",
      "Radioterapia pélvica previa",
    ],
    complications: [
      "Infecciones urinarias recurrentes por higiene comprometida",
      "Irritación cutánea por contacto prolongado con orina",
      "Aislamiento social y afectación emocional",
    ],
    treatments: [
      "Ejercicios de fortalecimiento del piso pélvico",
      "Colocación de esfínter urinario artificial en casos seleccionados",
      "Colocación de mallas de soporte anti-incontinencia",
      "Estudio urodinámico para definir el mecanismo exacto de la pérdida de orina",
    ],
    faqs: [
      {
        question: "¿Qué causa la incontinencia urinaria en hombres?",
        answer:
          "En hombres, la causa más frecuente es una cirugía previa de próstata que debilita el esfínter urinario. También puede deberse a daño neurológico o debilidad del piso pélvico. Un estudio urodinámico permite identificar el mecanismo exacto antes de definir el tratamiento.",
      },
      {
        question: "¿La incontinencia urinaria se puede corregir?",
        answer:
          "Sí. Dependiendo de la causa y el grado, puede mejorar con ejercicios de piso pélvico o requerir un procedimiento como un esfínter urinario artificial o una malla de soporte. La valoración urológica define cuál es la opción adecuada para cada paciente.",
      },
      {
        question: "¿Es normal tener incontinencia urinaria después de una cirugía de próstata?",
        answer:
          "Cierto grado de incontinencia temporal es frecuente tras una cirugía de próstata y suele mejorar con el tiempo y ejercicios de piso pélvico. Si persiste más de varios meses, un urólogo debe evaluar si se requiere un tratamiento adicional.",
      },
    ],
    relatedServices: ["s-esfinter-urinario-artificial", "s-mallas-anti-incontinencia"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/incontinencia-urinaria.jpg",
    seo: {
      title: "Incontinencia Urinaria en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Tratamiento de incontinencia urinaria con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez, Chiapas.",
      keywords: ["incontinencia urinaria", "escape de orina", "urólogo Tuxtla Gutiérrez", "esfínter urinario"],
    },
  },
  {
    id: "d-vejiga-neurogenica",
    slug: "vejiga-neurogenica",
    name: "Vejiga neurogénica",
    technicalName: "Disfunción vesical neurogénica",
    colloquialNames: ["Vejiga neurológica"],
    description:
      "La vejiga neurogénica es una alteración del funcionamiento de la vejiga causada por daño en los nervios que controlan la micción. Puede provocar tanto dificultad para vaciar la vejiga como pérdida involuntaria de orina, dependiendo del tipo de daño neurológico presente.",
    symptoms: [
      "Dificultad para iniciar o completar la micción",
      "Pérdida involuntaria de orina",
      "Sensación reducida o ausente de necesidad de orinar",
      "Infecciones urinarias repetidas",
    ],
    causes: [
      "Lesión de la médula espinal",
      "Enfermedades neurológicas como esclerosis múltiple o enfermedad de Parkinson",
      "Diabetes de larga evolución no controlada",
      "Cirugías pélvicas extensas que afectan los nervios vesicales",
    ],
    riskFactors: [
      "Antecedente de lesión medular",
      "Enfermedad neurológica diagnosticada",
      "Diabetes de larga evolución",
      "Cirugía pélvica u oncológica previa",
    ],
    complications: [
      "Infecciones urinarias recurrentes",
      "Daño renal por retención urinaria prolongada",
      "Incontinencia urinaria",
    ],
    treatments: [
      "Cateterismo intermitente para vaciamiento vesical",
      "Reconstrucción urinaria en casos seleccionados",
      "Colocación de esfínter urinario artificial cuando hay incontinencia asociada",
      "Seguimiento urológico periódico de la función renal",
    ],
    faqs: [
      {
        question: "¿Qué es la vejiga neurogénica?",
        answer:
          "La vejiga neurogénica es una alteración en el funcionamiento de la vejiga causada por daño en los nervios que controlan la micción, ya sea por una lesión medular, una enfermedad neurológica o diabetes de larga evolución. Puede causar dificultad para orinar o pérdida involuntaria de orina.",
      },
      {
        question: "¿La vejiga neurogénica daña los riñones?",
        answer:
          "Si no se trata, la retención urinaria prolongada asociada a la vejiga neurogénica puede elevar la presión dentro del sistema urinario y afectar la función renal con el tiempo. Por eso el seguimiento urológico periódico es importante incluso sin síntomas evidentes.",
      },
      {
        question: "¿La vejiga neurogénica tiene cura?",
        answer:
          "Depende de la causa neurológica de fondo. En muchos casos no se elimina por completo, pero sí se controla de forma efectiva con cateterismo intermitente, cirugía de reconstrucción cuando se requiere, y seguimiento urológico periódico que protege la función renal.",
      },
    ],
    relatedServices: ["s-esfinter-urinario-artificial", "s-reconstruccion-urinaria"],
    relatedSymptoms: ["sy-retencion-urinaria"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/vejiga-neurogenica.jpg",
    seo: {
      title: "Vejiga Neurogénica: Diagnóstico | Dr. Gustavo Álvarez",
      description:
        "Evaluación y manejo de vejiga neurogénica con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez.",
      keywords: ["vejiga neurogénica", "vejiga neurológica", "urólogo Tuxtla Gutiérrez", "retención urinaria"],
    },
  },
  {
    id: "d-ets-its",
    slug: "ets-its",
    name: "Infecciones de transmisión sexual",
    technicalName: "Enfermedades de transmisión sexual (ETS/ITS)",
    colloquialNames: ["ETS", "ITS", "Enfermedades venéreas"],
    description:
      "Las infecciones de transmisión sexual (ITS), también llamadas enfermedades de transmisión sexual (ETS), son infecciones que se transmiten principalmente por contacto sexual. En el hombre pueden afectar el pene, la uretra y los testículos, y con frecuencia se presentan con secreción, ardor al orinar o lesiones visibles.",
    symptoms: [
      "Secreción con olor fétido en el pene",
      "Enrojecimiento del prepucio o del glande",
      "Erupciones o lesiones en la punta del pene",
      "Dolor o ardor al orinar",
    ],
    causes: [
      "Contacto sexual sin protección con una persona infectada",
      "Múltiples parejas sexuales sin uso de preservativo",
      "Falta de tratamiento oportuno de una infección previa",
    ],
    riskFactors: [
      "Relaciones sexuales sin preservativo",
      "Múltiples parejas sexuales",
      "Antecedente de otras infecciones de transmisión sexual",
    ],
    complications: [
      "Estenosis de uretra por inflamación crónica no tratada",
      "Infertilidad en casos avanzados no tratados",
      "Transmisión a la pareja sexual",
    ],
    treatments: [
      "Tratamiento dirigido según el agente causante, indicado tras estudio específico",
      "Abstinencia sexual durante el tratamiento",
      "Valoración y tratamiento de la pareja sexual",
    ],
    faqs: [
      {
        question: "¿Cuáles son los signos de una infección de transmisión sexual en el hombre?",
        answer:
          "Los signos más frecuentes incluyen secreción con olor fétido, enrojecimiento del prepucio o el glande, erupciones o lesiones en la punta del pene, y dolor o ardor al orinar. Ante cualquiera de estos signos es importante acudir con un urólogo para un diagnóstico preciso.",
      },
      {
        question: "¿Cómo se diagnostica una infección de transmisión sexual?",
        answer:
          "El diagnóstico se realiza mediante valoración clínica y estudios de laboratorio específicos según los síntomas presentados. Es importante acudir a consulta apenas aparezcan signos, ya que el diagnóstico oportuno evita complicaciones y la transmisión a la pareja sexual.",
      },
      {
        question: "¿Las infecciones de transmisión sexual se pueden prevenir?",
        answer:
          "Sí. El uso correcto y constante del preservativo en cada relación sexual reduce de forma importante el riesgo de contagio. Limitar el número de parejas sexuales y acudir a revisión ante cualquier síntoma también son medidas preventivas efectivas.",
      },
    ],
    relatedSymptoms: ["sy-enrojecimiento-prepucio", "sy-erupciones-pene", "sy-secrecion-fetida", "sy-disuria"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/ets-its.jpg",
    seo: {
      title: "Infecciones de Transmisión Sexual | Dr. Álvarez",
      description:
        "Diagnóstico y tratamiento de infecciones de transmisión sexual con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez.",
      keywords: ["infecciones de transmisión sexual", "ETS", "ITS", "urólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-estenosis-uretra",
    slug: "estenosis-de-uretra",
    name: "Estenosis de uretra",
    technicalName: "Estenosis uretral",
    colloquialNames: ["Uretra estrecha", "Estrechez de la uretra"],
    description:
      "La estenosis de uretra es un estrechamiento del conducto por el que sale la orina, causado por cicatrización o inflamación crónica. Provoca dificultad progresiva para orinar y, si no se trata, puede llevar a una retención urinaria completa.",
    symptoms: [
      "Chorro urinario débil o dividido",
      "Dificultad para iniciar la micción",
      "Sensación de vaciado incompleto de la vejiga",
      "Infecciones urinarias recurrentes",
    ],
    causes: [
      "Cicatrización tras una infección de transmisión sexual no tratada",
      "Traumatismo previo en la zona pélvica o la uretra",
      "Colocación repetida de sondas urinarias",
      "Cirugías previas de próstata o uretra",
    ],
    riskFactors: [
      "Infecciones de transmisión sexual previas",
      "Uso repetido de sondas urinarias",
      "Traumatismo pélvico previo",
      "Cirugía urológica previa",
    ],
    complications: [
      "Retención urinaria completa",
      "Infecciones urinarias recurrentes",
      "Daño renal en casos avanzados no tratados",
    ],
    treatments: [
      "Dilatación uretral en casos seleccionados",
      "Reconstrucción quirúrgica de la uretra (uretroplastia)",
      "Seguimiento urológico para prevenir recurrencia",
    ],
    faqs: [
      {
        question: "¿Qué es la estenosis de uretra?",
        answer:
          "La estenosis de uretra es un estrechamiento del conducto urinario causado por cicatrización o inflamación crónica, que dificulta progresivamente la salida de la orina. Puede originarse por infecciones no tratadas, traumatismos o cirugías previas.",
      },
      {
        question: "¿La estenosis de uretra se puede corregir de forma definitiva?",
        answer:
          "Sí. Según el grado y la extensión del estrechamiento, puede tratarse con dilatación uretral o con una reconstrucción quirúrgica (uretroplastia), que ofrece resultados más duraderos. Un urólogo debe evaluar cuál opción es la más adecuada para cada caso.",
      },
      {
        question: "¿La estenosis de uretra puede regresar después del tratamiento?",
        answer:
          "Puede recurrir, especialmente tras una dilatación simple, por lo que el seguimiento urológico posterior es importante. La reconstrucción quirúrgica (uretroplastia) suele ofrecer resultados más duraderos frente a la recurrencia que otras opciones menos invasivas.",
      },
    ],
    relatedServices: ["s-reconstruccion-urinaria"],
    relatedSymptoms: ["sy-disuria", "sy-retencion-urinaria"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/estenosis-de-uretra.jpg",
    seo: {
      title: "Estenosis de Uretra en Tuxtla Gutiérrez | Dr. Álvarez",
      description:
        "Diagnóstico y tratamiento de estenosis de uretra con el Dr. Gustavo Álvarez, urólogo en Tuxtla Gutiérrez.",
      keywords: ["estenosis de uretra", "uretra estrecha", "urólogo Tuxtla Gutiérrez", "reconstrucción urinaria"],
    },
  },
  {
    id: "d-cancer-prostata",
    slug: "cancer-de-prostata",
    name: "Cáncer de próstata",
    technicalName: "Adenocarcinoma de próstata",
    colloquialNames: ["Cáncer en la próstata"],
    description:
      "El cáncer de próstata es el crecimiento anormal y descontrolado de células en la glándula prostática. Es uno de los cánceres más frecuentes en hombres a partir de los 50 años y, detectado a tiempo mediante revisión urológica periódica, tiene un pronóstico favorable en la mayoría de los casos.",
    symptoms: [
      "Sangre en la orina",
      "Dificultad para orinar o chorro urinario débil",
      "Necesidad de orinar con más frecuencia, especialmente por la noche",
      "En etapas avanzadas, dolor óseo persistente",
    ],
    causes: [
      "Mutaciones celulares en el tejido prostático relacionadas con la edad",
      "Antecedentes familiares de cáncer de próstata",
      "Factores genéticos hereditarios",
    ],
    riskFactors: [
      "Edad mayor a 50 años",
      "Antecedente familiar de cáncer de próstata",
      "Ascendencia afrodescendiente",
      "Antecedente genético hereditario conocido",
    ],
    complications: [
      "Diseminación del cáncer a huesos u otros órganos si no se trata a tiempo",
      "Incontinencia urinaria tras el tratamiento quirúrgico",
      "Disfunción eréctil tras el tratamiento",
    ],
    treatments: [
      "Prostatectomía radical (extirpación quirúrgica de la próstata)",
      "Radioterapia dirigida a la próstata",
      "Vigilancia activa en casos de muy bajo riesgo, con seguimiento urológico estrecho",
    ],
    faqs: [
      {
        question: "¿Cuáles son los primeros signos del cáncer de próstata?",
        answer:
          "En etapas iniciales, el cáncer de próstata frecuentemente no da síntomas, por lo que la revisión urológica periódica a partir de los 45-50 años es la forma más efectiva de detectarlo a tiempo. Cuando aparecen síntomas, pueden incluir sangre en la orina, dificultad para orinar o micción nocturna frecuente.",
      },
      {
        question: "¿El cáncer de próstata tiene cura?",
        answer:
          "Detectado a tiempo, el cáncer de próstata tiene un pronóstico favorable en la mayoría de los casos. El tratamiento puede incluir cirugía (prostatectomía radical), radioterapia o, en casos de muy bajo riesgo, vigilancia activa con seguimiento urológico estrecho.",
      },
      {
        question: "¿A qué edad debo empezar a revisarme la próstata?",
        answer:
          "En general se recomienda iniciar la revisión urológica de próstata alrededor de los 45 a 50 años, o antes si existe un antecedente familiar directo de cáncer de próstata. Un urólogo puede indicar el esquema de revisión más adecuado según cada caso.",
      },
    ],
    relatedServices: ["s-prostatectomia-radical", "s-radioterapia"],
    relatedSymptoms: ["sy-hematuria", "sy-retencion-urinaria"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/cancer-de-prostata.jpg",
    seo: {
      title: "Cáncer de Próstata: Diagnóstico | Dr. Gustavo Álvarez",
      description:
        "Diagnóstico y tratamiento de cáncer de próstata con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["cáncer de próstata", "prostatectomía", "urólogo oncólogo Tuxtla Gutiérrez", "urología oncológica"],
    },
  },
  {
    id: "d-cancer-vejiga",
    slug: "cancer-de-vejiga",
    name: "Cáncer de vejiga",
    technicalName: "Carcinoma urotelial de vejiga",
    colloquialNames: ["Cáncer en la vejiga"],
    description:
      "El cáncer de vejiga es el crecimiento anormal de células en el revestimiento interno de la vejiga urinaria. Su signo más característico es la presencia de sangre en la orina sin dolor, por lo que cualquier episodio de hematuria debe evaluarse con un urólogo, sin importar si desaparece por sí solo.",
    symptoms: [
      "Sangre en la orina sin dolor asociado",
      "Necesidad urgente o frecuente de orinar",
      "Dolor al orinar en algunos casos",
      "Infecciones urinarias recurrentes",
    ],
    causes: [
      "Exposición prolongada al humo de tabaco",
      "Exposición ocupacional a ciertos químicos industriales",
      "Inflamación crónica de la vejiga no tratada",
    ],
    riskFactors: [
      "Tabaquismo",
      "Exposición laboral a químicos industriales",
      "Edad mayor a 55 años",
      "Antecedente de radioterapia pélvica previa",
    ],
    complications: [
      "Invasión del cáncer a la pared muscular de la vejiga si no se trata a tiempo",
      "Diseminación a otros órganos en etapas avanzadas",
      "Necesidad de extirpación completa de la vejiga en casos avanzados",
    ],
    treatments: [
      "Cistectomía radical (extirpación quirúrgica de la vejiga) en casos que lo requieren",
      "Radioterapia dirigida a la vejiga",
      "Seguimiento endoscópico periódico tras el tratamiento inicial",
    ],
    faqs: [
      {
        question: "¿La sangre en la orina siempre significa cáncer de vejiga?",
        answer:
          "No siempre, pero la sangre en la orina sin dolor es el signo más característico del cáncer de vejiga y nunca debe ignorarse, incluso si aparece una sola vez y luego desaparece. Un urólogo debe evaluar la causa exacta con estudios específicos.",
      },
      {
        question: "¿Cómo se trata el cáncer de vejiga?",
        answer:
          "El tratamiento depende de qué tan avanzado esté el cáncer al momento del diagnóstico. Puede incluir procedimientos endoscópicos, cistectomía radical (extirpación de la vejiga) o radioterapia, siempre con seguimiento urológico estrecho posterior.",
      },
      {
        question: "¿El cáncer de vejiga se puede prevenir?",
        answer:
          "El principal factor de riesgo modificable es el tabaquismo, por lo que dejar de fumar reduce significativamente el riesgo. Evitar la exposición prolongada a químicos industriales sin protección y acudir a valoración ante cualquier episodio de sangre en la orina también ayuda a la detección temprana.",
      },
    ],
    relatedServices: ["s-cistectomia-radical", "s-radioterapia"],
    relatedSymptoms: ["sy-hematuria"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/cancer-de-vejiga.jpg",
    seo: {
      title: "Cáncer de Vejiga: Diagnóstico | Dr. Gustavo Álvarez",
      description:
        "Diagnóstico y tratamiento de cáncer de vejiga con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["cáncer de vejiga", "cistectomía", "sangre en la orina", "urólogo oncólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-cancer-rinon",
    slug: "cancer-de-rinon",
    name: "Cáncer de riñón",
    technicalName: "Carcinoma de células renales",
    colloquialNames: ["Cáncer renal", "Tumor en el riñón"],
    description:
      "El cáncer de riñón es el crecimiento anormal de células en el tejido renal. En muchos casos se detecta de forma incidental en un estudio de imagen realizado por otro motivo, ya que en etapas iniciales suele no causar síntomas evidentes.",
    symptoms: [
      "Sangre en la orina",
      "Dolor persistente en el costado o la espalda baja",
      "Masa o bulto palpable en el abdomen",
      "Cansancio y pérdida de peso no explicada en etapas avanzadas",
    ],
    causes: [
      "Mutaciones celulares en el tejido renal",
      "Tabaquismo",
      "Enfermedad renal crónica avanzada",
      "Factores genéticos hereditarios en un grupo reducido de casos",
    ],
    riskFactors: [
      "Tabaquismo",
      "Obesidad",
      "Hipertensión arterial no controlada",
      "Enfermedad renal crónica",
      "Antecedente familiar de cáncer renal",
    ],
    complications: [
      "Diseminación a otros órganos si no se detecta a tiempo",
      "Pérdida de la función del riñón afectado",
      "Necesidad de extirpación parcial o total del riñón",
    ],
    treatments: [
      "Nefrectomía (extirpación quirúrgica parcial o total del riñón afectado)",
      "Vigilancia activa en tumores pequeños de bajo riesgo",
      "Seguimiento por imagen periódico tras el tratamiento",
    ],
    faqs: [
      {
        question: "¿El cáncer de riñón da síntomas desde el principio?",
        answer:
          "En la mayoría de los casos no. El cáncer de riñón suele detectarse de forma incidental en un estudio de imagen realizado por otro motivo, ya que en etapas iniciales rara vez causa síntomas. Cuando aparecen, pueden incluir sangre en la orina o dolor en el costado.",
      },
      {
        question: "¿Es necesario extirpar todo el riñón en el cáncer renal?",
        answer:
          "No siempre. Dependiendo del tamaño y la ubicación del tumor, puede realizarse una nefrectomía parcial que conserva parte del riñón sano, o una nefrectomía total cuando el tumor es más extenso. Un urólogo oncólogo define la mejor opción según cada caso.",
      },
      {
        question: "¿Se puede vivir con normalidad después de un cáncer de riñón?",
        answer:
          "Sí, especialmente cuando se detecta y trata en etapas tempranas. La mayoría de las personas llevan una vida normal con el riñón restante o con la porción conservada, siempre bajo seguimiento médico periódico de la función renal.",
      },
    ],
    relatedServices: ["s-nefrectomia"],
    relatedSymptoms: ["sy-hematuria"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/cancer-de-rinon.jpg",
    seo: {
      title: "Cáncer de Riñón: Diagnóstico | Dr. Gustavo Álvarez",
      description:
        "Diagnóstico y tratamiento de cáncer de riñón con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["cáncer de riñón", "cáncer renal", "nefrectomía", "urólogo oncólogo Tuxtla Gutiérrez"],
    },
  },
  {
    id: "d-cancer-testicular",
    slug: "cancer-testicular",
    name: "Cáncer testicular",
    technicalName: "Cáncer de testículo",
    colloquialNames: ["Cáncer en el testículo"],
    description:
      "El cáncer testicular es el crecimiento anormal de células en uno o ambos testículos. Es uno de los cánceres más frecuentes en hombres jóvenes de entre 15 y 40 años y, detectado a tiempo mediante autoexploración y valoración urológica, tiene una de las tasas de curación más altas entre todos los tipos de cáncer.",
    symptoms: [
      "Masa o bulto indoloro en el testículo",
      "Aumento de tamaño o cambio en la consistencia del testículo",
      "Sensación de pesadez en el escroto",
      "Dolor testicular ocasional, aunque no siempre está presente",
    ],
    causes: [
      "Antecedente de testículo no descendido en la infancia",
      "Factores genéticos hereditarios",
      "Antecedente familiar de cáncer testicular",
    ],
    riskFactors: [
      "Antecedente de testículo no descendido",
      "Antecedente familiar de cáncer testicular",
      "Edad entre 15 y 40 años",
    ],
    complications: [
      "Diseminación a ganglios linfáticos u otros órganos si no se detecta a tiempo",
      "Necesidad de extirpación quirúrgica del testículo afectado",
      "Impacto psicológico y en la fertilidad",
    ],
    treatments: [
      "Extirpación quirúrgica del testículo afectado (orquiectomía)",
      "Colocación de prótesis testicular por motivos estéticos tras la cirugía",
      "Seguimiento oncológico posterior según el tipo de tumor",
    ],
    faqs: [
      {
        question: "¿Cómo se detecta el cáncer testicular a tiempo?",
        answer:
          "La autoexploración testicular mensual permite detectar cambios como masas, bultos o aumento de tamaño de forma temprana. Ante cualquier hallazgo anormal, un urólogo debe evaluarlo de inmediato, ya que el diagnóstico oportuno mejora enormemente el pronóstico.",
      },
      {
        question: "¿Extirpar un testículo afecta la fertilidad o la vida sexual?",
        answer:
          "Con un solo testículo sano, la mayoría de los hombres mantienen niveles hormonales y fertilidad normales. Además, es posible colocar una prótesis testicular por motivos estéticos tras la cirugía. Un urólogo puede explicar el manejo específico según cada caso.",
      },
      {
        question: "¿El cáncer testicular es curable?",
        answer:
          "El cáncer testicular tiene una de las tasas de curación más altas entre todos los tipos de cáncer, especialmente cuando se detecta en etapas tempranas mediante autoexploración y valoración urológica oportuna.",
      },
    ],
    relatedServices: ["s-protesis-testicular"],
    lastReviewed: "2026-09-14",
    image: "/enfermedades/cancer-testicular.jpg",
    seo: {
      title: "Cáncer Testicular: Diagnóstico | Dr. Gustavo Álvarez",
      description:
        "Diagnóstico y tratamiento de cáncer testicular con el Dr. Gustavo Álvarez, urólogo oncólogo en Tuxtla Gutiérrez.",
      keywords: ["cáncer testicular", "cáncer de testículo", "urólogo oncólogo Tuxtla Gutiérrez", "prótesis testicular"],
    },
  },
];
