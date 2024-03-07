import { SectionProps } from "../../content";

export interface WtsSectionProps extends SectionProps {
  link: string;
  linkText: string;
  icon: string;
}

export const wtsSectionContent: WtsSectionProps = {
  title: "Not Sure Where to Start?",
  description:
    "Let us guide you to the perfect fit! Take our short quiz to discover which course aligns best with your interests, goals, and skill level. Let's start your learning journey together!",
  link: "/subscribe",
  linkText: "Take a skill test",
  icon: "/assets/svgs/wts-rocket.svg",
};
