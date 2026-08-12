import type { IconType } from "react-icons";
import {
  GiAngelOutfit, GiAnt, GiArmadillo, GiArmorVest, GiBatWing, GiBeard,
  GiBodySwapping, GiBroadsword, GiBull, GiCentaur, GiChicken, GiClaw, GiCloak,
  GiCrabClaw, GiCube, GiDaemonSkull, GiDeadHead, GiDevilMask, GiDinosaurRex,
  GiDirewolf, GiDjinn, GiDogHouse, GiDoubleFaceMask, GiDragonOrb, GiEgyptianSphinx,
  GiFireSilhouette, GiFlame, GiFrankensteinCreature, GiGargoyle, GiGhost, GiGiant,
  GiGoblinCamp, GiGoblinHead, GiGolemHead, GiGriffinSymbol, GiHarpy,
  GiHillConquest, GiHornedSkull, GiHydra, GiHyenaHead, GiIfrit, GiImp,
  GiKrakenTentacle, GiLion, GiLightningStorm, GiLizardTongue, GiMedusaHead,
  GiMimicChest, GiMinotaur, GiMonsterGrasp, GiMouthWatering, GiMummyHead,
  GiOakLeaf, GiOwl, GiPegasus, GiRobotGolem, GiSandSnake, GiScorpion,
  GiShamblingZombie, GiSlime, GiSpiderAlt, GiSpiderFace, GiSpiderWeb, GiStonePile,
  GiTentaclesBarrier, GiThreeFriends, GiTornado, GiTRexSkull, GiTurtle,
  GiWingedSword, GiWitchFace, GiWormMouth,
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
  "Ankylosaurus": GiArmadillo,
  "Archelon": GiTurtle,
  "Azer Sentinel": GiFlame,
  "Balor": GiDaemonSkull,
  "Barbed Devil": GiDevilMask,
  "Basilisk": GiLizardTongue,
  "Bearded Devil": GiBeard,
  "Behir": GiLightningStorm,
  "Black Pudding": GiSlime,
  "Blink Dog": GiDogHouse,
  "Bone Devil": GiHornedSkull,
  "Bugbear Stalker": GiGoblinHead,
  "Bulette": GiSandSnake,
  "Centaur Trooper": GiCentaur,
  "Chimera": GiMonsterGrasp,
  "Chuul": GiCrabClaw,
  "Clay Golem": GiGolemHead,
  "Cloaker": GiBatWing,
  "Cloud Giant": GiGiant,
  "Cockatrice": GiChicken,
  "Couatl": GiWingedSword,
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
  "Fire Giant": GiBroadsword,
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
  "Hell Hound": GiThreeFriends,
  "Hill Giant": GiHillConquest,
  "Hydra": GiHydra,
  "Imp": GiImp,
  "Iron Golem": GiRobotGolem,
  "Kraken": GiKrakenTentacle,
  "Lich": GiDeadHead,
  "Manticore": GiLion,
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
