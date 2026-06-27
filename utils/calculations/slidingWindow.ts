import { glassArea } from "./formulas";
import { MaterialCalculation, WindowInput } from "./types";

export function calculateSlidingWindow(
  input: WindowInput
): MaterialCalculation {
  const { width, height, quantity } = input;

  // ===========================
  // Main Frame
  // ===========================

  const mainTop = width;
  const mainLeft = height;
  const mainRight = height;
  const mainBottom = width;

  const mainProfileTotal =
    (mainTop + mainLeft + mainRight + 1) * quantity;

  const bottomProfileTotal =
    mainBottom * quantity;

  // ===========================
  // Glass Frame (Sash)
  // ===========================

  const glassTop = width / 2;
  const glassBottom = width / 2;
  const glassLeft = height;
  const glassRight = height;

  const glassTopBottomTotal =
    (glassTop + glassBottom) * quantity;

  const glassLeftTotal =
    glassLeft * quantity;

  const glassRightTotal =
    glassRight * quantity;

  // ===========================
  // Net Frame
  // ===========================

  const netTop = width / 2;
  const netBottom = width / 2;
  const netLeft = height;
  const netRight = height;

  const netProfileTotal =
    (netTop + netBottom + netLeft + netRight) * quantity;

  // ===========================
  // Glass
  // ===========================

  const totalGlassArea =
    glassArea(width, height) * quantity;

  return {
    mainFrame: [
      {
        name: "Main Profile",
        length: mainProfileTotal,
        quantity,
        totalLength: mainProfileTotal,
      },
      {
        name: "Bottom Profile",
        length: bottomProfileTotal,
        quantity,
        totalLength: bottomProfileTotal,
      },
    ],

    glassFrame: [
      {
        name: "Top/Bottom Profile",
        length: glassTopBottomTotal,
        quantity,
        totalLength: glassTopBottomTotal,
      },
      {
        name: "Left Profile",
        length: glassLeftTotal,
        quantity,
        totalLength: glassLeftTotal,
      },
      {
        name: "Right Profile",
        length: glassRightTotal,
        quantity,
        totalLength: glassRightTotal,
      },
    ],

    netFrame: [
      {
        name: "Net Profile",
        length: netProfileTotal,
        quantity,
        totalLength: netProfileTotal,
      },
    ],

    glassArea: totalGlassArea,
  };
}