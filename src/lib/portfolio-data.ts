import type { PortfolioItem } from "@/components/PortfolioGrid";
import collectorLuxury from "../../public/images/diamonds/Collector Luxury.png";
import eliteDiamond from "../../public/images/diamonds/Elite Diamond.png";
import exceptionalDiamond from "../../public/images/diamonds/Exceptional Diamond.png";
import heritageLuxury from "../../public/images/diamonds/Heritage Luxury.png";
import investmentDiamond from "../../public/images/diamonds/Investment Diamond.png";
import rareLuxuryDiamond from "../../public/images/diamonds/Rare Luxury Diamond.png";
import ultraLuxuryGreen from "../../public/images/diamonds/Ultra Luxury Green Diamond.png";
import ultraLuxuryPink from "../../public/images/diamonds/Ultra Luxury Pink Diamond.png";
import bangles from "../../public/images/platinum/Platinum Bangles.png";
import chain from "../../public/images/platinum/Platinum Chain.png";
import earrings from "../../public/images/platinum/Platinum Earrings.png";
import ring from "../../public/images/platinum/Platinum Ring.png";
import emeraldRing from "../../public/images/gemstones/Emerald Ring & Gemstone Collection.jpg";
import gemstonePendantTrio from "../../public/images/gemstones/Gemstone Pendant Trio.jpg";
import gemstonePendantTrioIvory from "../../public/images/gemstones/Gemstone Pendant Trio Ivory.jpg";
import aigner from "../../public/images/watches/AIGNER.png";
import audemarsPiguet from "../../public/images/watches/Audemars Piguet.png";
import balmain from "../../public/images/watches/BALMAIN.png";
import cartier from "../../public/images/watches/Cartier.png";
import graffDiamonds from "../../public/images/watches/Graff Diamonds Hallucination.png";
import jacobCo from "../../public/images/watches/Jacob & Co.png";
import patekPhilippe from "../../public/images/watches/Patek Philippe.png";
import rolex from "../../public/images/watches/Rolex.png";

export const DIAMOND_ITEMS: PortfolioItem[] = [
  { image: collectorLuxury, name: "Collector Luxury", spec: "CERTIFIED AUTHENTIC" },
  { image: eliteDiamond, name: "Elite Diamond", spec: "CERTIFIED AUTHENTIC" },
  { image: exceptionalDiamond, name: "Exceptional Diamond", spec: "CERTIFIED AUTHENTIC" },
  { image: heritageLuxury, name: "Heritage Luxury", spec: "CERTIFIED AUTHENTIC" },
  { image: investmentDiamond, name: "Investment Diamond", spec: "CERTIFIED AUTHENTIC" },
  { image: rareLuxuryDiamond, name: "Rare Luxury Diamond", spec: "CERTIFIED AUTHENTIC" },
  { image: ultraLuxuryGreen, name: "Ultra Luxury Green Diamond", spec: "CERTIFIED AUTHENTIC" },
  { image: ultraLuxuryPink, name: "Ultra Luxury Pink Diamond", spec: "CERTIFIED AUTHENTIC" },
];

export const PLATINUM_ITEMS: PortfolioItem[] = [
  { image: bangles, name: "Platinum Bangles", spec: "CERTIFIED PLATINUM" },
  { image: chain, name: "Platinum Chain", spec: "CERTIFIED PLATINUM" },
  { image: earrings, name: "Platinum Earrings", spec: "CERTIFIED PLATINUM" },
  { image: ring, name: "Platinum Ring", spec: "CERTIFIED PLATINUM" },
];

export const GEMSTONE_ITEMS: PortfolioItem[] = [
  { image: emeraldRing, name: "Emerald Ring & Gemstone Collection", spec: "CERTIFIED AUTHENTIC" },
  { image: gemstonePendantTrio, name: "Gemstone Pendant Trio", spec: "CERTIFIED AUTHENTIC" },
  { image: gemstonePendantTrioIvory, name: "Gemstone Pendant Trio", spec: "CERTIFIED AUTHENTIC" },
];

export const WATCH_ITEMS: PortfolioItem[] = [
  { image: aigner, name: "AIGNER", spec: "CERTIFIED AUTHENTIC" },
  { image: audemarsPiguet, name: "Audemars Piguet", spec: "CERTIFIED AUTHENTIC" },
  { image: balmain, name: "BALMAIN", spec: "CERTIFIED AUTHENTIC" },
  { image: cartier, name: "Cartier", spec: "CERTIFIED AUTHENTIC" },
  { image: graffDiamonds, name: "Graff Diamonds Hallucination", spec: "CERTIFIED AUTHENTIC" },
  { image: jacobCo, name: "Jacob & Co.", spec: "CERTIFIED AUTHENTIC" },
  { image: patekPhilippe, name: "Patek Philippe", spec: "CERTIFIED AUTHENTIC" },
  { image: rolex, name: "Rolex", spec: "CERTIFIED AUTHENTIC" },
];
