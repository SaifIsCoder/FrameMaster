import {
  calculateSlidingWindow,
  calculatePricing,
  generateQuotation,
} from "../utils/calculations";

import {
  CustomerInfo,
  WindowInput,
  PricingInput,
  Quotation,
} from "../utils/calculations/types";

export interface CalculationRequest {
  customer: CustomerInfo;
  window: WindowInput;
  pricing: Omit<PricingInput, "materials">;
}

export class CalculationService {
  static calculate(
    request: CalculationRequest
  ): Quotation {
    // Step 1: Calculate material lengths
    const materialResult = calculateSlidingWindow(
      request.window
    );

    // Step 2: Calculate pricing
    const pricingResult = calculatePricing({
      ...request.pricing,
      materials: materialResult.materials,
    });

    // Step 3: Build quotation
    return generateQuotation({
      customer: request.customer,
      windowDetails: request.window,
      materials: pricingResult.materials,
      pricing: pricingResult.pricing,
    });
  }
}

export default CalculationService;