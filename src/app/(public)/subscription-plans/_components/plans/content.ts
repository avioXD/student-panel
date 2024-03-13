import { apiMode } from "@/lib/apimode";
import { plans, pricing } from "@/models/pricing/plans";

export const rules = [
  "No Hidden Fees",
  "Monthly & Annual Options",
  "Affordable Options",
];

export const getOffer = async () => {
  if (apiMode.isProduction) {
    return "*Get 10% OFF on Yearly Plan";
  }
  if (apiMode.isDevelopment) {
    return "*Get 10% OFF on Yearly Plan";
  }
};

export const getPricing = async () => {
  if (apiMode.isProduction) {
    return pricing;
  }
  if (apiMode.isDevelopment) {
    return pricing;
  }

  return null;
};

export const getPlans = async () => {
  if (apiMode.isProduction) {
    return plans;
  }
  if (apiMode.isDevelopment) {
    return plans;
  }
  return null;
};
