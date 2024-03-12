import { CourseModel } from "./course";

export interface DomainModel {
  id: string;
  title: string;
  description: string;
}

export const domains: DomainModel[] = [
  {
    id: "1",
    title: "Digital Marketing",
    description:
      "Learn how to create and implement effective digital marketing strategies.",
  },
  {
    id: "2",
    title: "Artificial Intelligence",
    description:
      "Explore the fascinating world of artificial intelligence and machine learning.",
  },
  {
    id: "3",
    title: "Cloud Computing",
    description:
      "Learn about the fundamentals and best practices of cloud computing.",
  },
  {
    id: "4",
    title: "Cybersecurity",
    description:
      "Discover the principles and techniques to protect computer systems and data from cyber threats.",
  },
  {
    id: "5",
    title: "Cloud Architecture",
    description:
      "Master the design and implementation of scalable and resilient cloud architectures.",
  },
  {
    id: "6",
    title: "Data Science",
    description:
      "Gain insights from data and learn how to extract valuable information using statistical analysis and machine learning techniques.",
  },
];
