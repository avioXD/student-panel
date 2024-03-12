import { SectionProps } from "@/models/global_props/props";

export interface UnlockSectionProps extends SectionProps {
  link: string;
  linkText: string;
  icon: string;
}

export const unlockSectionContent: UnlockSectionProps = {
  title: "Unlock Premium Access!",
  description:
    "Upgrade to Premium for Exclusive Benefits! 🚀 Subscribe Now and Elevate Your Learning Experience!",
  link: "/subscribe",
  linkText: "See Subscription Plans",
  icon: "/assets/svgs/eye-rupees.svg",
};
