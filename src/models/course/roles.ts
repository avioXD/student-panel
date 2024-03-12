import { CourseModel } from "./course";

export interface JobRolesModel {
  id: string;
  title: string;
  description: string;
  courses?: CourseModel[];
  totalDuration?: number;
}

export const jobRoles: JobRolesModel[] = [
  {
    id: "1",
    title: "Data Analyst",
    description:
      "Data Analysts are responsible for collecting, processing, and performing statistical analyses of data. They are also responsible for creating reports and visualizations to help businesses make data-driven decisions.",
  },
  {
    id: "2",
    title: "Data Scientist",
    description:
      "Data Scientists are responsible for collecting, processing, and performing statistical analyses of data. They are also responsible for creating reports and visualizations to help businesses make data-driven decisions.",
  },
  {
    id: "3",
    title: "Data Engineer",
    description:
      "Data Engineers are responsible for collecting, processing, and performing statistical analyses of data. They are also responsible for creating reports and visualizations to help businesses make data-driven decisions.",
  },
  {
    id: "4",
    title: "Business Analyst",
    description:
      "Business Analysts are responsible for collecting, processing, and performing statistical analyses of data. They are also responsible for creating reports and visualizations to help businesses make data-driven decisions.",
  },
  {
    id: "5",
    title: "Machine Learning Engineer",
    description:
      "Machine Learning Engineers are responsible for collecting, processing, and performing statistical analyses of data. They are also responsible for creating reports and visualizations to help businesses make data-driven decisions.",
  },
  {
    id: "6",
    title: "Data Architect",
    description:
      "Data Architects are responsible for collecting, processing, and performing statistical analyses of data. They are also responsible for creating reports and visualizations to help businesses make data-driven decisions.",
  },
];
