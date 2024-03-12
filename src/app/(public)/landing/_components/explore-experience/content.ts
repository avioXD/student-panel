import { SectionProps } from "@/models/global_props/props";

export interface ExploreExperienceProps extends SectionProps {
  link?: string;
}

export interface ExploreExperienceCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
}

export const exploreExperience: ExploreExperienceProps = {
  title: "Ready to Explore a New Experience?",
  description:
    "🚀 Explore a new learning experience with expert instruction and a supportive community. Unlock your full potential with us! 😎 Join today and embark on a journey to success.",
  link: "Link",
};

export const experiences: ExploreExperienceCardProps[] = [
  {
    id: "1",
    title: "Expert Instruction",
    description:
      "Benefit from top-notch instruction provided by industry experts and experienced educators.",
    image: "https://source.unsplash.com/300x200/?expert",
  },
  {
    id: "2",
    title: "Diverse Course Offerings",
    description:
      "Explore a wide range of courses spanning various subjects, ensuring there's something for everyone.",
    image: "https://source.unsplash.com/300x200/?expert",
  },
  {
    id: "3",
    title: "Supportive Community",
    description:
      "Connect with like-minded individuals and form lasting connections with our supportive community.",
    image: "https://source.unsplash.com/300x200/?expert",
  },
  {
    id: "4",
    title: "Flexible Learning",
    description:
      "Enjoy the flexibility of learning at your own pace and on your own schedule.",
    image: "https://source.unsplash.com/300x200/?expert",
  },
  {
    id: "5",
    title: "Career Growth",
    description:
      "Advance your career with our courses and gain the skills you need to succeed in today's job market.",
    image: "https://source.unsplash.com/300x200/?expert",
  },
  {
    id: "6",
    title: "Lifetime Access",
    description:
      "Gain lifetime access to our courses and resources, ensuring you can always revisit and refresh your knowledge.",
    image: "https://source.unsplash.com/300x200/?expert",
  },
];
