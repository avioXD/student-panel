import { SectionProps } from "@/models/global_props/props";

export interface InstructorSectionProps extends SectionProps {
  link: string;
  title_sub: string;
}

export interface InstructorCardProps {
  id: string;
  name: string;
  designation: string;
  description: string;
  image: string;
}

export const instructorSection: InstructorSectionProps = {
  title_sub: "Guiding Stars:",
  title: ` Meet Our Instructors`,
  description:
    "🌟 Get Inspired by Our Team of Experienced Mentors Ready to Support Your Learning Journey 🚀",
  link: "Link",
};

export const instructors: InstructorCardProps[] = [
  {
    id: "1",
    name: "Mr. Alex Smith",
    designation: "Senior Mentor, Full Stack Developer,",
    description:
      "Alex Smith, a seasoned full stack developer with 8 years of experience, excels in frontend and backend development. Specializing in user-friendly applications, Alex designs sleek interfaces and optimizes database performance. From building robust APIs to implementing cutting-edge technologies, Alex delivers high-quality software solutions exceeding client expectations. Passionate about staying updated on industry trends, Alex thrives in collaborative environments, leveraging teamwork and problem-solving skills to drive project success.",
    image: "https://source.unsplash.com/300x200/?person",
  },
  {
    id: "2",
    name: "Jane Doe",
    designation: "Data Scientist",
    description:
      "Jane is a data scientist with a passion for teaching and mentoring. She has experience in machine learning and data analytics.",
    image: "https://source.unsplash.com/300x200/?person",
  },
  {
    id: "3",
    name: "Alex Smith",
    designation: "UX Designer",
    description:
      "Alex is a UX designer with a background in graphic design. He is passionate about teaching and mentoring aspiring designers.",
    image: "https://source.unsplash.com/300x200/?person",
  },
  {
    id: "4",
    name: "Eva Johnson",
    designation: "Product Manager",
    description:
      "Eva is a product manager with experience in product development and management. She is passionate about teaching and mentoring aspiring product managers.",
    image: "https://source.unsplash.com/300x200/?person",
  },
];
