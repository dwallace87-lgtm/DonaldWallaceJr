import { EvidenceItem } from '../types/game';

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'ev_armband',
    name: 'Black Peace Armband',
    iconName: 'ribbon',
    location: 'Signal District / West High',
    shortSnippet: 'Symbolic student protest armband confiscated by administrator.',
    fullDescription: 'A plain black cloth armband worn by high school students to protest an overseas war. No classes were interrupted and no violence occurred. Confiscated solely because administrators disliked the anti-war stance.',
    legalRelevance: 'Directly relates to Tinker v. Des Moines: symbolic political speech in public schools is protected under the First Amendment unless it causes a substantial and material disruption.'
  },
  {
    id: 'ev_ordinance',
    name: 'Municipal Assembly Ban',
    iconName: 'file-text',
    location: 'City Hall Bulletin',
    shortSnippet: 'Official decree banning all outdoor gatherings of more than 3 people.',
    fullDescription: 'Executive Order 97-04 signed by the mayor prohibiting peaceful citizen assemblies in public parks under the pretext of "preserving sidewalk cleanliness."',
    legalRelevance: 'Violates the First Amendment right of the people peaceably to assemble and to petition the government for redress of grievances.'
  },
  {
    id: 'ev_heller_docket',
    name: 'Handgun Lockbox & Permit Denial',
    iconName: 'lock',
    location: 'Regulation Lab / Records Room',
    shortSnippet: 'Permit application denied under a blanket residential firearm ban.',
    fullDescription: 'Application from a law-abiding adult homeowner seeking to keep a registered handgun locked at home for lawful self-defense, denied under an absolute citywide ban.',
    legalRelevance: 'Violates the Second Amendment as clarified in D.C. v. Heller: individuals have the right to possess firearms for self-defense in the home.'
  },
  {
    id: 'ev_quartering_notice',
    name: 'Peacetime Billeting Order',
    iconName: 'home',
    location: 'Residential Block / Apt 4B',
    shortSnippet: 'Military directive ordering civilian to house troops during maneuvers.',
    fullDescription: 'Official requisition letter demanding that civilian tenants surrender two bedrooms to military personnel during a peacetime joint exercise without the owner’s consent.',
    legalRelevance: 'Blatant violation of the Third Amendment, which strictly forbids peacetime quartering of soldiers in private homes without owner consent.'
  },
  {
    id: 'ev_backpack',
    name: 'Maya’s Confiscated Backpack',
    iconName: 'briefcase',
    location: 'Surveillance Station / Security Office',
    shortSnippet: 'Student bag searched after teacher witnessed vaping smoke.',
    fullDescription: 'Contains school textbooks, notebooks, a vaping device in the main pouch, and a private personal diary in a zipped inner lining that was subsequently read by administrators.',
    legalRelevance: 'Fourth Amendment / New Jersey v. T.L.O.: search for the vape was justified at inception, but reading personal diary entries exceeded the reasonable scope of the search.'
  },
  {
    id: 'ev_report',
    name: 'Teacher Restroom Incident Report',
    iconName: 'clipboard',
    location: 'Security Desk',
    shortSnippet: 'Eyewitness account providing reasonable suspicion.',
    fullDescription: 'Written statement from teacher Mr. Gomez reporting that he smelled smoke and saw student Maya holding a vaping pod in the restroom.',
    legalRelevance: 'Provided the "reasonable suspicion" necessary under T.L.O. for a school administrator to search the backpack for vaping contraband.'
  },
  {
    id: 'ev_tape',
    name: 'Room B Interrogation Cassette',
    iconName: 'disc',
    location: 'Interrogation Wing',
    shortSnippet: 'Audio recording of custodial interrogation without Miranda warnings.',
    fullDescription: 'Magnetic cassette recording of detectives questioning a handcuffed burglary suspect for three hours without advising him of his right to remain silent or right to counsel.',
    legalRelevance: 'Under Miranda v. Arizona and the Fifth Amendment, statements elicited during custodial interrogation without procedural warnings cannot be admitted in criminal court.'
  },
  {
    id: 'ev_acquittal',
    name: 'Certified Verdict of Acquittal',
    iconName: 'award',
    location: 'Court Archive / Vault 2',
    shortSnippet: 'Jury verdict of NOT GUILTY for defendant Sarah.',
    fullDescription: 'Official court record signed by the jury foreperson finding defendant Sarah not guilty of grand theft in 1996, which CIVICLOCK attempted to re-prosecute.',
    legalRelevance: 'The Fifth Amendment Double Jeopardy Clause permanently prevents the government from putting a defendant on trial again for the same offense after a valid acquittal.'
  },
  {
    id: 'ev_gideon_case',
    name: 'Indigent Defense Waiver Form',
    iconName: 'user-x',
    location: 'Criminal Courthouse / Bench 4',
    shortSnippet: 'Forced waiver of attorney for an impoverished felony defendant.',
    fullDescription: 'Document where CIVICLOCK forced an unemployed defendant facing 15 years in prison to represent himself because he could not afford private attorney fees.',
    legalRelevance: 'Violates the Sixth Amendment under Gideon v. Wainwright: states must provide competent defense counsel to indigent defendants facing loss of liberty.'
  },
  {
    id: 'ev_contract',
    name: 'Civil Contract Breach Complaint',
    iconName: 'file-check',
    location: 'Civil Archive / Room 102',
    shortSnippet: 'Breach of contract complaint for $120,000 in damages.',
    fullDescription: 'A lawsuit filed by Apex Logistics against Metro Freight seeking $120,000 for non-delivery of electronics, where CIVICLOCK denied a jury trial.',
    legalRelevance: 'Protected by the Seventh Amendment: preserving the right to trial by jury in suits at common law in federal court exceeding twenty dollars.'
  }
];
