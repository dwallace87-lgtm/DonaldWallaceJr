import { AmendmentCard } from '../types/game';

export const AMENDMENTS_DATA: AmendmentCard[] = [
  {
    id: 1,
    roman: 'I',
    title: 'First Amendment: Freedoms of Religion, Speech, Press, Assembly, & Petition',
    shortSummary: 'The Five Fundamental Freedoms of Expression and Conscience',
    officialExcerpt: 'Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances.',
    plainEnglish: 'The government cannot create a state religion or stop you from practicing your faith. It also protects your right to speak out, publish news and opinions, gather peacefully with others, and ask government officials to fix problems or change laws.',
    keyProtections: [
      'Freedom of Religion (Establishment Clause & Free Exercise Clause)',
      'Freedom of Speech (including symbolic and political expression)',
      'Freedom of the Press (reporting news without prior restraint)',
      'Freedom of Peaceful Assembly (peaceful protests and meetings)',
      'Right to Petition the Government (asking leaders for change)'
    ],
    memoryAnchor: '1 = The Five Freedoms of Expression (R-A-P-P-S: Religion, Assembly, Press, Petition, Speech)',
    realisticExample: 'High school students peacefully wear black armbands to protest a war (Tinker v. Des Moines), and the school cannot suspend them solely for expressing a controversial viewpoint without showing substantial disruption.',
    commonlyConfusedWith: 'Students often forget the "State Action Doctrine": the First Amendment restricts the GOVERNMENT (public schools, police, city councils), NOT private companies like social media platforms or private employers.',
    historicalContext: 'Anti-Federalists demanded this protection so the new powerful federal government could not silence political dissent, censor printers, or impose an official national church.'
  },
  {
    id: 2,
    roman: 'II',
    title: 'Second Amendment: Right to Keep and Bear Arms',
    shortSummary: 'Individual Right to Keep Arms for Lawful Self-Defense with Permissible Regulations',
    officialExcerpt: 'A well regulated Militia, being necessary to the security of a free State, the right of the people to keep and bear Arms, shall not be infringed.',
    plainEnglish: 'Protects an individual citizen\'s right to own commonly used firearms for lawful purposes, such as self-defense in the home. However, the right is not absolute; governments may enforce constitutionally permissible safety regulations (e.g. background checks, disarming credible threats).',
    keyProtections: [
      'Individual right to possess firearms for lawful purposes (D.C. v. Heller)',
      'Right applies against federal, state, and local governments (McDonald v. Chicago)',
      'Permissible limits exist (e.g. disarming individuals subject to domestic violence restraining orders: U.S. v. Rahimi)'
    ],
    memoryAnchor: '2 = Two arms / Bear arms (The right to keep weapons for self-defense)',
    realisticExample: 'A law-abiding adult is permitted to own a handgun at home for personal safety, but a court can temporarily restrict someone subject to an active restraining order who poses a documented violent threat.',
    commonlyConfusedWith: 'Neither extreme is true: it does NOT mean "the government can ban all guns," nor does it mean "anyone can carry any weapon anywhere with zero safety rules."',
    historicalContext: 'Early Americans relied on citizen militias rather than standing armies and wanted to ensure citizens could protect themselves and their communities.'
  },
  {
    id: 3,
    roman: 'III',
    title: 'Third Amendment: Quartering of Soldiers',
    shortSummary: 'No Forcible Peacetime Housing of Troops in Private Homes',
    officialExcerpt: 'No Soldier shall, in time of peace be quartered in any house, without the consent of the Owner, nor in time of war, but in a manner to be prescribed by law.',
    plainEnglish: 'The government cannot force homeowners or tenants to feed and house military soldiers in their private homes during peacetime without permission.',
    keyProtections: [
      'Prohibits forced quartering of military troops in peacetime without owner consent',
      'Requires specific legislative authorization even during times of war',
      'Embodies the privacy and sanctity of the civilian home against military intrusion'
    ],
    memoryAnchor: '3 = Three is a crowd (No soldiers crashing on your couch in peacetime)',
    realisticExample: 'During a peacetime military exercise, the armed forces cannot order suburban homeowners to provide spare bedrooms for soldiers.',
    commonlyConfusedWith: 'Rarely litigated today, but represents a core principle: civilian life and private homes are protected from military takeover.',
    historicalContext: 'Direct reaction to the British Quartering Acts of 1765 and 1774, which forced colonists to accommodate British soldiers in towns and barracks.'
  },
  {
    id: 4,
    roman: 'IV',
    title: 'Fourth Amendment: Search and Seizure',
    shortSummary: 'Protection Against Unreasonable Searches & Requirement for Warrants',
    officialExcerpt: 'The right of the people to be secure in their persons, houses, papers, and effects, against unreasonable searches and seizures, shall not be violated, and no Warrants shall issue, but upon probable cause, supported by Oath or affirmation, and particularly describing the place to be searched, and the persons or things to be seized.',
    plainEnglish: 'Government officials cannot search your body, home, phone, backpack, or belongings without a legally valid reason. Police usually need a warrant based on probable cause, though special environments like public schools operate under a "reasonable suspicion" standard.',
    keyProtections: [
      'Protection against unreasonable government searches and seizures',
      'Warrant requirement: issued by neutral judge based on probable cause with particularity',
      'Public school standard (New Jersey v. T.L.O.): searches require reasonable suspicion at inception and must be moderate in scope'
    ],
    memoryAnchor: '4 = Four walls of your house / Four doors on a car (Keep police from searching without justification)',
    realisticExample: 'Police cannot kick down your front door and rummage through your closet without a warrant or emergency exigent circumstances. At school, an administrator can search a backpack only if specific evidence connects that student to a rule violation.',
    commonlyConfusedWith: 'Not every search requires a warrant (e.g. school searches, airport screenings, consent, hot pursuit). But ALL government searches must be reasonable!',
    historicalContext: 'Colonists were outraged by British "writs of assistance"—general search warrants that allowed officials to search any house or warehouse anytime for smuggled goods.'
  },
  {
    id: 5,
    roman: 'V',
    title: 'Fifth Amendment: Rights of the Accused & Due Process',
    shortSummary: 'Self-Incrimination, Double Jeopardy, Due Process, & Just Compensation',
    officialExcerpt: 'No person shall be held to answer for a capital, or otherwise infamous crime, unless on a presentment or indictment of a Grand Jury... nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb; nor shall be compelled in any criminal case to be a witness against himself, nor be deprived of life, liberty, or property, without due process of law; nor shall private property be taken for public use, without just compensation.',
    plainEnglish: 'You have the right to remain silent—you cannot be forced to testify against yourself ("plead the Fifth"). You cannot be put on trial twice for the exact same crime after being acquitted (Double Jeopardy). The government must follow fair procedures (Due Process) before taking your freedom or property.',
    keyProtections: [
      'Right against compelled self-incrimination (right to remain silent, Miranda warnings in custodial interrogation)',
      'Double jeopardy protection (cannot be retried for the same offense after acquittal)',
      'Due Process Clause (fair, legal procedures before taking life, liberty, or property)',
      'Grand Jury indictment requirement in federal felony cases',
      'Takings Clause (Eminent domain requires just compensation)'
    ],
    memoryAnchor: '5 = "I plead the Fifth!" & Five fingers to cover your mouth (Silence, Due Process, Double Jeopardy)',
    realisticExample: 'During police interrogation while under arrest, a suspect chooses to stay silent and refuses to answer questions. If tried and found innocent, the prosecutor cannot re-arrest and retry them for the same crime because new evidence was found.',
    commonlyConfusedWith: 'Crucial distinction: Fifth Amendment protects you during INVESTIGATION & INTERROGATION (silence) and procedural fairness; Sixth Amendment governs the actual CRIMINAL TRIAL (lawyer, jury, witnesses)!',
    historicalContext: 'Created to eliminate inquisitions like the Star Chamber, where defendants were tortured or coerced into confessing against their will.'
  },
  {
    id: 6,
    roman: 'VI',
    title: 'Sixth Amendment: Criminal Trial Protections',
    shortSummary: 'Speedy Trial, Impartial Jury, Counsel, & Confronting Witnesses',
    officialExcerpt: 'In all criminal prosecutions, the accused shall enjoy the right to a speedy and public trial, by an impartial jury of the State and district wherein the crime shall have been committed... and to be informed of the nature and cause of the accusation; to be confronted with the witnesses against him; to have compulsory process for obtaining witnesses in his favor, and to have the Assistance of Counsel for his defence.',
    plainEnglish: 'If the government puts you on trial for a crime, you get a speedy and public trial, an impartial jury, notice of what you are charged with, the right to cross-examine prosecution witnesses, the power to subpoena favorable witnesses, and a defense lawyer (provided free if you cannot afford one).',
    keyProtections: [
      'Speedy and public trial (no secret or indefinitely delayed trials)',
      'Impartial jury of peers in criminal prosecutions',
      'Informed of nature and cause of accusation (specific criminal charges)',
      'Confrontation Clause (right to cross-examine prosecution witnesses in court)',
      'Compulsory process (subpoena witnesses to testify for your defense)',
      'Right to assistance of counsel (Gideon v. Wainwright: free lawyer for indigent defendants facing jail)'
    ],
    memoryAnchor: '6 = Speedy 6 (Fast criminal trial, six key protections inside the criminal courtroom)',
    realisticExample: 'A person charged with burglary who cannot afford an attorney is assigned a public defender, and their trial is held in open court before an unbiased jury rather than behind closed doors.',
    commonlyConfusedWith: 'The Sixth Amendment applies specifically to CRIMINAL PROSECUTIONS. It does NOT guarantee a jury in private civil lawsuits (that is the Seventh Amendment!) nor does it cover pre-trial interrogation silence (that is the Fifth Amendment!).',
    historicalContext: 'Guaranteed that the government could not lock people away in secret dungeons without charges or hold one-sided sham trials without defense counsel.'
  },
  {
    id: 7,
    roman: 'VII',
    title: 'Seventh Amendment: Civil Jury Trials',
    shortSummary: 'Right to a Jury in Covered Federal Civil Lawsuits',
    officialExcerpt: 'In Suits at common law, where the value in controversy shall exceed twenty dollars, the right of trial by jury shall be preserved, and no fact tried by a jury, shall be otherwise re-examined in any Court of the United States, but according to the rules of the common law.',
    plainEnglish: 'In federal civil lawsuits (disputes between private individuals or businesses seeking money damages rather than criminal jail time), the right to a jury trial is preserved for common-law claims exceeding twenty dollars.',
    keyProtections: [
      'Preserves right to jury trial in federal civil suits at common law (money damages)',
      'Distinct from criminal trials: deals with lawsuits, contracts, negligence, and property disputes',
      'Re-examination clause: judges cannot overturn jury findings of fact except under common law rules'
    ],
    memoryAnchor: '7 = $7 / Lucky Seven / Jackpot lawsuit (Civil disputes over money and contracts)',
    realisticExample: 'A homeowner sues a construction contractor in federal court for $50,000 for destroying their roof. Both parties have the right to have a jury decide who owes money, rather than just a judge.',
    commonlyConfusedWith: 'Sixth is CRIMINAL (crime, jail, defense attorney, prosecution); Seventh is CIVIL (lawsuits between parties over money, contracts, or injuries; no jail time).',
    historicalContext: 'Anti-Federalists worried that wealthy judges would favor government creditors over ordinary farmers and debtors without local juries to decide facts.'
  },
  {
    id: 8,
    roman: 'VIII',
    title: 'Eighth Amendment: Bail, Fines, & Cruel and Unusual Punishment',
    shortSummary: 'No Excessive Bail, Excessive Fines, or Cruel and Unusual Punishments',
    officialExcerpt: 'Excessive bail shall not be required, nor excessive fines imposed, nor cruel and unusual punishments inflicted.',
    plainEnglish: 'The government cannot set absurdly high bail to keep you in jail before trial, impose bankrupting excessive fines for small infractions, or punish prisoners with cruel, barbaric, or inhumane methods.',
    keyProtections: [
      'Protection against excessive bail (does not mean bail is granted in every case, but cannot be arbitrarily astronomical)',
      'Protection against excessive fines (punishment fines must be proportional to the offense)',
      'Prohibition on cruel and unusual punishment (torture, barbaric execution methods, disproportionate sentences)'
    ],
    memoryAnchor: '8 = Figure 8 looks like handcuffs (No torturing or bankrupting the person in cuffs)',
    realisticExample: 'A judge cannot set a $10,000,000 bail for a first-time shoplifter accused of taking a $20 pair of headphones, nor sentence them to physical lashings.',
    commonlyConfusedWith: 'Does NOT guarantee that every defendant must be released on bail (judges may deny bail if the defendant is a flight risk or violent threat).',
    historicalContext: 'Adopted from the English Bill of Rights of 1689 to stop royal judges from locking up political opponents indefinitely with impossible bail or barbaric penalties.'
  },
  {
    id: 9,
    roman: 'IX',
    title: 'Ninth Amendment: Unenumerated Rights of the People',
    shortSummary: 'Listing Some Rights Does Not Mean Others Do Not Exist',
    officialExcerpt: 'The enumeration in the Constitution, of certain rights, shall not be construed to deny or disparage others retained by the people.',
    plainEnglish: 'Just because a specific human right is not explicitly written down in the Bill of Rights does not mean the government can claim you do not have it. The people retain fundamental rights beyond those listed.',
    keyProtections: [
      'Prevents the Constitution from being treated as an exhaustive list of all human rights',
      'Affirms that people hold inherent rights even if not specifically enumerated (e.g. travel, privacy)',
      'Resolves the Federalist dilemma about creating a Bill of Rights'
    ],
    memoryAnchor: '9 = Nine is not the end / More than 9 (Rights beyond what is written down)',
    realisticExample: 'The Constitution does not explicitly mention "the right to choose your career" or "the right to travel between states," but the government cannot simply ban you from moving or working.',
    commonlyConfusedWith: 'Does not mean any imagined claim automatically wins in court, but it prevents the government from arguing: "If it is not written word-for-word in the Bill of Rights, you do not have that right."',
    historicalContext: 'Alexander Hamilton argued that a Bill of Rights was dangerous because tyrants would claim any unlisted right was surrendered. James Madison drafted the Ninth Amendment specifically to defeat that argument.'
  },
  {
    id: 10,
    roman: 'X',
    title: 'Tenth Amendment: Reserved Powers & Federalism',
    shortSummary: 'Powers Not Given to the Federal Government Belong to States or the People',
    officialExcerpt: 'The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people.',
    plainEnglish: 'The federal government only has the powers specifically granted to it in the Constitution. Any other powers—like regulating public schools, issuing driver licenses, or running local elections—belong to the state governments or to individual citizens.',
    keyProtections: [
      'Establishes the constitutional principle of Federalism (division of power)',
      'Powers delegated to federal government (coining money, foreign treaties, declaring war)',
      'Powers reserved to states or people (education, public health, marriage, police powers)'
    ],
    memoryAnchor: '10 = Ten-nessee / States\' power (Federalism: states and people keep the rest)',
    realisticExample: 'The federal government cannot dictate local high school graduation requirements or issue local driver’s licenses; those powers are reserved to the individual states.',
    commonlyConfusedWith: 'State laws must still comply with the U.S. Constitution (Supremacy Clause and 14th Amendment). States cannot pass laws that violate the Bill of Rights!',
    historicalContext: 'The Anti-Federalists’ crowning achievement, ensuring the new national government remained a limited government of enumerated powers.'
  }
];
