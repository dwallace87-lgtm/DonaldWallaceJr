import { GlossaryTerm } from '../types/game';

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    term: 'Warrant',
    termEs: 'Orden Judicial / Orden de Registro',
    definitionEn: 'An official document signed by a neutral judge authorizing law enforcement to conduct a search, seize property, or make an arrest based on probable cause.',
    definitionEs: 'Un documento oficial firmado por un juez neutral que autoriza a la policía a realizar un registro, confiscar bienes o arrestar a alguien basado en causa probable.',
    exampleEn: 'Police asked a judge for a search warrant specifically describing the apartment and laptop they wanted to inspect.',
    exampleEs: 'La policía solicitó una orden judicial describiendo específicamente el apartamento y la computadora portátil que querían inspeccionar.',
    relevantAmendments: [4]
  },
  {
    term: 'Probable Cause',
    termEs: 'Causa Probable',
    definitionEn: 'A reasonable belief based on specific, trustworthy factual evidence that a crime has occurred and that evidence will be found in a particular place.',
    definitionEs: 'Una creencia razonable basada en pruebas factuales confiables de que se ha cometido un delito y de que se encontrarán pruebas en un lugar determinado.',
    exampleEn: 'An anonymous hunch is not enough; officers must show concrete facts to establish probable cause before getting a warrant.',
    exampleEs: 'Una corazonada anónima no es suficiente; los agentes deben presentar hechos concretos para demostrar causa probable antes de obtener una orden.',
    relevantAmendments: [4]
  },
  {
    term: 'Reasonable Suspicion',
    termEs: 'Sospecha Razonable',
    definitionEn: 'A legal standard lower than probable cause, requiring specific articulable facts indicating a rule or law has been broken. Used by public school administrators under New Jersey v. T.L.O.',
    definitionEs: 'Un estándar legal inferior a la causa probable, que requiere hechos específicos y articulables que indiquen que se ha violado una norma o ley. Utilizado por administradores escolares públicos.',
    exampleEn: 'A teacher smelled smoke and saw a student running out of a locked restroom, providing reasonable suspicion to check their backpack for vaping devices.',
    exampleEs: 'Un maestro olió humo y vio a un estudiante salir corriendo de un baño cerrado, lo que dio sospecha razonable para revisar su mochila en busca de vapeadores.',
    relevantAmendments: [4]
  },
  {
    term: 'Due Process',
    termEs: 'Debido Proceso Legal',
    definitionEn: 'The constitutional guarantee that the government must follow fair, established legal rules and procedures before depriving any person of life, liberty, or property.',
    definitionEs: 'La garantía constitucional de que el gobierno debe seguir reglas y procedimientos legales justos y establecidos antes de privar a cualquier persona de su vida, libertad o propiedad.',
    exampleEn: 'Before having a professional license revoked or being sent to prison, a person is entitled to formal notice and a fair hearing.',
    exampleEs: 'Antes de que se revoque una licencia profesional o se envíe a alguien a prisión, la persona tiene derecho a una notificación formal y una audiencia justa.',
    relevantAmendments: [5, 14]
  },
  {
    term: 'Self-Incrimination',
    termEs: 'Autoincriminación',
    definitionEn: 'Being forced or compelled by government authorities to make statements or provide testimony that exposes oneself to criminal prosecution.',
    definitionEs: 'Ser forzado u obligado por las autoridades gubernamentales a hacer declaraciones o dar testimonios que expongan a uno mismo a un procesamiento penal.',
    exampleEn: 'A suspect in custody invokes the Fifth Amendment and refuses to answer detectives’ questions without a lawyer present.',
    exampleEs: 'Un sospechoso bajo custodia invoca la Quinta Enmienda y se niega a responder las preguntas de los detectives sin un abogado presente.',
    relevantAmendments: [5]
  },
  {
    term: 'Double Jeopardy',
    termEs: 'Doble Enjuiciamiento',
    definitionEn: 'A constitutional protection preventing the same government from putting a defendant on trial a second time for the exact same crime after a valid acquittal or conviction.',
    definitionEs: 'Una protección constitucional que impide que el mismo gobierno someta a un acusado a juicio por segunda vez por el mismo delito exacto tras una absolución válida.',
    exampleEn: 'After a jury acquits a defendant of grand theft, prosecutors cannot hold a new trial for that exact theft just because they found a clearer surveillance tape.',
    exampleEs: 'Después de que un jurado absuelve a un acusado de robo mayor, los fiscales no pueden celebrar un nuevo juicio por ese mismo robo solo porque encontraron una grabación más clara.',
    relevantAmendments: [5]
  },
  {
    term: 'Assistance of Counsel',
    termEs: 'Asistencia de un Abogado Defensor',
    definitionEn: 'The right of an accused person in a criminal prosecution to be represented by a qualified defense attorney, provided free by the state if the defendant is indigent (Gideon v. Wainwright).',
    definitionEs: 'El derecho de un acusado en un proceso penal a ser representado por un abogado defensor calificado, proporcionado gratuitamente por el estado si no tiene recursos.',
    exampleEn: 'When an impoverished teenager was accused of felony burglary, the court appointed a public defender to represent him at every critical stage.',
    exampleEs: 'Cuando un joven de bajos recursos fue acusado de delito grave de robo, el tribunal designó un defensor público para representarlo.',
    relevantAmendments: [6]
  },
  {
    term: 'Confrontation Clause',
    termEs: 'Cláusula de Confrontación',
    definitionEn: 'The Sixth Amendment guarantee that a criminal defendant has the right to face and cross-examine witnesses who give testimony against them in open court.',
    definitionEs: 'La garantía de la Sexta Enmienda de que un acusado penal tiene derecho a estar cara a cara y contrainterrogar a los testigos que declaran en su contra en el tribunal.',
    exampleEn: 'Prosecutors cannot simply read an anonymous letter or police notes aloud; the defense must have the chance to question the witness directly.',
    exampleEs: 'Los fiscales no pueden simplemente leer una carta anónima; la defensa debe tener la oportunidad de interrogar al testigo directamente.',
    relevantAmendments: [6]
  },
  {
    term: 'Civil vs. Criminal',
    termEs: 'Civil versus Penal / Criminal',
    definitionEn: 'Criminal cases involve government prosecution for breaking penal laws (risk of prison/probation). Civil cases involve legal disputes between private individuals or entities seeking remedies (money damages, injunctions).',
    definitionEs: 'Los casos penales involucran al gobierno procesando a alguien por violar leyes penales (riesgo de prisión). Los casos civiles son disputas entre particulares que buscan dinero o compensación.',
    exampleEn: 'Prosecuting an armed robber is a criminal case (6th Amendment). Suing a landlord over a broken lease and $15,000 in damages is a civil lawsuit (7th Amendment).',
    exampleEs: 'Procesar a un asaltante es un caso penal (6.ª Enmienda). Demandar a un arrendador por incumplimiento de contrato por $15,000 es una demanda civil (7.ª Enmienda).',
    relevantAmendments: [6, 7]
  },
  {
    term: 'State Action Doctrine',
    termEs: 'Doctrina de Acción Estatal / Gubernamental',
    definitionEn: 'The constitutional principle that the Bill of Rights restricts GOVERNMENT actors (police, mayors, public schools, judges), NOT private individuals or private businesses.',
    definitionEs: 'El principio de que la Carta de Derechos restringe a los actores del GOBIERNO (policía, escuelas públicas, jueces), NO a empresas privadas o particulares.',
    exampleEn: 'A public school principal cannot ban a peaceful political badge (government restriction), but a private restaurant can ask a customer to leave for violating dress code (private policy).',
    exampleEs: 'El director de una escuela pública no puede prohibir una insignia política pacífica, pero un restaurante privado sí puede pedirle a un cliente que se retire por su vestimenta.',
    relevantAmendments: [1, 14]
  },
  {
    term: 'Peacetime Quartering',
    termEs: 'Alojamiento de Soldados en Tiempo de Paz',
    definitionEn: 'The practice of forcing civilians to provide shelter, food, or lodging for military troops inside their private residences without consent.',
    definitionEs: 'La práctica de obligar a los civiles a dar refugio, comida o alojamiento a tropas militares en sus hogares privados sin su consentimiento.',
    exampleEn: 'The Third Amendment strictly forbids the military from commandeering civilian apartments to house soldiers during peace.',
    exampleEs: 'La Tercera Enmienda prohíbe estrictamente que los militares confisquen apartamentos civiles para alojar soldados en tiempos de paz.',
    relevantAmendments: [3]
  },
  {
    term: 'Federalism',
    termEs: 'Federalismo',
    definitionEn: 'The division and sharing of constitutional power between the national (federal) government and the individual state governments.',
    definitionEs: 'La división y distribución del poder constitucional entre el gobierno nacional (federal) y los gobiernos estatales individuales.',
    exampleEn: 'The federal government prints currency and negotiates treaties, while New York State manages its own driver\'s licenses and public school curriculum.',
    exampleEs: 'El gobierno federal emite moneda y negocia tratados, mientras que el estado de Nueva York gestiona sus licencias de conducir y planes de estudio.',
    relevantAmendments: [10]
  }
];
