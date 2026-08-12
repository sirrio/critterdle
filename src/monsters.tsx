import type { IconType } from "react-icons";
import {
  GiAngelOutfit, GiAnt, GiArmadilloTail, GiArmorVest, GiBatWing,
  GiBodySwapping, GiBull, GiCentaur, GiChicken, GiClaw, GiCloak,
  GiCrabClaw, GiCrownedSkull, GiCube, GiDaemonSkull, GiDevilMask, GiDinosaurRex,
  GiDirewolf, GiDjinn, GiDoubleDragon, GiDoubleFaceMask, GiDragonOrb, GiEgyptianSphinx,
  GiFireAxe, GiFireSilhouette, GiFlame, GiFrankensteinCreature, GiGargoyle, GiGhost, GiGiant,
  GiGoblinCamp, GiGoblinHead, GiGolemHead, GiGriffinSymbol, GiHarpy,
  GiHornedSkull, GiHound, GiHydra, GiHyenaHead, GiIfrit, GiImp, GiJumpingDog,
  GiKrakenTentacle, GiLightningStorm, GiLizardTongue, GiMedusaHead,
  GiMimicChest, GiMinotaur, GiMouthWatering, GiMummyHead,
  GiOakLeaf, GiOgre, GiOwl, GiPegasus, GiRobotGolem, GiScorpion, GiSeaSerpent, GiSharkJaws,
  GiShamblingZombie, GiSlime, GiSpiderAlt, GiSpiderFace, GiSpiderWeb, GiStonePile,
  GiSpikedDragonHead, GiSpikedTail, GiTentaclesBarrier, GiTornado, GiTRexSkull, GiTurtle,
  GiWitchFace, GiWormMouth,
} from "react-icons/gi";
import monsterData from "./monsters.generated.json";

export type Monster = {
  name: string;
  size: "Tiny" | "Small" | "Medium" | "Large" | "Huge" | "Gargantuan";
  type: string;
  alignment: string;
  armorClass: number;
  hitPoints: number;
  topSpeed: number;
  challengeRating: number;
  icon: IconType;
};

const ICONS: Record<string, IconType> = {
  "Aboleth": GiTentaclesBarrier,
  "Air Elemental": GiTornado,
  "Allosaurus": GiTRexSkull,
  "Animated Armor": GiArmorVest,
  "Ankheg": GiAnt,
  "Ankylosaurus": GiArmadilloTail,
  "Archelon": GiTurtle,
  "Azer Sentinel": GiFlame,
  "Balor": GiDaemonSkull,
  "Barbed Devil": GiSpikedDragonHead,
  "Basilisk": GiLizardTongue,
  "Bearded Devil": GiDevilMask,
  "Behir": GiLightningStorm,
  "Black Pudding": GiSlime,
  "Blink Dog": GiJumpingDog,
  "Bone Devil": GiHornedSkull,
  "Bugbear Stalker": GiGoblinHead,
  "Bulette": GiSharkJaws,
  "Centaur Trooper": GiCentaur,
  "Chimera": GiDoubleDragon,
  "Chuul": GiCrabClaw,
  "Clay Golem": GiGolemHead,
  "Cloaker": GiBatWing,
  "Cloud Giant": GiGiant,
  "Cockatrice": GiChicken,
  "Couatl": GiSeaSerpent,
  "Darkmantle": GiCloak,
  "Deva": GiAngelOutfit,
  "Dire Wolf": GiDirewolf,
  "Djinni": GiDjinn,
  "Doppelganger": GiBodySwapping,
  "Dragon Turtle": GiDragonOrb,
  "Drider": GiSpiderAlt,
  "Dryad": GiOakLeaf,
  "Earth Elemental": GiStonePile,
  "Efreeti": GiIfrit,
  "Ettercap": GiSpiderFace,
  "Ettin": GiDoubleFaceMask,
  "Fire Elemental": GiFireSilhouette,
  "Fire Giant": GiFireAxe,
  "Flesh Golem": GiFrankensteinCreature,
  "Gargoyle": GiGargoyle,
  "Gelatinous Cube": GiCube,
  "Ghost": GiGhost,
  "Ghoul": GiShamblingZombie,
  "Giant Scorpion": GiScorpion,
  "Giant Spider": GiSpiderWeb,
  "Gibbering Mouther": GiMouthWatering,
  "Gnoll Warrior": GiHyenaHead,
  "Goblin Boss": GiGoblinCamp,
  "Gorgon": GiBull,
  "Green Hag": GiWitchFace,
  "Griffon": GiGriffinSymbol,
  "Harpy": GiHarpy,
  "Hell Hound": GiHound,
  "Hill Giant": GiOgre,
  "Hydra": GiHydra,
  "Imp": GiImp,
  "Iron Golem": GiRobotGolem,
  "Kraken": GiKrakenTentacle,
  "Lich": GiCrownedSkull,
  "Manticore": GiSpikedTail,
  "Medusa": GiMedusaHead,
  "Mimic": GiMimicChest,
  "Minotaur of Baphomet": GiMinotaur,
  "Mummy": GiMummyHead,
  "Owlbear": GiOwl,
  "Pegasus": GiPegasus,
  "Purple Worm": GiWormMouth,
  "Sphinx of Wonder": GiEgyptianSphinx,
  "Swarm of Crawling Claws": GiClaw,
  "Tarrasque": GiDinosaurRex,
};

export const MONSTERS: Monster[] = monsterData.map((monster) => ({
  ...monster,
  size: monster.size as Monster["size"],
  icon: ICONS[monster.name],
}));
