import type { IconType } from "react-icons";
import {
  GiAlienBug, GiAngelOutfit, GiArmadilloTail, GiArmorVest, GiBatWing, GiBearHead,
  GiBodySwapping, GiBull, GiCentaur, GiChicken, GiClaw, GiCloak,
  GiCrabClaw, GiCrocJaws, GiCrownedSkull, GiDaemonSkull, GiDevilMask,
  GiDirewolf, GiDjinn, GiDoubleDragon, GiDragonOrb, GiDwarfFace, GiEgyptianSphinx,
  GiFireAxe, GiFireSilhouette, GiFlame, GiFrankensteinCreature, GiGargoyle, GiGhost, GiGiant,
  GiGecko, GiGoblinCamp, GiGoblinHead, GiGolemHead, GiGriffinSymbol, GiHarpy,
  GiHornedSkull, GiHound, GiHydra, GiHyenaHead, GiIfrit, GiImp, GiJumpingDog,
  GiIceCube, GiKrakenTentacle, GiMedusaHead,
  GiMimicChest, GiMinotaur, GiMouthWatering, GiMummyHead,
  GiOakLeaf, GiOgre, GiOwl, GiPegasus, GiRobotGolem, GiRockGolem, GiScorpion, GiSeaDragon, GiSeaSerpent, GiSharkJaws,
  GiShamblingZombie, GiSlime, GiSpiderAlt, GiSpiderFace, GiSpiderWeb,
  GiSpikedDragonHead, GiSpikedTail, GiTentaclesBarrier, GiTornado, GiTRexSkull, GiTurtle,
  GiWitchFace, GiWormMouth,
} from "react-icons/gi";
import monsterData from "./monsters.generated.json";

const EttinIcon: IconType = () => (
  <span className="dual-creature-icon ettin-icon" aria-hidden="true">
    <GiOgre />
    <GiOgre />
  </span>
);

const OwlbearIcon: IconType = () => (
  <span className="dual-creature-icon owlbear-icon" aria-hidden="true">
    <GiOwl />
    <GiBearHead />
  </span>
);

const AzerIcon: IconType = () => (
  <span className="azer-icon" aria-hidden="true">
    <GiFlame />
    <GiDwarfFace />
  </span>
);

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
  "Ankheg": GiAlienBug,
  "Ankylosaurus": GiArmadilloTail,
  "Archelon": GiTurtle,
  "Azer Sentinel": AzerIcon,
  "Balor": GiDaemonSkull,
  "Barbed Devil": GiSpikedDragonHead,
  "Basilisk": GiGecko,
  "Bearded Devil": GiDevilMask,
  "Behir": GiSeaDragon,
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
  "Earth Elemental": GiRockGolem,
  "Efreeti": GiIfrit,
  "Ettercap": GiSpiderFace,
  "Ettin": EttinIcon,
  "Fire Elemental": GiFireSilhouette,
  "Fire Giant": GiFireAxe,
  "Flesh Golem": GiFrankensteinCreature,
  "Gargoyle": GiGargoyle,
  "Gelatinous Cube": GiIceCube,
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
  "Owlbear": OwlbearIcon,
  "Pegasus": GiPegasus,
  "Purple Worm": GiWormMouth,
  "Sphinx of Wonder": GiEgyptianSphinx,
  "Swarm of Crawling Claws": GiClaw,
  "Tarrasque": GiCrocJaws,
};

export const MONSTERS: Monster[] = monsterData.map((monster) => ({
  ...monster,
  size: monster.size as Monster["size"],
  icon: ICONS[monster.name],
}));
