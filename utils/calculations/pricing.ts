import { CostBreakdown } from "./types";

export interface PricingInput {
  // Aluminium Prices (Per Foot)
  mainProfilePrice: number;
  bottomProfilePrice: number;

  glassTopBottomPrice: number;
  glassLeftPrice: number;
  glassRightPrice: number;

  netProfilePrice: number;

  // Material Lengths (Feet)
  mainProfileLength: number;
  bottomProfileLength: number;

  glassTopBottomLength: number;
  glassLeftLength: number;
  glassRightLength: number;

  netProfileLength: number;

  // Glass
  glassArea: number;
  glassPricePerSqft: number;

  // Additional Costs
  hardwareCost: number;
  labourCost: number;
}

export function calculatePricing(
  data: PricingInput
): CostBreakdown {

  // ============================
  // Aluminium
  // ============================

  const mainProfileCost =
    data.mainProfileLength * data.mainProfilePrice;

  const bottomProfileCost =
    data.bottomProfileLength * data.bottomProfilePrice;

  const glassTopBottomCost =
    data.glassTopBottomLength * data.glassTopBottomPrice;

  const glassLeftCost =
    data.glassLeftLength * data.glassLeftPrice;

  const glassRightCost =
    data.glassRightLength * data.glassRightPrice;

  const netProfileCost =
    data.netProfileLength * data.netProfilePrice;

  const aluminiumCost =
    mainProfileCost +
    bottomProfileCost +
    glassTopBottomCost +
    glassLeftCost +
    glassRightCost +
    netProfileCost;

  // ============================
  // Glass
  // ============================

  const glassCost =
    data.glassArea * data.glassPricePerSqft;

  // ============================
  // Grand Total
  // ============================

  const totalCost =
    aluminiumCost +
    glassCost +
    data.hardwareCost +
    data.labourCost;

  return {
    aluminiumCost,
    glassCost,
    hardwareCost: data.hardwareCost,
    labourCost: data.labourCost,
    totalCost,
  };
}