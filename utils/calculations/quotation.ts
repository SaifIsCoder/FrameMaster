import { CustomerInfo, WindowInput, Materials, Pricing, Quotation } from "./types";

export interface GenerateQuotationInput {
  customer: CustomerInfo;
  windowDetails: WindowInput;
  materials: Materials;
  pricing: Pricing;
}

export function generateQuotation(input: GenerateQuotationInput): Quotation {
  return {
    customer: input.customer,
    windowDetails: input.windowDetails,
    materials: input.materials,
    pricing: input.pricing,
  };
}
