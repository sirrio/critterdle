import assert from "node:assert/strict";
import test from "node:test";
import { CRITTERDLE_CONFIG } from "../src/App";
import { MONSTERS } from "../src/monsters";
import { verifyGame } from "./verify-game";

verifyGame("Critterdle", CRITTERDLE_CONFIG);

const CREATURE_TYPES = new Set([
  "Aberration",
  "Beast",
  "Celestial",
  "Construct",
  "Dragon",
  "Elemental",
  "Fey",
  "Fiend",
  "Giant",
  "Humanoid",
  "Monstrosity",
  "Ooze",
  "Plant",
  "Undead",
]);

test("Critterdle uses canonical creature types", () => {
  for (const monster of MONSTERS) {
    assert.ok(CREATURE_TYPES.has(monster.type), `${monster.name} has invalid creature type: ${monster.type}`);
  }
});
