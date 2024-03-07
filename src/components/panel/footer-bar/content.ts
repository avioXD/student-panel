import { categoryList } from "@/app/(public)/landing/_components/category/content";

export interface FooterSectionOptionsProps {
  id: string;
  label: string;
  link: string;
  icon?: string;
}

export interface FooterSectionProps {
  title: string;
  options: FooterSectionOptionsProps[];
}

export const companySectionContent: FooterSectionProps = {
  title: "Company",
  options: [
    {
      id: "1",
      label: "Subscription & Plans",
      link: "/landing",
    },
    {
      id: "2",
      label: "Learning Path",
      link: "/learning-path",
    },

    {
      id: "3",
      label: "About us",
      link: "/about-us",
    },
    {
      id: "4",
      label: "Contact Us",
      link: "/contact-us",
    },
    {
      id: "5",
      label: "Login",
      link: "/login",
    },
  ],
};

export const programCategorySectionContent: FooterSectionProps = {
  title: "Program Categories",
  options: categoryList.map((category) => ({
    id: category.id,
    label: category.title,
    link: `/category/${category.title.toLowerCase().replaceAll(" ", "-")}`,
  })),
};

export const LinksSectionContent: FooterSectionProps = {
  title: "Links",
  options: [
    {
      id: "1",
      label: "Terms & Conditions",
      link: "/terms-and-conditions",
    },
    {
      id: "2",
      label: "Privacy Policy",
      link: "/privacy-policy",
    },
    {
      id: "3",
      label: "Refund Policy",
      link: "/refund-policy",
    },
  ],
};

export const socialMediaSectionContent: FooterSectionProps = {
  title: "Contact Us",
  options: [
    {
      id: "1",
      label: "Facebook",
      link: "https://www.facebook.com",
      icon: "/assets/icons/facebook.svg",
    },
    {
      id: "2",
      label: "Twitter",
      link: "https://www.twitter.com",
      icon: "/assets/icons/twitter.svg",
    },
    {
      id: "3",
      label: "Instagram",
      link: "https://www.instagram.com",
      icon: "/assets/icons/instagram.svg",
    },
    {
      id: "4",
      label: "LinkedIn",
      link: "https://www.linkedin.com",
      icon: "/assets/icons/linkedin.svg",
    },
  ],
};
