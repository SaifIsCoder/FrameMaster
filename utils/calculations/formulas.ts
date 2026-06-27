/**
 * FrameMaster Calculation Formulas
 * All measurements are in Feet.
 */

/**
 * Main Frame
 */

export function mainFrameTop(width: number): number {
  return width;
}

export function mainFrameBottom(width: number): number {
  return width;
}

export function mainFrameLeft(height: number): number {
  return height;
}

export function mainFrameRight(height: number): number {
  return height;
}

/**
 * Glass Frame (Sash)
 */

export function glassFrameTop(width: number): number {
  return width / 2;
}

export function glassFrameBottom(width: number): number {
  return width / 2;
}

export function glassFrameLeft(height: number): number {
  return height;
}

export function glassFrameRight(height: number): number {
  return height;
}

/**
 * Net Frame
 */

export function netFrameTop(width: number): number {
  return width / 2;
}

export function netFrameBottom(width: number): number {
  return width / 2;
}

export function netFrameLeft(height: number): number {
  return height;
}

export function netFrameRight(height: number): number {
  return height;
}

/**
 * Glass Area
 */

export function glassArea(
  width: number,
  height: number
): number {
  return width * height;
}