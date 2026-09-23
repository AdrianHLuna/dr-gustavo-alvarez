import type { DoctorProfile } from "@/types/schema";

// Datos reales del intake del doctor (2026-09-14). Campos marcados PENDIENTE
// en los comentarios no fueron confirmados por el doctor — nunca se inventan
// (correo, folio COFEPRIS, ficha de Google Business Profile canónica,
// Facebook —solo se dio el nombre de la página, no la URL—, precio de
// consulta subsecuente, aseguradoras específicas, foto real).
export const doctor: DoctorProfile = {
  name: "Gustavo Álvarez Velasco",
  title: "Dr.",
  specialty: "Cirugía Urológica",
  specialistTitle: "Urólogo",
  subspecialty: "Urología Oncológica",
  cedula: "4363415",
  cedulaInstitucion: "UNACH",
  cedulaEspecialidad: "6820234",
  cedulaEspecialidadInstitucion: "UNAM",
  // Sin folio COFEPRIS confirmado — PENDIENTE, no se fabrica.
  phone: "+529616139717",
  whatsapp: "+529616139717",
  emergencyPhone: "+529616139717",
  // PENDIENTE: el doctor no proporcionó correo de contacto. Placeholder
  // funcional del dominio del sitio hasta que se confirme el real.
  email: "contacto@dr-gustavo-alvarez.com",
  address: "Av. Faustino Miranda esq. Calle Álamos, Fracc. Parque Madero",
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  // PENDIENTE: no se dio la URL canónica de la ficha de Google Business
  // Profile ("Urólogo Doctor Gustavo Alvarez Velasco | Urólogo en Tuxtla
  // Gutiérrez"). Se usa una búsqueda funcional por dirección mientras tanto.
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Policl%C3%ADnica+de+Especialidades+en+Chiapas+Av.+Faustino+Miranda+esq.+Calle+%C3%81lamos+Fracc.+Parque+Madero+Tuxtla+Guti%C3%A9rrez+Chiapas",
  // Precio de "primera vez" confirmado por el doctor. La consulta subsecuente
  // no fue proporcionada — PENDIENTE, se muestra así en la página de precio.
  consultationPrice: 1000,
  paymentMethods: ["Efectivo", "Transferencia", "Tarjeta de débito", "Tarjeta de crédito"],
  // PENDIENTE: el doctor confirmó que acepta seguros pero pidió confirmar
  // el tipo de cobro antes de nombrar aseguradoras específicas.
  insurances: ["Acepta seguro de gastos médicos mayores (aseguradoras y tipo de cobro por confirmar)"],
  schedule: "Lunes a viernes de 8:00 a 19:00, sábados de 10:00 a 14:00",
  openingHours: ["Mo-Fr 08:00-19:00", "Sa 10:00-14:00"],
  acceptingNewPatients: true,
  photo: "/images/hero.jpeg",
  aboutPhoto: "/images/aboutme.jpeg",
  bio: "El Dr. Gustavo Álvarez Velasco es cirujano urólogo con Alta Especialidad en Urología Oncológica, formada en el Instituto Nacional de Cancerología. Con más de 15 años de experiencia, ha atendido a más de 5,000 pacientes y realizado más de 3,500 procedimientos y cirugías urológicas en su consultorio de Tuxtla Gutiérrez, Chiapas. Su práctica está enfocada en el diagnóstico preciso y el tratamiento integral de los padecimientos del sistema urinario y reproductivo masculino, desde la consulta general hasta la cirugía oncológica.",
  philosophy:
    "Mi compromiso es ofrecer una atención urológica cercana, profesional y basada en evidencia, para que cada paciente se sienta escuchado, comprenda su diagnóstico y tenga la confianza de elegir el tratamiento más adecuado.",
  experience: [
    {
      year: "2011",
      title: "Alta Especialidad en Urología Oncológica",
      description:
        "Formación en el Instituto Nacional de Cancerología, enfocada en el diagnóstico y tratamiento quirúrgico del cáncer urológico.",
    },
  ],
  stats: [
    { label: "Pacientes atendidos", value: "+5,000" },
    { label: "Procedimientos y cirugías", value: "+3,500" },
    { label: "Años de experiencia", value: "+15" },
  ],
  certifications: [
    {
      name: "Certificación vigente en Urología",
      institution: "Consejo Mexicano de Urología",
    },
  ],
  education: [
    { degree: "Médico Cirujano", institution: "Universidad Autónoma de Chiapas (UNACH)" },
    { degree: "Especialidad en Urología (Cirujano Urólogo)", institution: "Universidad Nacional Autónoma de México (UNAM)" },
    {
      degree: "Alta Especialidad en Urología Oncológica",
      institution: "Instituto Nacional de Cancerología (INCan)",
      year: "2011",
    },
  ],
  // Sin testimonios reales verificables todavía — no se fabrican.
  // PENDIENTE: solo se dio el nombre de la página de Facebook, no su URL,
  // así que no entra a sameAs hasta que el doctor confirme el enlace real.
  sameAs: ["https://www.instagram.com/cirujanourologotgz/"],
};
