import { SectionProps } from "../../content";

export interface InstructorSectionProps extends SectionProps {
  link: string;
}

export interface InstructorCardProps {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export const instructorSection: InstructorSectionProps = {
  title: `Guiding Stars:
        Meet Our Instructors`,
  description:
    "🌟 Get Inspired by Our Team of Experienced Mentors Ready to Support Your Learning Journey 🚀",
  link: "Link",
};

const instructors: InstructorCardProps[] = [
  {
    id: "1",
    name: "John Doe",
    designation: "Software Engineer",
    description:
      "John is a software engineer with 10 years of experience in the tech industry. He is passionate about teaching and mentoring aspiring developers.",
    image:
      "https://unsplash.com/photos/grayscale-photo-of-man-c_GmwfHBDzk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  },
  {
    id: "2",
    name: "Jane Doe",
    designation: "Data Scientist",
    description:
      "Jane is a data scientist with a passion for teaching and mentoring. She has experience in machine learning and data analytics.",
    image:
      "https://unsplash.com/photos/grayscale-photo-of-man-c_GmwfHBDzk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  },
  {
    id: "3",
    name: "Alex Smith",
    designation: "UX Designer",
    description:
      "Alex is a UX designer with a background in graphic design. He is passionate about teaching and mentoring aspiring designers.",
    image:
      "https://unsplash.com/photos/grayscale-photo-of-man-c_GmwfHBDzk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  },
  {
    id: "4",
    name: "Eva Johnson",
    designation: "Product Manager",
    description:
      "Eva is a product manager with experience in product development and management. She is passionate about teaching and mentoring aspiring product managers.",
    image:
      "https://unsplash.com/photos/grayscale-photo-of-man-c_GmwfHBDzk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
  },
];
