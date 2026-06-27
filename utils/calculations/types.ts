export interface WindowInput {
  width: number; // feet
  height: number; // feet
  quantity: number;
}

export interface FramePiece {
  name: string;
  length: number; // feet
  quantity: number;
  totalLength: number;
}

export interface MaterialCalculation {
  mainFrame: FramePiece[];
  glassFrame: FramePiece[];
  netFrame: FramePiece[];
  glassArea: number;
}

export interface CostBreakdown {
  aluminiumCost: number;
  glassCost: number;
  hardwareCost: number;
  labourCost: number;
  totalCost: number;
}

export interface QuotationResult {
  materials: MaterialCalculation;
  costs: CostBreakdown;
}