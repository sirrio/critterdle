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

test("Mummy size feedback recognizes both SRD sizes", () => {
  const byName = new Map(MONSTERS.map((monster) => [monster.name, monster]));
  const size = CRITTERDLE_CONFIG.traits.find((trait) => trait.key === "size")!;
  const mummy = byName.get("Mummy")!;
  const small = byName.get("Cockatrice")!;
  const medium = byName.get("Ghoul")!;
  const large = byName.get("Owlbear")!;

  assert.equal(size.value(mummy), "Medium or Small");
  assert.equal(size.compare(mummy, mummy), "exact");
  assert.equal(size.compare(small, mummy), "partial");
  assert.equal(size.compare(medium, mummy), "partial");
  assert.equal(size.compare(mummy, small), "partial");
  assert.equal(size.compare(mummy, medium), "partial");
  assert.equal(size.compare(large, mummy), "lower");
  assert.equal(size.compare(mummy, large), "higher");
});
