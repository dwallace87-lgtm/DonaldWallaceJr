# Implementation Plan: Gameplay & Puzzle Flow Audit

Execute a rigorous, end-to-end audit and debugging pass across all 10 missions, peripheral mini-missions, and the Constitutional Vault in **The Rights Protocol**, ensuring flawless puzzle validation, state transitions, evidence tracking, and edge-case resilience for Mr. Wallace's 11th-grade U.S. History classroom.

## User Review & Critical Decisions

> [!IMPORTANT]
> The user confirmed the debugging focus:
> - **Primary Target:** Full gameplay and puzzle flow audit across all 10 missions.
> - **Scope Boundary:** Keep existing features intact; focus strictly on polish, validation logic, edge cases, and student user experience.

- **Confirmed Decision 1:** Retain existing 1990s retro-futuristic CRT visual design, bilingual glossary, and 8-bit sound synthesizer.
- **Confirmed Decision 2:** Conduct deterministic verification of all puzzle evaluation handlers (matching, sorting, document reconstruction, inspection hotspots, safeguard sliders, multiple-choice reasoning, and master vault synchronization).

---

## 1. Overview & Core Concept

**The Rights Protocol** is an interactive, point-and-click escape-room adventure where 11th-grade students investigate constitutional violations caused by a corrupted municipal intelligence named CIVICLOCK in alternate-reality 1997 New Liberty.

This audit pass guarantees that:
- Every mission's puzzle mechanics function deterministically with zero dead clicks or broken state transitions.
- Constitutional legal feedback is 100% accurate, constructive, and responsive.
- LocalStorage persistence and recovery handle interruptions, browser refreshes, and edge cases gracefully.
- The Student Completion Report accurately reflects actual in-game performance, hints used, and teacher verification codes.

---

## 2. User Experience & Visual Design

### Key User Flows Under Audit
1. **Title & Zero-State:** New Investigation resets state cleanly; Continue restores exact sector and recovered card progress.
2. **City Map Exploration:** Clear visual status cues (Locked, Open, Recovered) across Core Sectors (1, 2, 4, 5, 6, 7) and Peripheral Hubs (3, 8, 9, 10).
3. **Mission Investigation Loop:**
   - Briefing dialogue with Archivist Reyes and CIVICLOCK.
   - Interactive puzzle challenges with immediate constructive feedback.
   - Celebration screen with "FILE RECOVERED" sequence and card inspection.
4. **Final Vault Lockdown:** Master emergency crises (Situations A–E) followed by the 10-amendment synchronization recall lock and victory debrief.
5. **Report & Export:** In-game certificate, performance metrics, one-click Google Classroom summary clipboard copy, and printable PDF.

### Accessibility & Chromebook Form Factor
- Touch targets $\ge 44\text{px}$ for student Chromebooks and touchpads.
- Full keyboard operability (`focus-visible`) and WCAG AA contrast.
- Reduced motion setting to toggle instant typewriter text rendering.
- Web Audio API user-gesture protection so audio never fails on autoplay restrictions.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Deterministic Puzzle State Machine**
  - *Chosen Approach:* Ensure every puzzle step resets temporary selection states when transitioning to the next step, preventing residual selection bugs across multi-step missions.
  - *Why:* Prevents students from encountering "pre-selected" cards or phantom error states when moving from Puzzle 1 to Puzzle 2.
- **Decision 2: Resilient LocalStorage Schema with Versioning**
  - *Chosen Approach:* Maintain an immutable fallback default state and defensive parsing. If local storage is disabled or private browsing blocks it, the game continues seamlessly in memory without crashing.
  - *Why:* Common on school Chromebooks running strict browser privacy profiles.

---

## 4. Technical Architecture & Component Structure

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
│  (State Store: missions, cards, hints, sound, screen)   │
└────────────┬──────────────┬──────────────┬─────────────┘
             │              │              │
    ┌────────▼───────┐ ┌────▼────────┐ ┌───▼───────────┐
    │ RetroHeader    │ │ CityMap     │ │ MissionView   │
    │ - Nav Links    │ │ - Core (6)  │ │ - Puzzles 1-4 │
    │ - Database     │ │ - Mini (4)  │ │ - Clues       │
    │ - Inventory    │ │ - Vault (11)│ │ - Dialogue    │
    │ - Glossary     │ └─────────────┘ └───────────────┘
    └────────────────┘        │
             ┌────────────────▼────────────────┐
             │            VaultView            │
             │ - Multi-Scenario Emergency Grid │
             │ - 10-Amendment Sync Recall Lock │
             │ - Victory Sequence & Report     │
             └─────────────────────────────────┘
```

### Audit & Debugging Workstreams

1. **Mission 01 (Signal District - 1st Amendment):**
   - Verify 5 signal matching pairs, state action scenario, Tinker student armband test, and 5-freedoms recall lock.
2. **Mission 02 (Regulation Lab - 2nd Amendment):**
   - Verify Heller self-defense holding, legal timeline pairs (Heller, McDonald, Bruen, Rahimi), and rights vs. permissible regulations synthesis.
3. **Mission 03 (Surveillance Station - 4th Amendment):**
   - Verify hotspot inspection tracking (backpack, incident report, school code), T.L.O. reasonable suspicion standard, and diary search scope limitation.
4. **Mission 04 (Interrogation Wing - 5th Amendment):**
   - Verify Miranda custodial interrogation trigger, Double Jeopardy acquittal bar, Due Process fragment arrangement, and 5th vs 6th pre-trial distinction.
5. **Mission 05 (Criminal Courthouse - 6th Amendment):**
   - Verify 6 courtroom station matching, Gideon indigent defense counsel, and confrontation clause cross-examination objection.
6. **Mission 06 (Civil Justice Archive - 7th Amendment):**
   - Verify Criminal vs. Civil case dossier classification, $20 common-law federal jury threshold, and 5th/6th/7th triage.
7. **Mini-Missions 03, 08, 09, 10:**
   - Verify 3rd Amendment peacetime quartering challenge, 8th Amendment safeguard dials (bail, fines, punishment), 9th Amendment Madison fragment reconstructor, and 10th Amendment Federalism delegated vs. reserved powers patchboard.
8. **Final Vault (Level 11):**
   - Verify unlock requirement (all 10 amendments recovered), 5 crisis scenarios, 10-amendment synchronization dropdowns, auto-fill test shortcut, and victory transition.
9. **Student Completion Report:**
   - Verify rank calculation formula, dynamic date formatting, teacher anti-tamper hash generation (`RRU-XXXXXXXX`), and clipboard formatting.

---

## 5. Verification Checklist

- [ ] `compile_applet` succeeds with 0 errors.
- [ ] `lint_applet` passes with 0 syntax or type warnings.
- [ ] All 10 missions unlock sequentially and can be completed independently.
- [ ] Vault correctly opens when 10 cards are collected.
- [ ] No phantom state leaks between puzzle steps.
- [ ] Local storage saves and restores seamlessly on reload.
