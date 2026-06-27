export interface WindowInput {
  width: number; // feet
  height: number; // feet
  quantity: number;
}

export interface FrameSides {
  top: number;
  bottom: number;
  left: number;
  right: number;
  total: number;
}

export interface Materials {
  mainFrame: FrameSides;
  glassFrame: FrameSides;
  netFrame: FrameSides;
  glassArea: number;
}

export interface MaterialCalculation {
  materials: Materials;
}

export interface PricingInput {
  // Aluminium Prices (Per Foot)
  mainProfilePrice: number;
  bottomProfilePrice: number;

  glassTopBottomPrice: number;
  glassLeftPrice: number;
  glassRightPrice: number;

  netProfilePrice: number;

  // Glass
  glassPricePerSqft: number;

  // Additional Costs
  hardwareCost: number;
  labourCost: number;

  materials: Materials;
}

export interface Pricing {
  aluminiumCost: number;
  glassCost: number;
  hardwareCost: number;
  labourCost: number;
  totalCost: number;
}

export interface PricingResult {
  materials: Materials;
  pricing: Pricing;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  address?: string;
}

export interface Quotation {
  customer: CustomerInfo;
  windowDetails: WindowInput;
  materials: Materials;
  pricing: Pricing;
}