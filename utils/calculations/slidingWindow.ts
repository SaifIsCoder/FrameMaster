import { glassArea } from "./formulas";
import { MaterialCalculation, WindowInput } from "./types";

export function calculateSlidingWindow(
  input: WindowInput
): MaterialCalculation {
  const { width, height, quantity } = input;

  // ===========================
  // Main Frame
  // ===========================

  const mainTop = (width + 1) * quantity;
  const mainBottom = width * quantity;
  const mainLeft = height * quantity;
  const mainRight = height * quantity;

  // ===========================
  // Glass Frame (Sash)
  // ===========================

  const glassTop = (width / 2) * quantity;
  const glassBottom = (width / 2) * quantity;
  const glassLeft = height * quantity;
  const glassRight = height * quantity;

  // ===========================
  // Net Frame
  // ===========================

  const netTop = (width / 2) * quantity;
  const netBottom = (width / 2) * quantity;
  const netLeft = height * quantity;
  const netRight = height * quantity;

  // ===========================
  // Glass
  // ===========================

  const totalGlassArea = glassArea(width, height) * quantity;

  return {
    materials: {
      mainFrame: {
        top: mainTop,
        bottom: mainBottom,
        left: mainLeft,
        right: mainRight,
        total: mainTop + mainBottom + mainLeft + mainRight,
      },
      glassFrame: {
        top: glassTop,
        bottom: glassBottom,
        left: glassLeft,
        right: glassRight,
        total: glassTop + glassBottom + glassLeft + glassRight,
      },
      netFrame: {
        top: netTop,
        bottom: netBottom,
        left: netLeft,
        right: netRight,
        total: netTop + netBottom + netLeft + netRight,
      },
      glassArea: totalGlassArea,
    },
  };
}