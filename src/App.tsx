import React from "react";
import { DailyDndle, compareNumber, compareText, type DndleConfig, type Result } from "@sirrio/dndle-core";
import { MONSTERS, type Monster } from "./monsters";

const SIZE_RANK: Record<Monster["size"], number> = { Tiny: 0, Small: 1, Medium: 2, Large: 3, Huge: 4, Gargantuan: 5 };

function compareAlignment(value: string, target: string): Result {
  if (value === target) return "exact";
  if (value === "Any Alignment" || target === "Any Alignment") return value === "Unaligned" || target === "Unaligned" ? "wrong" : "partial";
  const terms = ["Lawful", "Chaotic", "Neutral", "Good", "Evil"];
  return terms.some((term) => value.includes(term) && target.includes(term)) ? "partial" : "wrong";
}

function crLabel(value: number) {
  if (value === 0.125) return "1/8";
  if (value === 0.25) return "1/4";
  if (value === 0.5) return "1/2";
  return String(value);
}

function MonsterIcon({ monster }: { monster?: Monster }) {
  if (!monster) return <>?</>;
  const Icon = monster.icon;
  return <Icon aria-hidden="true" />;
}

export const CRITTERDLE_CONFIG: DndleConfig<Monster> = {
  id: "critterdle",
  storageKey: "critterdle",
  brand: "CRITTERDLE",
  brandIconUrl: "brand-header.svg",
  tagline: "THE DAILY MONSTER HUNT",
  entries: MONSTERS,
  traits: [
    { key: "cr", label: "CR", mobileLabel: "Challenge rating", value: (monster) => crLabel(monster.challengeRating), compare: (guess, target) => compareNumber(guess.challengeRating, target.challengeRating) },
    { key: "size", label: "Size", value: (monster) => monster.size, compare: (guess, target) => compareNumber(SIZE_RANK[guess.size], SIZE_RANK[target.size]) },
    { key: "type", label: "Type", value: (monster) => monster.type, compare: (guess, target) => compareText(guess.type, target.type) },
    { key: "alignment", label: "Alignment", value: (monster) => monster.alignment, compare: (guess, target) => compareAlignment(guess.alignment, target.alignment) },
    { key: "ac", label: "AC", mobileLabel: "Armor class", value: (monster) => String(monster.armorClass), compare: (guess, target) => compareNumber(guess.armorClass, target.armorClass) },
    { key: "hp", label: "HP", mobileLabel: "Hit points", value: (monster) => String(monster.hitPoints), compare: (guess, target) => compareNumber(guess.hitPoints, target.hitPoints) },
    { key: "speed", label: "Top Speed", value: (monster) => `${monster.topSpeed} ft.`, compare: (guess, target) => compareNumber(guess.topSpeed, target.topSpeed) },
  ],
  daily: { startUtc: [2026, 0, 1], multiplier: 19, offset: 7 },
  itemLabel: "Monster",
  archiveName: "DAILY HUNT",
  resultsTitle: "The Tracks",
  selectPrompt: "Select a monster to hunt.",
  readyPrompt: "Ready to track your guess.",
  actionLabel: "HUNT",
  howTitle: "Find the monster",
  howIntro: "You have six guesses. Compare each result to track down today's monster.",
  howSteps: ["Choose a monster and start the hunt.", "Use the colors to compare all seven monster properties.", "Follow the arrows to narrow down ordered values."],
  arrowTraits: "CR, size, armor class, hit points and top speed",
  successKicker: (guesses) => `TRACKED IN ${guesses} GUESSES`,
  failureKicker: "THE QUARRY ESCAPES",
  nextLabel: "NEXT MONSTER IN",
  shareQuestion: "Can you track down today's monster?",
  shareUrl: "https://sirrio.github.io/critterdle/",
  shareAction: "Join the hunt!",
  relatedGame: {
    prompt: "Rather search the Arcane Archive for spells?",
    label: "Play SPELLDLE",
    url: "https://sirrio.github.io/spelldle/",
  },
  resultSummary: (monster) => `CR ${crLabel(monster.challengeRating)} · ${monster.size} ${monster.type} · AC ${monster.armorClass} · ${monster.hitPoints} HP`,
  renderIcon: (monster) => <MonsterIcon monster={monster} />,
  credits: <><p>This work includes material from the System Reference Document 5.2.1 (“SRD 5.2.1”) by Wizards of the Coast LLC, available at <a href="https://www.dndbeyond.com/srd" target="_blank" rel="noreferrer">dndbeyond.com/srd</a>. The SRD 5.2.1 is licensed under the <a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank" rel="noreferrer">Creative Commons Attribution 4.0 International License</a>.</p><p>Icons by the contributors of <a href="https://game-icons.net/" target="_blank" rel="noreferrer">Game-icons.net</a>, used under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank" rel="noreferrer">CC BY 3.0</a>.</p></>,
};

export default function App() {
  return <DailyDndle config={CRITTERDLE_CONFIG} />;
}
