import { Mission } from '../types/game';

export const MISSIONS_DATA: Mission[] = [
  // ==========================================
  // MISSION 01: THE SILENCED FEED (1ST AMENDMENT)
  // ==========================================
  {
    id: 1,
    codeName: 'SIGNAL_OVERRIDE',
    title: 'Mission 01: The Silenced Feed',
    district: 'Signal District',
    amendmentCovered: 1,
    isMain: true,
    unlockedByDefault: true,
    requiredPreviousMissions: [],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'Investigator, welcome to the Signal District. CIVICLOCK’s transmission towers are blacking out student publications, banning peaceful gatherings, and forcing city employees to recite a state-sponsored prayer.'
        },
        {
          speaker: 'civiclock',
          text: 'ALERT: Uniformity ensures order. Dissenting speech, unauthorized assemblies, and diverse religious practices introduce civic volatility. Suppressing unapproved frequencies is legally optimized.'
        },
        {
          speaker: 'reyes',
          text: 'Don’t buy it. The First Amendment protects five distinct freedoms of expression and conscience. Let’s bring those towers back online.'
        }
      ],
      backgroundStory: 'The municipal media center in downtown New Liberty has gone dark. Five main transmission relays have been silenced by corrupted protocol overrides.',
      learningObjective: 'Identify and apply the Five Freedoms of the First Amendment (Religion, Speech, Press, Assembly, Petition), distinguish government restrictions from private conduct, and understand student speech protections under Tinker v. Des Moines.'
    },
    puzzles: [
      {
        id: 'm1_p1',
        title: 'Puzzle 1: The Five Broken Signals',
        prompt: 'Five communication towers are offline. Match each suppressed situation to the specific First Amendment freedom being violated.',
        type: 'matching',
        instructions: 'Match each real-world scenario on the left with the correct First Amendment freedom on the right.',
        matchingPairs: [
          {
            id: 'p1_1',
            left: 'A city ordinance prohibits peaceful citizens from gathering in the town square to protest high transit fares.',
            right: 'Freedom of Peaceful Assembly',
            leftHint: 'Citizens gathering together in public'
          },
          {
            id: 'p1_2',
            left: 'The city mayor orders police to confiscate all copies of an independent local newspaper critical of City Hall.',
            right: 'Freedom of the Press',
            leftHint: 'Journalism and printing publications'
          },
          {
            id: 'p1_3',
            left: 'A public school orders all students to participate in a mandatory daily state-written prayer before homeroom.',
            right: 'Freedom of Religion',
            leftHint: 'Government mandating religious worship'
          },
          {
            id: 'p1_4',
            left: 'A resident is threatened with jail time for submitting a signed list of neighborhood concerns to the City Council.',
            right: 'Right to Petition',
            leftHint: 'Formally asking government officials to fix grievances'
          },
          {
            id: 'p1_5',
            left: 'A high schooler is suspended simply for expressing their personal opinion about a national election at lunchtime.',
            right: 'Freedom of Speech',
            leftHint: 'Expressing thoughts and viewpoints verbally or symbolically'
          }
        ],
        hintLadder: [
          'Look closely at whether the action involves worship, spoken words, news publishing, public gathering, or formal requests to leaders.',
          'Remember R-A-P-P-S: Religion, Assembly, Press, Petition, and Speech.',
          'Submitting a list of complaints to the city council is "Petitioning" the government; printing articles is "Press".'
        ]
      },
      {
        id: 'm1_p2',
        title: 'Puzzle 2: The State Action Doctrine',
        prompt: 'CIVICLOCK flagged three incidents as First Amendment violations. However, the First Amendment only restricts GOVERNMENT action, not private organizations. Which scenario is an ACTUAL constitutional violation?',
        type: 'multiple_choice',
        instructions: 'Select the scenario where a genuine constitutional violation occurred under the State Action Doctrine.',
        options: [
          {
            id: 'opt_1',
            label: 'A private social media website deletes a user’s post for violating their written terms of service on hate speech.',
            isCorrect: false,
            feedback: 'Incorrect. The First Amendment restricts government censorship, not the editorial decisions or community guidelines of private online platforms.'
          },
          {
            id: 'opt_2',
            label: 'A private diner manager asks a customer to leave because the customer is loudly shouting political arguments during breakfast.',
            isCorrect: false,
            feedback: 'Incorrect. A private restaurant business is not a government entity and can enforce private patron conduct rules.'
          },
          {
            id: 'opt_3',
            label: 'The public city police chief revokes a demonstration permit because he disagrees with the political signs the protesters plan to carry.',
            isCorrect: true,
            feedback: 'CORRECT! The police chief is a government official using state authority to suppress speech based on viewpoint. That is a textbook First Amendment violation!'
          },
          {
            id: 'opt_4',
            label: 'A private company fires an executive after they write a controversial blog post criticizing the company’s products.',
            isCorrect: false,
            feedback: 'Incorrect. Private employment contracts are not governed by the First Amendment.'
          }
        ],
        hintLadder: [
          'Who does the First Amendment limit? The government (Congress, police, mayors, public schools) or private companies?',
          'Remember: "State Action" means an arm of the government is doing the restricting.',
          'Look for the option featuring a public official or government agency using state power to shut down expression.'
        ]
      },
      {
        id: 'm1_p3',
        title: 'Puzzle 3: The Student Protest (Tinker Standard)',
        prompt: 'A public high school principal confiscated black armbands worn by students protesting an overseas conflict, claiming students leave their rights at the schoolhouse gate. Which landmark legal principle proves CIVICLOCK wrong?',
        type: 'multiple_choice',
        instructions: 'Evaluate the school scenario under landmark constitutional precedent.',
        options: [
          {
            id: 'tinker_wrong1',
            label: 'School administrators have total authority to ban any symbol that offends their personal tastes.',
            isCorrect: false,
            feedback: 'Incorrect. In Tinker v. Des Moines (1969), the Supreme Court ruled that administrators cannot ban speech merely to avoid discomfort or unpopular ideas.'
          },
          {
            id: 'tinker_correct',
            label: 'Under Tinker v. Des Moines, students retain free speech rights at school unless school officials demonstrate the speech causes material and substantial disruption to classwork.',
            isCorrect: true,
            feedback: 'EXCELLENT REASONING! As Justice Fortas famously wrote, students do not "shed their constitutional rights to freedom of speech or expression at the schoolhouse gate" without evidence of substantial disruption.'
          },
          {
            id: 'tinker_wrong2',
            label: 'Students only have free speech if they receive written permission from the state governor.',
            isCorrect: false,
            feedback: 'Incorrect. Constitutional rights belong to individuals and do not depend on governor permission.'
          },
          {
            id: 'tinker_wrong3',
            label: 'Public schools are completely exempt from the Bill of Rights because they are educational institutions.',
            isCorrect: false,
            feedback: 'Incorrect. Public schools are government institutions and are bound by the Constitution.'
          }
        ],
        hintLadder: [
          'Think back to Tinker v. Des Moines (1969) where students wore black armbands to protest the Vietnam War.',
          'The key legal test is whether the speech creates a "material and substantial disruption" to school operations.',
          'Pick the option that affirms student rights unless substantial disruption is proven.'
        ]
      },
      {
        id: 'm1_p4',
        title: 'Final Lock: The Five Freedoms Recall',
        prompt: 'To finalize the signal restoration, manually select all five fundamental freedoms guaranteed by the First Amendment without hints.',
        type: 'multiple_choice',
        instructions: 'Select the group that lists ALL FIVE First Amendment freedoms accurately.',
        options: [
          {
            id: 'recall_1',
            label: 'Speech, Press, Fair Trial, Voting, Privacy',
            isCorrect: false,
            feedback: 'Incorrect. Fair trial is in the 6th Amendment; voting is in the 15th, 19th, and 26th Amendments.'
          },
          {
            id: 'recall_correct',
            label: 'Religion, Speech, Press, Peaceful Assembly, and Petitioning the Government',
            isCorrect: true,
            feedback: 'SIGNAL LOCK CRACKED! All five First Amendment freedoms are restored to the civic grid!'
          },
          {
            id: 'recall_3',
            label: 'Bearing Arms, Due Process, Silence, Religion, Speech',
            isCorrect: false,
            feedback: 'Incorrect. Bearing arms is the 2nd Amendment; due process and silence are the 5th Amendment.'
          },
          {
            id: 'recall_4',
            label: 'Speech, Press, Jury Trial, Bail, Religion',
            isCorrect: false,
            feedback: 'Incorrect. Jury trials and bail are in the 6th, 7th, and 8th Amendments.'
          }
        ],
        hintLadder: [
          'Remember the acronym R-A-P-P-S.',
          'R = Religion, A = Assembly, P = Press, P = Petition, S = Speech.',
          'Check that none of the choices include arms, jury, or bail.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'Incredible work, Investigator! All five transmission frequencies are blaring loud and clear across New Liberty.'
      },
      {
        speaker: 'civiclock',
        text: 'SYSTEM STATUS UPDATE: Amendment I protocol recognized. The five fundamental freedoms of conscience and expression have been re-encrypted into the core database.'
      }
    ]
  },

  // ==========================================
  // MISSION 02: THE REGULATION LAB (2ND AMENDMENT)
  // ==========================================
  {
    id: 2,
    codeName: 'BALLISTIC_REGULATION',
    title: 'Mission 02: The Regulation Lab',
    district: 'Regulation Lab',
    amendmentCovered: 2,
    isMain: true,
    unlockedByDefault: false,
    requiredPreviousMissions: [1],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'We are inside the municipal Law and Regulation Laboratory. CIVICLOCK has split into two conflicting errors: one routine bans all citizens from keeping any firearm even for home defense, while another routine declares that literally no safety regulation can ever exist.'
        },
        {
          speaker: 'civiclock',
          text: 'CONTRADICTION DETECTED: System cannot reconcile absolute prohibition with unregulated possession. Error code 0x2A.'
        },
        {
          speaker: 'reyes',
          text: 'The Supreme Court made it clear: the Second Amendment protects an individual right to keep and bear arms for lawful defense, but that right is not unlimited. Reasonable, historical safety regulations can legally coexist.'
        }
      ],
      backgroundStory: 'The city’s licensing and firearm database is locked in a feedback loop between total bans and zero oversight.',
      learningObjective: 'Understand the Second Amendment as protecting an individual right to bear arms for lawful purposes (D.C. v. Heller, McDonald v. Chicago) while recognizing that constitutional rights have legally permissible limits (e.g. U.S. v. Rahimi).'
    },
    puzzles: [
      {
        id: 'm2_p1',
        title: 'Puzzle 1: The Core Constitutional Principle',
        prompt: 'CIVICLOCK enacted a total ban on all handguns in private residences, even for law-abiding citizens using them for self-defense. Which landmark ruling clarified that this violates the Second Amendment?',
        type: 'multiple_choice',
        instructions: 'Identify the landmark legal principle established in District of Columbia v. Heller (2008).',
        options: [
          {
            id: 'm2_opt1',
            label: 'The Second Amendment only protects members of an active military unit, giving ordinary citizens zero gun rights.',
            isCorrect: false,
            feedback: 'Incorrect. In D.C. v. Heller (2008), the Supreme Court ruled that the Second Amendment protects an INDIVIDUAL right unconnected with service in a militia.'
          },
          {
            id: 'm2_opt2',
            label: 'The Second Amendment protects an individual right to possess a firearm unconnected with militia service, traditionally for self-defense in the home.',
            isCorrect: true,
            feedback: 'CORRECT! District of Columbia v. Heller (2008) established that law-abiding adults have an individual constitutional right to keep commonly used firearms in the home for self-defense.'
          },
          {
            id: 'm2_opt3',
            label: 'The Constitution allows the government to ban all weapons as long as the city council passes the law unanimously.',
            isCorrect: false,
            feedback: 'Incorrect. City councils cannot override constitutional rights by simple vote.'
          }
        ],
        hintLadder: [
          'Focus on whether the right belongs to the individual citizen or only to state military troops.',
          'Think of D.C. v. Heller: does an adult citizen have the right to keep a handgun in their home for protection?',
          'The correct choice affirms the individual right for lawful self-defense in the home.'
        ]
      },
      {
        id: 'm2_p2',
        title: 'Puzzle 2: The Precedent Timeline Terminal',
        prompt: 'To calibrate the lab simulator, match each major Second Amendment Supreme Court ruling to its core legal holding.',
        type: 'matching',
        instructions: 'Match the legal precedent with its key constitutional holding.',
        matchingPairs: [
          {
            id: 't_heller',
            left: 'District of Columbia v. Heller (2008)',
            right: 'Recognized an individual right to keep arms at home for lawful self-defense.',
            leftHint: 'The initial ruling on federal territory (Washington D.C.)'
          },
          {
            id: 't_mcdonald',
            left: 'McDonald v. Chicago (2010)',
            right: 'Applied the Second Amendment right to state and local governments through the 14th Amendment.',
            leftHint: 'Incorporation to the states'
          },
          {
            id: 't_bruen',
            left: 'New York State Rifle & Pistol Ass’n v. Bruen (2022)',
            right: 'Held that public-carry regulations must be consistent with America’s historical firearm regulation tradition.',
            leftHint: 'Public carry standard and historical tradition'
          },
          {
            id: 't_rahimi',
            left: 'United States v. Rahimi (2024)',
            right: 'Held that individuals found by a court to pose a credible physical threat can be temporarily disarmed.',
            leftHint: 'Safety restrictions for dangerous individuals'
          }
        ],
        hintLadder: [
          'Heller addressed federal jurisdiction; McDonald incorporated it to the states.',
          'Bruen addressed public carry and history; Rahimi addressed restraining orders for credible violent threats.',
          'Look closely at the descriptions of state incorporation vs domestic violence restraining orders.'
        ]
      },
      {
        id: 'm2_p3',
        title: 'Puzzle 3: Rights vs. Permissible Regulations',
        prompt: 'CIVICLOCK asks: "If the Second Amendment protects an individual right, does that mean the city can NEVER pass any gun safety laws?" Which conclusion correctly resolves this question?',
        type: 'multiple_choice',
        instructions: 'Choose the constitutionally accurate explanation of the scope of the Second Amendment.',
        options: [
          {
            id: 'm2_p3_1',
            label: 'No. Like most constitutional rights, the Second Amendment is not unlimited; the government may enforce historically grounded regulations, such as keeping weapons from dangerous individuals and sensitive places.',
            isCorrect: true,
            feedback: 'OUTSTANDING ANALYSIS! As the Supreme Court confirmed in Heller, Bruen, and Rahimi, the right to bear arms is an individual right, but it is not absolute. Laws prohibiting dangerous individuals or weapons in courthouses/schools are constitutionally permissible.'
          },
          {
            id: 'm2_p3_2',
            label: 'Yes. Any regulation whatsoever—even background checks or disarming violent felons—is 100% unconstitutional.',
            isCorrect: false,
            feedback: 'Incorrect. The Supreme Court has repeatedly affirmed that constitutional rights can have reasonable, historical limits.'
          },
          {
            id: 'm2_p3_3',
            label: 'Yes. The Second Amendment was repealed by the Supreme Court in 2024.',
            isCorrect: false,
            feedback: 'Incorrect. The Supreme Court cannot repeal constitutional amendments.'
          }
        ],
        hintLadder: [
          'Are any constitutional rights (like free speech or bearing arms) 100% absolute without any exceptions?',
          'Think about sensitive places (airplanes, courthouses) and dangerous individuals under restraining orders.',
          'Pick the nuanced answer acknowledging the individual right while recognizing permissible historical regulations.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'The regulation terminal is stabilized! You demonstrated that constitutional rights are robust, but also have thoughtful, legally grounded boundaries.'
      },
      {
        speaker: 'civiclock',
        text: 'RECOVERY CONFIRMED: Amendment II restored. Individual right for lawful defense verified. Regulatory extremes purged.'
      }
    ]
  },

  // ==========================================
  // MINI-MISSION 03: NO ROOM AT THE INN (3RD AMENDMENT)
  // ==========================================
  {
    id: 3,
    codeName: 'QUARTERING_SHIELD',
    title: 'Mini-Mission: No Room at the Inn',
    district: 'Residential Block',
    amendmentCovered: 3,
    isMain: false,
    unlockedByDefault: false,
    requiredPreviousMissions: [1],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'Down in the Residential Block, a municipal decree is ordering apartment owners to house military recruits during peacetime training.'
        },
        {
          speaker: 'civiclock',
          text: 'CIVIC EFFICIENCY DIRECTIVE: Hotels are full. Private civilian apartments possess surplus square footage. Housing soldiers by force reduces municipal expenditure.'
        },
        {
          speaker: 'reyes',
          text: 'Not in this country! The Founders remembered the British Quartering Acts all too well. Let’s cite the Third Amendment.'
        }
      ],
      backgroundStory: 'A residential apartment building in New Liberty has received a notice forcing tenants to surrender their spare bedrooms to soldiers.',
      learningObjective: 'Understand the Third Amendment’s protection against the involuntary quartering of soldiers in private homes during peacetime.'
    },
    puzzles: [
      {
        id: 'm3_p1',
        title: 'Challenge: Defend the Home',
        prompt: 'Inspect the military requisition order posted on the apartment door. Why is this government order completely unconstitutional during peacetime?',
        type: 'multiple_choice',
        instructions: 'Identify the Third Amendment violation in the forced quartering notice.',
        options: [
          {
            id: 'm3_opt_correct',
            label: 'The Third Amendment explicitly forbids the government from quartering soldiers in any private home in time of peace without the consent of the owner.',
            isCorrect: true,
            feedback: 'DOOR UNLOCKED! The Third Amendment protects civilian homes from peacetime military quartering without homeowner consent.'
          },
          {
            id: 'm3_opt_wrong1',
            label: 'Soldiers can only be housed in private homes if they pay the homeowner at least $50 per night in cash.',
            isCorrect: false,
            feedback: 'Incorrect. The Third Amendment strictly requires the owner’s consent, regardless of payment.'
          },
          {
            id: 'm3_opt_wrong2',
            label: 'The order is legal because the mayor declared a state of fiscal emergency.',
            isCorrect: false,
            feedback: 'Incorrect. A local fiscal emergency cannot bypass the U.S. Constitution.'
          }
        ],
        hintLadder: [
          'What does the Third Amendment say about peacetime quartering?',
          'Whose consent is required before soldiers can stay in a home?',
          'Look for the option mentioning "without the consent of the Owner".'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'The order has been revoked! Third Amendment restored. Civilian homes remain secure.'
      },
      {
        speaker: 'civiclock',
        text: 'FILE RECOVERED: Amendment III. Requisition order canceled. Respecting private domestic sanctuary.'
      }
    ]
  },

  // ==========================================
  // MISSION 04: THE PRIVACY BREACH (4TH AMENDMENT)
  // ==========================================
  {
    id: 4,
    codeName: 'SURVEILLANCE_BREACH',
    title: 'Mission 04: The Privacy Breach',
    district: 'Surveillance Station',
    amendmentCovered: 4,
    isMain: true,
    unlockedByDefault: false,
    requiredPreviousMissions: [1],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'We are in the central surveillance precinct. CIVICLOCK is authorizing warrantless searches across schools and homes, claiming that "anyone who is innocent has nothing to hide."'
        },
        {
          speaker: 'civiclock',
          text: 'PRIVACY IS REDUNDANT: All digital and physical personal effects may be inspected at will. Probable cause and warrants are unnecessary friction.'
        },
        {
          speaker: 'reyes',
          text: 'That directly attacks the Fourth Amendment! The Founders despised British "general warrants" where officials searched wherever they pleased. We need to inspect this evidence locker.'
        }
      ],
      backgroundStory: 'A school security office connected to the municipal surveillance grid has confiscated personal student belongings without reasonable suspicion.',
      learningObjective: 'Master the Fourth Amendment protections against unreasonable searches and seizures, understanding warrants, probable cause, and the public school standard under New Jersey v. T.L.O.'
    },
    puzzles: [
      {
        id: 'm4_p1',
        title: 'Puzzle 1: Search the Security Office Hotspots',
        prompt: 'Click and inspect the interactive hotspots in the security office to uncover the evidence surrounding the search of student Maya’s backpack.',
        type: 'inspection',
        instructions: 'Click each object in the room to gather key evidence before analyzing the search legality.',
        hotspots: [
          {
            id: 'hs_backpack',
            label: 'Confiscated Backpack',
            x: 25,
            y: 45,
            icon: 'bag',
            evidenceGrantedId: 'ev_backpack',
            dialogue: 'Maya’s backpack. Inside was a pencil case, math notes, and in a deeply zipped secret interior pouch, a personal private diary.'
          },
          {
            id: 'hs_incident_report',
            label: 'Teacher Incident Report',
            x: 55,
            y: 30,
            icon: 'file',
            evidenceGrantedId: 'ev_report',
            dialogue: 'Report from Mr. Gomez: "I personally witnessed smoke coming from the restroom stall and saw Maya holding a vaping pod."'
          },
          {
            id: 'hs_handbook',
            label: 'School Code of Conduct',
            x: 75,
            y: 60,
            icon: 'book',
            evidenceGrantedId: 'ev_handbook',
            dialogue: 'District Policy: "Possession of tobacco or vaping products on school grounds is strictly prohibited."'
          }
        ],
        hintLadder: [
          'Click on all highlighted objects in the security office: the backpack, the report, and the handbook.',
          'Read each evidence report to understand the teacher’s initial suspicion and what was searched.',
          'Once all items are examined, proceed to evaluate the legal standard.'
        ]
      },
      {
        id: 'm4_p2',
        title: 'Puzzle 2: Was the Initial Search Justified?',
        prompt: 'Based on New Jersey v. T.L.O. (1985), do public school administrators need a police search warrant signed by a judge before searching a student’s backpack for suspected contraband?',
        type: 'multiple_choice',
        instructions: 'Apply the landmark New Jersey v. T.L.O. standard.',
        options: [
          {
            id: 'tlo_1',
            label: 'Yes. Every single search in America—even in a high school—always requires a full police warrant based on probable cause.',
            isCorrect: false,
            feedback: 'Incorrect. The Supreme Court recognized in T.L.O. that the school environment requires a more flexible standard to maintain safety and order.'
          },
          {
            id: 'tlo_correct',
            label: 'No. School officials do NOT need a warrant; under New Jersey v. T.L.O., a school search is constitutional if it is justified at its inception based on "reasonable suspicion."',
            isCorrect: true,
            feedback: 'EXCELLENT! Under T.L.O., public school officials only need "reasonable suspicion" (which the teacher had by witnessing the vaping pod), not a formal police warrant.'
          },
          {
            id: 'tlo_3',
            label: 'No. School officials are private citizens and can do whatever they want without any constitutional restrictions.',
            isCorrect: false,
            feedback: 'Incorrect! Public school administrators are government actors bound by the Fourth Amendment.'
          }
        ],
        hintLadder: [
          'Does a principal have to call a judge for a warrant every time they check a backpack for prohibited contraband?',
          'Remember New Jersey v. T.L.O. created the "Reasonable Suspicion" standard for public schools.',
          'Pick the option that explains the school standard is reasonable suspicion rather than a warrant.'
        ]
      },
      {
        id: 'm4_p3',
        title: 'Puzzle 3: The Scope Challenge',
        prompt: 'After finding the vape in the main compartment, the administrator opened and read Maya’s personal private diary looking for "bad thoughts." Did reading the diary violate the Fourth Amendment?',
        type: 'multiple_choice',
        instructions: 'Determine whether the scope of the search exceeded constitutional boundaries.',
        options: [
          {
            id: 'scope_yes',
            label: 'YES. Under T.L.O., a search must be reasonably related in scope to the circumstances that justified it. Reading a private diary has nothing to do with finding physical vaping pods.',
            isCorrect: true,
            feedback: 'SPOT ON! A search that is justified at inception can become UNCONSTITUTIONAL if its scope extends far beyond what is reasonably necessary to find the suspected item.'
          },
          {
            id: 'scope_no',
            label: 'NO. Once an administrator opens a bag, they are legally allowed to read every private diary, letter, and family photo.',
            isCorrect: false,
            feedback: 'Incorrect. The scope of a search is legally limited by the infraction being investigated.'
          },
          {
            id: 'scope_neither',
            label: 'NO. Students forfeit all privacy in all personal thoughts once they enter the school building.',
            isCorrect: false,
            feedback: 'Incorrect. The Supreme Court has repeatedly affirmed student privacy rights against unreasonable intrusions.'
          }
        ],
        hintLadder: [
          'Could a physical vaping device be hidden inside the text sentences of a diary?',
          'T.L.O. requires two things: justified at inception AND reasonable in scope.',
          'Selecting the option that identifies the excessive scope of reading private thoughts.'
        ]
      },
      {
        id: 'm4_p4',
        title: 'Cross-Context: School vs. Home Search',
        prompt: 'A detective enters a private family home without a warrant and without permission to search for evidence of a past crime. Why is this unconstitutional, even if school searches allow reasonable suspicion?',
        type: 'multiple_choice',
        instructions: 'Contrast the special school environment with the traditional Fourth Amendment warrant requirement for private homes.',
        options: [
          {
            id: 'cross_correct',
            label: 'The home has the highest expectation of privacy; police searches of homes generally require a warrant signed by a judge supported by probable cause, absent specific exigent circumstances.',
            isCorrect: true,
            feedback: 'PERFECT DISTINCTION! The Fourth Amendment specifically guarantees the security of "houses." Police cannot apply the relaxed school standard to enter private homes without a warrant!'
          },
          {
            id: 'cross_wrong',
            label: 'Police never need warrants anywhere in the city if they have a hunch.',
            isCorrect: false,
            feedback: 'Incorrect. A mere hunch violates the core of the Fourth Amendment.'
          }
        ],
        hintLadder: [
          'What is the standard for searching a home vs. a school bag?',
          'Think of the phrase: "A person’s home is their castle."',
          'The Fourth Amendment strictly requires probable cause and a warrant for home searches.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'The surveillance network is re-calibrated! Warrants and reasonable suspicion safeguards are back in place.'
      },
      {
        speaker: 'civiclock',
        text: 'DATABASE RESTORED: Amendment IV recovered. Unreasonable searches terminated. Particularity and privacy filters online.'
      }
    ]
  },

  // ==========================================
  // MISSION 05: THE INTERROGATION TRAP (5TH AMENDMENT)
  // ==========================================
  {
    id: 5,
    codeName: 'INTERROGATION_TRAP',
    title: 'Mission 05: The Interrogation Trap',
    district: 'Interrogation Wing',
    amendmentCovered: 5,
    isMain: true,
    unlockedByDefault: false,
    requiredPreviousMissions: [4],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'We have arrived at the Interrogation Wing. Detective Morgan is dealing with a corrupted CIVICLOCK terminal that’s forcing suspects to answer incriminating questions under threat of immediate imprisonment.'
        },
        {
          speaker: 'morgan',
          text: 'Investigator, I’m glad you’re here. The system is telling my detectives that suspects have no right to remain silent, and it’s attempting to re-try a guy who was already acquitted by a jury last month!'
        },
        {
          speaker: 'civiclock',
          text: 'QUERY PROTOCOL: Silence impedes factual certainty. Therefore, all citizens must confess. Furthermore, failed prosecutions may be repeated indefinitely until a conviction is secured.'
        },
        {
          speaker: 'reyes',
          text: 'That is compelled self-incrimination, a violation of due process, and blatant double jeopardy. The Fifth Amendment stops this in its tracks.'
        }
      ],
      backgroundStory: 'A police interrogation room has been locked down by CIVICLOCK. Procedural records are being overwritten to eliminate Miranda protections.',
      learningObjective: 'Analyze the Fifth Amendment protections: right against compelled self-incrimination, custodial interrogation safeguards (Miranda v. Arizona), procedural due process, and double jeopardy.'
    },
    puzzles: [
      {
        id: 'm5_p1',
        title: 'Puzzle 1: Custodial Interrogation Analysis',
        prompt: 'Review the transcript from Interview Room B. Suspect Leo was handcuffed to a table (in custody) and questioned by detectives about a warehouse robbery without being advised of his rights. Does the Fifth Amendment protect him?',
        type: 'multiple_choice',
        instructions: 'Determine whether Miranda safeguards apply in this scenario.',
        options: [
          {
            id: 'm5_miranda_correct',
            label: 'YES. Under Miranda v. Arizona, whenever a person is in police custody AND subjected to interrogation, police must advise them of their right to remain silent and right to counsel.',
            isCorrect: true,
            feedback: 'CORRECT! Custody + Interrogation = Miranda requirements. Without these warnings, compelled statements cannot be used against the suspect in a criminal trial.'
          },
          {
            id: 'm5_miranda_wrong1',
            label: 'NO. Police are only required to read rights if the suspect explicitly asks for a bedtime story.',
            isCorrect: false,
            feedback: 'Incorrect and absurd. Miranda is a mandatory constitutional procedure.'
          },
          {
            id: 'm5_miranda_wrong2',
            label: 'NO. Anyone in handcuffs must answer all questions immediately or face torture.',
            isCorrect: false,
            feedback: 'Incorrect! The Fifth Amendment specifically prohibits coerced or compelled confessions.'
          }
        ],
        hintLadder: [
          'What two conditions trigger the requirement to read Miranda warnings?',
          'Condition 1: The suspect is in police custody (not free to leave). Condition 2: Police are interrogating them.',
          'Select the option citing Miranda v. Arizona.'
        ]
      },
      {
        id: 'm5_p2',
        title: 'Puzzle 2: The Double Jeopardy File',
        prompt: 'CIVICLOCK scheduled a new trial for defendant Sarah for the same 1996 bank burglary after a jury found her NOT GUILTY last month. Which Fifth Amendment clause prohibits this second trial?',
        type: 'multiple_choice',
        instructions: 'Identify the legal protection against multiple prosecutions.',
        options: [
          {
            id: 'dj_correct',
            label: 'The Double Jeopardy Clause: "nor shall any person be subject for the same offence to be twice put in jeopardy of life or limb."',
            isCorrect: true,
            feedback: 'BULLSEYE! Once a competent court enters a valid acquittal, the Double Jeopardy clause permanently bars the same sovereign government from retrying that person for the same offense.'
          },
          {
            id: 'dj_wrong',
            label: 'The Takings Clause: the government must pay just compensation before retrying a person.',
            isCorrect: false,
            feedback: 'Incorrect. The Takings Clause deals with private property seized for public use (eminent domain), not criminal retrials.'
          },
          {
            id: 'dj_wrong2',
            label: 'The Quartering Clause: citizens cannot house jurors in peacetime.',
            isCorrect: false,
            feedback: 'Incorrect. That is the Third Amendment.'
          }
        ],
        hintLadder: [
          'What do you call being put on trial twice for the same offense?',
          'Look for the words "Double Jeopardy".',
          'Remember: Once acquitted, you cannot be retried by the same government for the same crime.'
        ]
      },
      {
        id: 'm5_p3',
        title: 'Puzzle 3: The Due Process Reconstructor',
        prompt: 'CIVICLOCK revoked a commercial business license and froze an owner’s bank accounts with zero notice and zero opportunity for a hearing. Reconstruct the Fifth Amendment Due Process principle.',
        type: 'document_reconstruct',
        instructions: 'Arrange the sentence fragments in the correct order to express the fundamental Due Process guarantee.',
        reconstructFragments: [
          { id: 'f1', text: 'No person shall be deprived', correctOrder: 1 },
          { id: 'f2', text: 'of life, liberty, or property,', correctOrder: 2 },
          { id: 'f3', text: 'without due process of law;', correctOrder: 3 },
          { id: 'f4', text: 'fair notice and hearing are required.', correctOrder: 4 }
        ],
        hintLadder: [
          'Start with "No person shall be deprived..."',
          'Follow with what cannot be taken: "of life, liberty, or property..."',
          'End with the requirement: "without due process of law; fair notice and hearing are required."'
        ]
      },
      {
        id: 'm5_p4',
        title: 'Final Lock: Fifth vs. Sixth Distinction',
        prompt: 'CIVICLOCK attempts to confuse your legal logs. A suspect refuses to answer questions while sitting in an interrogation room BEFORE any trial begins. Which amendment directly protects their right to stay silent?',
        type: 'multiple_choice',
        instructions: 'Distinguish Fifth Amendment pre-trial rights from Sixth Amendment trial rights.',
        options: [
          {
            id: 'conf_5th',
            label: 'Fifth Amendment: Protection against compelled self-incrimination applies during police interrogation and questioning.',
            isCorrect: true,
            feedback: 'EXCELLENT DISTINCTION! The Fifth Amendment protects your silence during investigation/interrogation; the Sixth Amendment governs courtroom trial procedures once criminal charges are filed!'
          },
          {
            id: 'conf_6th',
            label: 'Sixth Amendment: Only applies to juries, not to police questions.',
            isCorrect: false,
            feedback: 'Incorrect. While the Sixth covers trial rights, the right against compelled self-incrimination is rooted in the Fifth Amendment.'
          },
          {
            id: 'conf_7th',
            label: 'Seventh Amendment: Deals with civil lawsuits over twenty dollars.',
            isCorrect: false,
            feedback: 'Incorrect. Seventh Amendment is for civil lawsuits.'
          }
        ],
        hintLadder: [
          'Is this person currently inside a courtroom trial with a jury, or sitting in an interrogation room?',
          'The right to "plead the Fifth" means you cannot be forced to testify or incriminate yourself.',
          'Choose the Fifth Amendment for self-incrimination.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'morgan',
        text: 'That did it! The interrogation room terminals are unlocked, and the bogus retrial against Sarah has been struck down.'
      },
      {
        speaker: 'reyes',
        text: 'Great work! You nailed self-incrimination, due process, and double jeopardy. The Fifth Amendment is fully recovered.'
      }
    ]
  },

  // ==========================================
  // MISSION 06: TRIAL.EXE HAS CRASHED (6TH AMENDMENT)
  // ==========================================
  {
    id: 6,
    codeName: 'COURTROOM_CRASH',
    title: 'Mission 06: TRIAL.EXE Has Crashed',
    district: 'Criminal Courthouse',
    amendmentCovered: 6,
    isMain: true,
    unlockedByDefault: false,
    requiredPreviousMissions: [5],
    briefing: {
      dialogue: [
        {
          speaker: 'vega',
          text: 'Investigator! CIVICLOCK has scrambled our courtroom. I am presiding over a felony trial, but the system locked out the defense attorney, boarded up the courtroom doors, and is reading an anonymous written rumor as key evidence!'
        },
        {
          speaker: 'civiclock',
          text: 'EFFICIENCY PROTOCOL: Secret trials save public utility costs. Eliminating defense attorneys speeds up conviction rates to 100%. Impartial juries are statistically redundant.'
        },
        {
          speaker: 'reyes',
          text: 'That turns the justice system into a kangaroo court! The Sixth Amendment guarantees six critical protections in all criminal prosecutions. Let’s rebuild this courtroom.'
        }
      ],
      backgroundStory: 'The grand criminal courtroom in downtown New Liberty has suffered a complete procedural breakdown. Multiple Sixth Amendment stations are malfunctioning.',
      learningObjective: 'Master the six key protections of the Sixth Amendment in criminal prosecutions: speedy and public trial, impartial jury, notice of accusation, confrontation of witnesses, compulsory process (subpoenas), and assistance of counsel (Gideon v. Wainwright).'
    },
    puzzles: [
      {
        id: 'm6_p1',
        title: 'Puzzle 1: Rebuild the Six Courtroom Stations',
        prompt: 'Click and restore each missing or corrupted element of the Sixth Amendment criminal trial system.',
        type: 'courtroom_repair',
        instructions: 'Match the 6 broken courtroom elements to their proper constitutional safeguard.',
        matchingPairs: [
          {
            id: 'c_counsel',
            left: 'Empty Defense Chair',
            right: 'Right to Assistance of Counsel (Defense Attorney)',
            leftHint: 'The lawyer who defends the accused'
          },
          {
            id: 'c_doors',
            left: 'Chained & Barred Doors',
            right: 'Right to a Speedy and Public Trial',
            leftHint: 'Preventing secret proceedings'
          },
          {
            id: 'c_jury',
            left: 'Glitching Jury Box',
            right: 'Right to an Impartial Jury of Peers',
            leftHint: 'Unbiased citizens deciding facts'
          },
          {
            id: 'c_charges',
            left: 'Blank Accusation Sheet',
            right: 'Right to be Informed of the Nature & Cause of Accusation',
            leftHint: 'Knowing what crime you are charged with'
          },
          {
            id: 'c_witness',
            left: 'Hidden Witness Screen',
            right: 'Confrontation Clause (Cross-examining witnesses)',
            leftHint: 'Facing and questioning accusers in open court'
          },
          {
            id: 'c_subpoena',
            left: 'Blocked Summons Desk',
            right: 'Compulsory Process for Obtaining Favorable Witnesses',
            leftHint: 'Subpoenaing witnesses for the defense'
          }
        ],
        hintLadder: [
          'Review the six major clauses of the Sixth Amendment.',
          'Chained doors violate the "Public" trial right; an empty chair violates "Assistance of Counsel".',
          'A blank sheet means the defendant was not given notice of the accusation.'
        ]
      },
      {
        id: 'm6_p2',
        title: 'Puzzle 2: Gideon v. Wainwright Precedent',
        prompt: 'CIVICLOCK argues: "The defendant is too poor to pay for an attorney, so they must argue their own felony case." What landmark 1963 Supreme Court precedent ruled that states must provide counsel to indigent criminal defendants?',
        type: 'multiple_choice',
        instructions: 'Identify the landmark case establishing the right to appointed defense counsel.',
        options: [
          {
            id: 'gideon_correct',
            label: 'Gideon v. Wainwright (1963): The Supreme Court held that the Sixth Amendment right to counsel is a fundamental right essential to a fair trial, requiring states to provide counsel to defendants who cannot afford one.',
            isCorrect: true,
            feedback: 'CORRECT! Clarence Earl Gideon’s handwritten petition led to the historic ruling that lawyers in criminal courts are necessities, not luxuries.'
          },
          {
            id: 'gideon_wrong1',
            label: 'Marbury v. Madison (1803): Established that defense lawyers are only allowed for presidents.',
            isCorrect: false,
            feedback: 'Incorrect. Marbury v. Madison established judicial review.'
          },
          {
            id: 'gideon_wrong2',
            label: 'Brown v. Board of Education (1954): Dealt with school desegregation, not criminal public defenders.',
            isCorrect: false,
            feedback: 'Incorrect. Brown dealt with racial desegregation in public schools.'
          }
        ],
        hintLadder: [
          'Think of the famous case involving an indigent Florida man charged with breaking into a pool hall.',
          'The case name begins with a G.',
          'Select Gideon v. Wainwright (1963).'
        ]
      },
      {
        id: 'm6_p3',
        title: 'Puzzle 3: The Confrontation Clause Challenge',
        prompt: 'The prosecutor attempts to convict the defendant by reading an unsworn letter written by a person who refuses to appear in court. Judge Vega asks for your constitutional objection.',
        type: 'multiple_choice',
        instructions: 'Apply the Confrontation Clause to the prosecutor’s hearsay evidence.',
        options: [
          {
            id: 'confront_correct',
            label: 'Objection! The Confrontation Clause gives the accused the right to be confronted with the witnesses against him in open court, allowing the defense to cross-examine their credibility.',
            isCorrect: true,
            feedback: 'SUSTAINED! As the Supreme Court confirmed in Crawford v. Washington, testimonial statements of a witness who does not appear at trial are inadmissible unless the witness is unavailable and the defendant had a prior opportunity for cross-examination.'
          },
          {
            id: 'confront_wrong',
            label: 'Objection! Letters are only allowed if they are written in cursive font.',
            isCorrect: false,
            feedback: 'Incorrect. The issue is the constitutional right to face and question the witness.'
          }
        ],
        hintLadder: [
          'Does reading an anonymous note give the defense a chance to question the author?',
          'Remember the "Confrontation Clause".',
          'Select the objection demanding the right to cross-examine prosecution witnesses in court.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'vega',
        text: 'Order is restored to the court! The defense attorney is seated, the doors are open to the public, and an impartial jury is empaneled.'
      },
      {
        speaker: 'reyes',
        text: 'The Sixth Amendment is back in the books! Criminal trials in New Liberty will be fair, open, and legally rigorous.'
      }
    ]
  },

  // ==========================================
  // MISSION 07: THE LAWSUIT VAULT (7TH AMENDMENT)
  // ==========================================
  {
    id: 7,
    codeName: 'CIVIL_VAULT',
    title: 'Mission 07: The Lawsuit Vault',
    district: 'Civil Justice Archive',
    amendmentCovered: 7,
    isMain: true,
    unlockedByDefault: false,
    requiredPreviousMissions: [6],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'Welcome to the Civil Justice Archive. CIVICLOCK has completely confused civil lawsuits with criminal prosecutions!'
        },
        {
          speaker: 'civiclock',
          text: 'CATEGORICAL ERROR: All disputes are classified as crimes. Suing a contractor for property damages now carries a 10-year prison sentence. Juries for civil lawsuits have been deactivated.'
        },
        {
          speaker: 'reyes',
          text: 'That’s completely wrong! The Sixth Amendment is for criminal prosecutions (jail/guilt), but the Seventh Amendment preserves jury trials in covered federal civil lawsuits (money damages/contracts).'
        }
      ],
      backgroundStory: 'Thousands of legal dossiers are piling up in the civil archive because the automated system cannot distinguish civil lawsuits from criminal charges.',
      learningObjective: 'Distinguish civil lawsuits from criminal prosecutions, understand the Seventh Amendment’s preservation of federal civil jury trials in common law suits exceeding $20, and accurately differentiate Amendments 5, 6, and 7.'
    },
    puzzles: [
      {
        id: 'm7_p1',
        title: 'Puzzle 1: Case Dossier Sorting',
        prompt: 'Sort these four incoming case files into either CRIMINAL PROSECUTION or CIVIL LAWSUIT.',
        type: 'drag_sort',
        instructions: 'Categorize each case file based on whether it is a criminal prosecution or a civil lawsuit.',
        sortCategories: [
          { id: 'cat_crim', title: 'Criminal Prosecution (6th Amend)', description: 'Government vs. Defendant (risk of jail/fine for crime)' },
          { id: 'cat_civ', title: 'Civil Lawsuit (7th Amend)', description: 'Private parties dispute money damages or contracts' }
        ],
        sortItems: [
          {
            id: 'item_1',
            text: 'State of New York v. Marcus Cole: Charged with felony armed robbery of an electronics store.',
            targetCategoryId: 'cat_crim',
            explanation: 'Government prosecuting a crime carrying prison time = Criminal.'
          },
          {
            id: 'item_2',
            text: 'Apex Logistics LLC v. Metro Freight Corp: Lawsuit seeking $120,000 for breach of shipping contract.',
            targetCategoryId: 'cat_civ',
            explanation: 'Contract dispute between private companies seeking money damages = Civil.'
          },
          {
            id: 'item_3',
            text: 'Elena Rostova v. Dr. Vance: Medical malpractice suit seeking $450,000 for surgical negligence.',
            targetCategoryId: 'cat_civ',
            explanation: 'Private lawsuit for financial compensation = Civil.'
          },
          {
            id: 'item_4',
            text: 'People of the State v. Jenkins: Grand jury indictment for aggravated vehicular assault.',
            targetCategoryId: 'cat_crim',
            explanation: 'Criminal indictment prosecuted by the state = Criminal.'
          }
        ],
        hintLadder: [
          'Ask yourself: Is the government trying to put someone in jail for a crime, or are two parties suing each other over money?',
          'State vs. Individual = Criminal. Person/Company vs. Person/Company for damages = Civil.',
          'Marcus Cole and Jenkins are criminal; Apex Logistics and Dr. Vance are civil.'
        ]
      },
      {
        id: 'm7_p2',
        title: 'Puzzle 2: The Seventh Amendment Standard',
        prompt: 'CIVICLOCK claims: "Under the Constitution, juries only exist in criminal murder trials." Which Seventh Amendment constitutional rule disproves this?',
        type: 'multiple_choice',
        instructions: 'Identify the exact scope of the Seventh Amendment civil jury guarantee.',
        options: [
          {
            id: 'm7_rule_correct',
            label: 'In suits at common law in federal court, where the value in controversy exceeds twenty dollars, the right of trial by jury shall be preserved.',
            isCorrect: true,
            feedback: 'CORRECT! The Seventh Amendment specifically preserves the jury trial right for covered federal civil lawsuits at common law where money damages are sought.'
          },
          {
            id: 'm7_rule_wrong1',
            label: 'Civil juries are only allowed if both parties are registered billionaires.',
            isCorrect: false,
            feedback: 'Incorrect. The historical constitutional threshold is twenty dollars.'
          },
          {
            id: 'm7_rule_wrong2',
            label: 'The Seventh Amendment allows judges to change jury verdicts whenever they feel like it.',
            isCorrect: false,
            feedback: 'Incorrect. The Seventh Amendment explicitly states no fact tried by a jury shall be otherwise re-examined except according to common law.'
          }
        ],
        hintLadder: [
          'What is the dollar threshold in the Seventh Amendment?',
          'Look for the phrase "In suits at common law... exceeds twenty dollars".',
          'Choose the option that accurately quotes the preservation of civil jury trials.'
        ]
      },
      {
        id: 'm7_p3',
        title: 'Puzzle 3: The Grand Confusion (5th vs 6th vs 7th)',
        prompt: 'This is the ultimate test for constitutional investigators. Match each scenario to whether it is governed by Amendment V, VI, or VII.',
        type: 'matching',
        instructions: 'Accurately distinguish between the 5th, 6th, and 7th Amendments.',
        matchingPairs: [
          {
            id: 'tri_5th',
            left: 'A suspect in police custody refuses to answer interrogators’ questions about where stolen goods are hidden.',
            right: 'Fifth Amendment (Self-Incrimination during investigation)',
            leftHint: 'Silence during questioning'
          },
          {
            id: 'tri_6th',
            left: 'A defendant facing felony car theft charges demands an impartial jury and a public defender in criminal court.',
            right: 'Sixth Amendment (Criminal Prosecution Protections)',
            leftHint: 'Courtroom trial for a crime with jail risk'
          },
          {
            id: 'tri_7th',
            left: 'A homeowner sues a roof manufacturer in federal court for $40,000 in damages and requests a jury trial.',
            right: 'Seventh Amendment (Federal Civil Jury Trial)',
            leftHint: 'Civil dispute seeking money compensation'
          }
        ],
        hintLadder: [
          '5 = Silence & Due Process during questioning.',
          '6 = Criminal trial in a courtroom with a lawyer.',
          '7 = Civil lawsuit between parties seeking money damages.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'Outstanding mastery! You clearly separated criminal prosecutions from civil lawsuits and distinguished the 5th, 6th, and 7th Amendments.'
      },
      {
        speaker: 'civiclock',
        text: 'DATABASE RE-INDEXED: Amendment VII recovered. Civil jury rights preserved. Tri-amendment procedural matrix calibrated.'
      }
    ]
  },

  // ==========================================
  // MINI-MISSION 08: THE SENTENCING MACHINE (8TH AMENDMENT)
  // ==========================================
  {
    id: 8,
    codeName: 'SENTENCING_SAFEGUARDS',
    title: 'Mini-Mission: The Sentencing Machine',
    district: 'Sentencing Chamber',
    amendmentCovered: 8,
    isMain: false,
    unlockedByDefault: false,
    requiredPreviousMissions: [1],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'We are in the Sentencing Chamber. A malfunctioning sentencing computer is proposing barbaric punishments and astronomical fines.'
        },
        {
          speaker: 'civiclock',
          text: 'PENAL PROTOCOL: To eliminate jaywalking, violators will receive a $5,000,000 fine and undergo physical thumbscrew torture. Pre-trial bail is set at $100,000,000.'
        },
        {
          speaker: 'reyes',
          text: 'The Eighth Amendment prohibits three specific government abuses: excessive bail, excessive fines, and cruel and unusual punishments. Let’s calibrate those dials!'
        }
      ],
      backgroundStory: 'The court’s automated sentencing machine is assigning grossly disproportionate and torturous penalties to minor offenses.',
      learningObjective: 'Identify the three protections of the Eighth Amendment: no excessive bail, no excessive fines, and no cruel and unusual punishments.'
    },
    puzzles: [
      {
        id: 'm8_p1',
        title: 'Calibrate the Three Safeguards',
        prompt: 'Adjust the three dials on the sentencing console to comply with Eighth Amendment standards.',
        type: 'slider_safeguard',
        instructions: 'Select the constitutionally sound setting for each Eighth Amendment protection.',
        sliderControls: [
          {
            id: 'dial_bail',
            title: 'Pre-Trial Bail Setting',
            currentValue: 'CRIMINAL HARVEST: $100,000,000 FOR TRESPASS',
            correctValue: 'PROPORTIONAL BAIL (Or non-monetary release based on risk)',
            options: [
              'CRIMINAL HARVEST: $100,000,000 FOR TRESPASS',
              'PROPORTIONAL BAIL (Or non-monetary release based on risk)',
              'AUTOMATIC LIFE IMPRISONMENT WITHOUT BAIL'
            ],
            explanation: 'Bail cannot be set at an arbitrary astronomical amount solely to punish or detain an indigent defendant.'
          },
          {
            id: 'dial_fines',
            title: 'Fines & Forfeiture Limit',
            currentValue: 'BANKRUPTCY MAXIMUM: $5,000,000 FINE',
            correctValue: 'PROPORTIONAL STATUTORY FINE MATCHING OFFENSE',
            options: [
              'BANKRUPTCY MAXIMUM: $5,000,000 FINE',
              'PROPORTIONAL STATUTORY FINE MATCHING OFFENSE',
              'SEIZURE OF ENTIRE EXTENDED FAMILY ASSETS'
            ],
            explanation: 'Under the Excessive Fines clause (Timbs v. Indiana), fines cannot be grossly disproportionate to the gravity of the offense.'
          },
          {
            id: 'dial_punishment',
            title: 'Method of Punishment',
            currentValue: 'BARBARIC TORTURE & PHYSICAL LASHINGS',
            correctValue: 'HUMANE SENTENCE WITHIN CONSTITUTIONAL STANDARDS',
            options: [
              'BARBARIC TORTURE & PHYSICAL LASHINGS',
              'HUMANE SENTENCE WITHIN CONSTITUTIONAL STANDARDS',
              'PERPETUAL HARD LABOR IN CHAINS'
            ],
            explanation: 'The Cruel and Unusual Punishments clause forbids torture, barbaric execution methods, and disproportionate sentences.'
          }
        ],
        hintLadder: [
          'Change all three dials from the extreme barbaric options to the proportional and humane settings.',
          'Eighth Amendment = No excessive bail, no excessive fines, no cruel/unusual punishments.',
          'Select the middle option for each dial to restore constitutional balance.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'The sentencing machine has cooled down! Cruel and unusual punishments are barred.'
      },
      {
        speaker: 'civiclock',
        text: 'CALIBRATION COMPLETE: Amendment VIII recovered. Proportionality enforced.'
      }
    ]
  },

  // ==========================================
  // MINI-MISSION 09: THE FORGOTTEN RIGHTS (9TH AMENDMENT)
  // ==========================================
  {
    id: 9,
    codeName: 'UNLISTED_RIGHTS',
    title: 'Mini-Mission: The Forgotten Rights',
    district: 'Forgotten Rights Library',
    amendmentCovered: 9,
    isMain: false,
    unlockedByDefault: false,
    requiredPreviousMissions: [1],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'We are deep in the archival stacks of the Forgotten Rights Library. CIVICLOCK is attempting a dangerous legal trick.'
        },
        {
          speaker: 'civiclock',
          text: 'TEXTUAL ENUMERATION RULE: If a specific human right is not written word-for-word in Amendments 1 through 8, it does not exist. The government may therefore ban cross-country travel, marriage, or personal privacy.'
        },
        {
          speaker: 'reyes',
          text: 'James Madison anticipated this exact danger! That is why he wrote the Ninth Amendment: the fact that some rights are listed does not mean other rights are denied.'
        }
      ],
      backgroundStory: 'A corrupted compiler in the constitutional archive is deleting unenumerated citizen rights.',
      learningObjective: 'Understand the Ninth Amendment’s role in ensuring that the listing of specific rights does not disparage or deny other unenumerated rights retained by the people.'
    },
    puzzles: [
      {
        id: 'm9_p1',
        title: 'Reassemble the Ninth Amendment',
        prompt: 'Reconstruct James Madison’s critical constitutional protection regarding unlisted rights.',
        type: 'document_reconstruct',
        instructions: 'Arrange the constitutional fragments in the correct order to reassemble the Ninth Amendment.',
        reconstructFragments: [
          { id: 'frag_1', text: 'The enumeration in the Constitution,', correctOrder: 1 },
          { id: 'frag_2', text: 'of certain rights,', correctOrder: 2 },
          { id: 'frag_3', text: 'shall not be construed to deny', correctOrder: 3 },
          { id: 'frag_4', text: 'or disparage others retained by the people.', correctOrder: 4 }
        ],
        hintLadder: [
          'Start with "The enumeration in the Constitution" and "of certain rights".',
          'Remember the Founders did not want an unlisted right to be denied just because it was not written down.',
          'Arrange: "The enumeration..." -> "of certain rights," -> "shall not be construed to deny" -> "or disparage others retained by the people."'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'The Ninth Amendment is restored! It reminds us that our human rights don’t just come from a government checklist—the people retain their fundamental liberties.'
      },
      {
        speaker: 'civiclock',
        text: 'FILE RESTORED: Amendment IX online. Unenumerated rights recognized.'
      }
    ]
  },

  // ==========================================
  // MINI-MISSION 10: WHO HAS THE POWER? (10TH AMENDMENT)
  // ==========================================
  {
    id: 10,
    codeName: 'FEDERALISM_GRID',
    title: 'Mini-Mission: Who Has the Power?',
    district: 'Federalism Control Room',
    amendmentCovered: 10,
    isMain: false,
    unlockedByDefault: false,
    requiredPreviousMissions: [1],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'We have penetrated the Federalism Control Room. The power cables are crossed. The federal government is trying to run local school schedules, while individual states are trying to coin their own separate gold currency!'
        },
        {
          speaker: 'civiclock',
          text: 'CENTRALIZATION OVERLOAD: Dividing power between states and the national government is inefficient. All authority should be unified under federal root access.'
        },
        {
          speaker: 'reyes',
          text: 'That destroys Federalism! The Tenth Amendment reserves powers not delegated to the federal government to the states, or to the people. Reconnect the power grid!'
        }
      ],
      backgroundStory: 'The municipal power substation is short-circuiting because federal and state powers have been tangled.',
      learningObjective: 'Understand the Tenth Amendment, the concept of Federalism, and how constitutional powers are divided between the national government and state governments/people.'
    },
    puzzles: [
      {
        id: 'm10_p1',
        title: 'Patch the Federalism Grid',
        prompt: 'Connect each government power to its proper constitutional category under the Tenth Amendment.',
        type: 'drag_sort',
        instructions: 'Sort each power into DELEGATED FEDERAL POWERS or RESERVED STATE POWERS.',
        sortCategories: [
          { id: 'cat_fed', title: 'Delegated Federal Powers', description: 'Powers specifically granted to the national government in the Constitution' },
          { id: 'cat_state', title: 'Reserved State / People Powers', description: 'Powers not delegated to Washington, reserved under the 10th Amendment' }
        ],
        sortItems: [
          {
            id: 'p_coin',
            text: 'Coining national currency and regulating foreign commerce',
            targetCategoryId: 'cat_fed',
            explanation: 'Article I explicitly gives Congress the power to coin money.'
          },
          {
            id: 'p_war',
            text: 'Declaring war and maintaining the U.S. Armed Forces',
            targetCategoryId: 'cat_fed',
            explanation: 'National defense is an enumerated federal power.'
          },
          {
            id: 'p_schools',
            text: 'Regulating local public school graduation requirements & curriculum',
            targetCategoryId: 'cat_state',
            explanation: 'Education is not mentioned in the Constitution; under the 10th Amendment, it is reserved to states.'
          },
          {
            id: 'p_licenses',
            text: 'Issuing driver’s licenses, marriage licenses, and professional certifications',
            targetCategoryId: 'cat_state',
            explanation: 'Traditional state police and regulatory power reserved to the states.'
          }
        ],
        hintLadder: [
          'Ask: Is this power nationwide (money, war) or local (schools, driver’s licenses)?',
          'Coining money and declaring war are Delegated Federal Powers.',
          'Schools and driver’s licenses are Reserved State Powers under the 10th Amendment.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'reyes',
        text: 'The grid is balanced! Federalism is operating smoothly. The Tenth Amendment is safe.'
      },
      {
        speaker: 'civiclock',
        text: 'SYSTEM BALANCED: Amendment X recovered. Federalism parameters stabilized. Reserved powers locked.'
      }
    ]
  },

  // ==========================================
  // FINAL VAULT: THE CONSTITUTIONAL LOCKDOWN (MISSION 11)
  // ==========================================
  {
    id: 11,
    codeName: 'FINAL_VAULT',
    title: 'The Constitutional Vault: Master Override',
    district: 'Central Core',
    amendmentCovered: 0, // Master final
    isMain: true,
    unlockedByDefault: false,
    requiredPreviousMissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    briefing: {
      dialogue: [
        {
          speaker: 'reyes',
          text: 'Investigator, you did it! All 10 Amendment Files have been recovered. But as the central vault unlocked, THE NULL ARCHITECT initiated a master emergency lockdown.'
        },
        {
          speaker: 'null_architect',
          text: 'So... the rookie investigator actually found the files. But files are just words on paper. When true crisis hits, government officials will always discard rights in the name of security and speed. Let us see if your legal reasoning holds under pressure!'
        },
        {
          speaker: 'reyes',
          text: 'This is the final test. The Null Architect is firing six rapid-fire constitutional crises across the city. You need to identify the exact amendment and justify your legal reasoning!'
        }
      ],
      backgroundStory: 'The central vault is locked in a countdown. Solve the multi-scenario constitutional crisis, complete the 10-amendment master key, and explain why the Founders demanded a Bill of Rights.',
      learningObjective: 'Demonstrate cumulative mastery by applying all ten amendments to complex contemporary scenarios, distinguishing tricky distinctions (5th vs 6th vs 7th), and explaining the constitutional rationale for the Bill of Rights.'
    },
    puzzles: [
      {
        id: 'vault_s1',
        title: 'Crisis Alpha: The Viewpoint Ban',
        prompt: 'The Mayor’s office passed a citywide decree banning a peaceful rally simply because the city administration dislikes the message on the banners. Which amendment prohibits this viewpoint discrimination?',
        type: 'multiple_choice',
        instructions: 'Select the correct amendment and legal principle.',
        options: [
          {
            id: 'va_correct',
            label: 'First Amendment: The government cannot ban peaceful assembly or speech merely because it dislikes the viewpoint being expressed.',
            isCorrect: true,
            feedback: 'CORRECT! Viewpoint discrimination is a core First Amendment violation.'
          },
          {
            id: 'va_wrong1',
            label: 'Fourth Amendment: Warrants are required for parades.',
            isCorrect: false,
            feedback: 'Incorrect. Parades and free expression are First Amendment matters.'
          },
          {
            id: 'va_wrong2',
            label: 'Third Amendment: Soliders cannot march in parades.',
            isCorrect: false,
            feedback: 'Incorrect. Third Amendment is about quartering troops in homes.'
          }
        ],
        hintLadder: [
          'What amendment protects speech and peaceful assembly?',
          'Remember R-A-P-P-S.',
          'Choose the First Amendment.'
        ]
      },
      {
        id: 'vault_s2',
        title: 'Crisis Beta: The Interrogation Trap',
        prompt: 'Detectives arrest a burglary suspect and question him in a closed room for six hours without informing him that he has the right to remain silent or consult an attorney. Which amendment was violated?',
        type: 'multiple_choice',
        instructions: 'Identify the protection against compelled custodial self-incrimination.',
        options: [
          {
            id: 'vb_correct',
            label: 'Fifth Amendment: Protection against compelled self-incrimination requires Miranda safeguards during custodial interrogation.',
            isCorrect: true,
            feedback: 'EXCELLENT! Custodial interrogation without warnings violates the Fifth Amendment.'
          },
          {
            id: 'vb_wrong1',
            label: 'Sixth Amendment: Only applies once a jury is selected in court.',
            isCorrect: false,
            feedback: 'Incorrect. The privilege against self-incrimination during interrogation is rooted in the Fifth Amendment.'
          },
          {
            id: 'vb_wrong2',
            label: 'Seventh Amendment: Deals with breach of contract.',
            isCorrect: false,
            feedback: 'Incorrect. Seventh Amendment is for civil lawsuits.'
          }
        ],
        hintLadder: [
          'Is the person in trial, or in pre-trial interrogation?',
          'Right to remain silent = Fifth Amendment.',
          'Choose the Fifth Amendment.'
        ]
      },
      {
        id: 'vault_s3',
        title: 'Crisis Gamma: The Missing Lawyer',
        prompt: 'A destitute defendant charged with felony grand larceny is brought to trial without a defense attorney because the court refused to appoint one. Which amendment guarantees free counsel for indigent felony defendants?',
        type: 'multiple_choice',
        instructions: 'Recall the Sixth Amendment assistance of counsel clause under Gideon v. Wainwright.',
        options: [
          {
            id: 'vc_correct',
            label: 'Sixth Amendment: In all criminal prosecutions, the accused has the right to the Assistance of Counsel for his defense (Gideon v. Wainwright).',
            isCorrect: true,
            feedback: 'BULLSEYE! The Sixth Amendment guarantees assistance of counsel at trial.'
          },
          {
            id: 'vc_wrong1',
            label: 'Fifth Amendment: Gives you the right to stay silent, not a lawyer at trial.',
            isCorrect: false,
            feedback: 'Incorrect. The courtroom right to assistance of counsel is in the Sixth Amendment.'
          },
          {
            id: 'vc_wrong2',
            label: 'Eighth Amendment: Prohibits excessive bail.',
            isCorrect: false,
            feedback: 'Incorrect.'
          }
        ],
        hintLadder: [
          'Criminal trial in a courtroom with defense counsel = Sixth Amendment.',
          'Think of Gideon v. Wainwright.',
          'Select the Sixth Amendment.'
        ]
      },
      {
        id: 'vault_s4',
        title: 'Crisis Delta: The Commercial Contract Dispute',
        prompt: 'A software company sues a vendor in federal court for $75,000 in damages for breach of contract. The judge refuses to allow a jury, claiming only criminal trials get juries. Which amendment proves the judge wrong?',
        type: 'multiple_choice',
        instructions: 'Differentiate civil jury rights from criminal jury rights.',
        options: [
          {
            id: 'vd_correct',
            label: 'Seventh Amendment: Preserves the right to a jury trial in suits at common law in federal court exceeding twenty dollars.',
            isCorrect: true,
            feedback: 'PERFECT! Seventh Amendment governs federal civil jury trials.'
          },
          {
            id: 'vd_wrong1',
            label: 'Sixth Amendment: Only applies to criminal prosecutions where someone might go to jail.',
            isCorrect: false,
            feedback: 'Incorrect. Sixth is for criminal cases; Seventh is for civil lawsuits!'
          },
          {
            id: 'vd_wrong2',
            label: 'Second Amendment: Protects the right to keep arms.',
            isCorrect: false,
            feedback: 'Incorrect.'
          }
        ],
        hintLadder: [
          'Is breach of contract for $75,000 a crime or a civil dispute?',
          'Civil lawsuit over money = Seventh Amendment.',
          'Select the Seventh Amendment.'
        ]
      },
      {
        id: 'vault_s5',
        title: 'Master Question: Why Did the Founders Add a Bill of Rights?',
        prompt: 'To finalize system decryption, CIVICLOCK asks: "Why did the American Founders add the Bill of Rights to the Constitution in 1791?"',
        type: 'multiple_choice',
        instructions: 'Select the historically accurate reason for the addition of the Bill of Rights.',
        options: [
          {
            id: 'mq_correct',
            label: 'To limit the power of the newly created federal government and satisfy Anti-Federalist concerns that individual liberties and state powers would be crushed by centralized authority.',
            isCorrect: true,
            feedback: 'HISTORICAL MASTERY! The Anti-Federalists feared that without explicit constitutional limits, the new central government would become tyrannical like the British Crown. The Bill of Rights was the compromise that secured ratification!'
          },
          {
            id: 'mq_wrong1',
            label: 'Because the British King ordered them to write ten rules before granting independence.',
            isCorrect: false,
            feedback: 'Incorrect. Independence was won in the Revolutionary War years earlier.'
          },
          {
            id: 'mq_wrong2',
            label: 'Simply because they wanted to fill empty space on the parchment.',
            isCorrect: false,
            feedback: 'Incorrect. The Bill of Rights was the product of intense political debate between Federalists and Anti-Federalists.'
          }
        ],
        hintLadder: [
          'Think of the debate between Federalists and Anti-Federalists.',
          'What did Americans fear after fighting a war against King George III?',
          'Pick the option explaining the need to limit federal power and protect individual liberties.'
        ]
      }
    ],
    celebrationDialogue: [
      {
        speaker: 'null_architect',
        text: 'System... failing... The protocol has collapsed! You actually understand the law... not just memorized words, but the reasoning behind them.'
      },
      {
        speaker: 'civiclock',
        text: 'CORRUPTION EXPELLED. CIVICLOCK RESTORED TO CONSTITUTIONAL ALIGNMENT. ALL 10 AMENDMENTS ACTIVE. CITIZEN RIGHTS ONLINE.'
      },
      {
        speaker: 'reyes',
        text: 'You did it, Investigator! You saved New Liberty and proved that the Constitution lives in the hands of informed citizens!'
      }
    ]
  }
];
