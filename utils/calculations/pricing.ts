import { PricingInput, PricingResult } from "./types";

export function calculatePricing(
  data: PricingInput
): PricingResult {
  const { materials } = data;

  // ============================
  // Aluminium
  // ============================

  // Main frame: Bottom profile is different. Top, left, right are main profile.
  const mainProfileCost =
    (materials.mainFrame.top + materials.mainFrame.left + materials.mainFrame.right) * data.mainProfilePrice;

  const bottomProfileCost =
    materials.mainFrame.bottom * data.bottomProfilePrice;

  // Glass frame: Three different profiles (Top/Bottom, Left, Right)
  const glassTopBottomCost =
    (materials.glassFrame.top + materials.glassFrame.bottom) * data.glassTopBottomPrice;

  const glassLeftCost =
    materials.glassFrame.left * data.glassLeftPrice;

  const glassRightCost =
    materials.glassFrame.right * data.glassRightPrice;

  // Net frame: One aluminium profile for all sides.
  const netProfileCost =
    materials.netFrame.total * data.netProfilePrice;

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
    materials.glassArea * data.glassPricePerSqft;

  // ============================
  // Grand Total
  // ============================

  const totalCost =
    aluminiumCost +
    glassCost +
    data.hardwareCost +
    data.labourCost;

  return {
    materials,
    pricing: {
      aluminiumCost,
      glassCost,
      hardwareCost: data.hardwareCost,
      labourCost: data.labourCost,
      totalCost,
    },
  };
}