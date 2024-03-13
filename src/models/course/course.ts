import { cache } from "react";

export interface CourseModel {
  id: string;
  title: string;
  category_id: string;
  domain_id: string;
  job_role_id: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  program_type: string;
  rating: number;
  students: number;
  metadata: any;
}

export const getCourses = cache(async () => {
  const response = await fetch(
    "https://f5dfjtfybg.execute-api.ap-south-1.amazonaws.com/default/courses_v1"
  );

  const data: CourseModel[] = await response.json();
  return data;
});

export const courses: CourseModel[] = [
  {
    id: "1",
    title: "Cybersecurity Essentials",
    category_id: "1",
    domain_id: "Cybersecurity",
    job_role_id: "1",
    description:
      "Learn the fundamentals of cybersecurity and how it applies to the real world.",
    duration: "3 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?cybersecurity",
    program_type: "Online",
    rating: 4.5,
    students: 100,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "2",
    title: "AWS Certified Solutions Architect",
    category_id: "2",
    domain_id: "Cloud Computing",
    job_role_id: "2",
    description:
      "Learn how to design and deploy scalable, highly available, and fault-tolerant systems on AWS.",
    duration: "6 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?cloud-computing",
    program_type: "Online",
    rating: 4.8,
    students: 200,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "3",
    title: "Data Science & Analytics",
    category_id: "3",
    domain_id: "Data Science & Analytics",
    job_role_id: "3",
    description:
      "Learn how to analyze and visualize data, build predictive models, and communicate insights.",
    duration: "9 months",
    level: "Advanced",
    image: "https://source.unsplash.com/300x200/?data-science",
    program_type: "Online",
    rating: 4.9,
    students: 300,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "4",
    title: "Introduction to Cybersecurity",
    category_id: "1",
    domain_id: "Cybersecurity",
    job_role_id: "1",
    description:
      "Learn the basics of cybersecurity and how to protect yourself online.",
    duration: "1 month",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?cybersecurity",
    program_type: "Online",
    rating: 4.2,
    students: 50,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "5",
    title: "Advanced Cybersecurity",
    category_id: "1",
    domain_id: "Cybersecurity",
    job_role_id: "1",
    description:
      "Take your cybersecurity skills to the next level with advanced techniques and strategies.",
    duration: "3 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?cybersecurity",
    program_type: "Online",
    rating: 4.7,
    students: 80,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "6",
    title: "Network Security Fundamentals",
    category_id: "1",
    domain_id: "Cybersecurity",
    job_role_id: "1",
    description:
      "Learn the basics of network security and how to secure computer networks.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?networking",
    program_type: "Online",
    rating: 4.4,
    students: 60,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "7",
    title: "Advanced Networking",
    category_id: "1",
    domain_id: "Cybersecurity",
    job_role_id: "1",
    description:
      "Take your networking skills to the next level with advanced techniques and protocols.",
    duration: "3 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?networking",
    program_type: "Online",
    rating: 4.6,
    students: 70,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "8",
    title: "Introduction to Artificial Intelligence",
    category_id: "4",
    domain_id: "AI",
    job_role_id: "4",
    description:
      "Learn the basics of artificial intelligence and its applications in various industries.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?artificial-intelligence",
    program_type: "Online",
    rating: 4.3,
    students: 70,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "9",
    title: "Machine Learning Fundamentals",
    category_id: "4",
    domain_id: "AI",
    job_role_id: "4",
    description:
      "Learn the basics of machine learning and how to build predictive models.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?machine-learning",
    program_type: "Online",
    rating: 4.5,
    students: 80,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "10",
    title: "Deep Learning",
    category_id: "4",
    domain_id: "AI",
    job_role_id: "4",
    description:
      "Dive deep into the world of deep learning and neural networks.",
    duration: "3 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?deep-learning",
    program_type: "Online",
    rating: 4.8,
    students: 100,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "11",
    title: "Web Development Fundamentals",
    category_id: "5",
    domain_id: "Web",
    job_role_id: "5",
    description:
      "Learn the basics of web development and build your own websites.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?web-development",
    program_type: "Online",
    rating: 4.2,
    students: 60,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "12",
    title: "Advanced Web Development",
    category_id: "5",
    domain_id: "Web",
    job_role_id: "5",
    description:
      "Take your web development skills to the next level with advanced techniques and frameworks.",
    duration: "3 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?web-development",
    program_type: "Online",
    rating: 4.6,
    students: 80,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "13",
    title: "Introduction to Machine Learning",
    category_id: "4",
    domain_id: "AI",
    job_role_id: "4",
    description:
      "Get started with machine learning and learn how to apply it to real-world problems.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?machine-learning",
    program_type: "Online",
    rating: 4.4,
    students: 70,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "14",
    title: "Artificial Intelligence Ethics",
    category_id: "4",
    domain_id: "AI",
    job_role_id: "4",
    description:
      "Explore the ethical considerations and implications of artificial intelligence.",
    duration: "1 month",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?artificial-intelligence",
    program_type: "Online",
    rating: 4.7,
    students: 50,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "15",
    title: "Web Design Fundamentals",
    category_id: "5",
    domain_id: "Web",
    job_role_id: "5",
    description:
      "Learn the basics of web design and create visually appealing websites.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?web-design",
    program_type: "Online",
    rating: 4.3,
    students: 60,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "16",
    title: "Advanced Web Design",
    category_id: "5",
    domain_id: "Web",
    job_role_id: "5",
    description:
      "Take your web design skills to the next level with advanced techniques and tools.",
    duration: "3 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?web-design",
    program_type: "Online",
    rating: 4.5,
    students: 80,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "17",
    title: "Introduction to Networking",
    category_id: "2",
    domain_id: "Networking",
    job_role_id: "2",
    description:
      "Learn the basics of computer networking and how data is transmitted over networks.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?networking",
    program_type: "Online",
    rating: 4.2,
    students: 70,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "18",
    title: "Network Security",
    category_id: "2",
    domain_id: "Networking",
    job_role_id: "2",
    description:
      "Learn how to secure computer networks and protect against cyber threats.",
    duration: "3 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?networking",
    program_type: "Online",
    rating: 4.6,
    students: 90,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "19",
    title: "Introduction to Data Science",
    category_id: "3",
    domain_id: "Data Science",
    job_role_id: "3",
    description:
      "Get started with data science and learn how to analyze and interpret data.",
    duration: "2 months",
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?data-science",
    program_type: "Online",
    rating: 4.4,
    students: 80,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
  {
    id: "20",
    title: "Advanced Data Science",
    category_id: "3",
    domain_id: "Data Science",
    job_role_id: "3",
    description:
      "Take your data science skills to the next level with advanced techniques and algorithms.",
    duration: "3 months",
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?data-science",
    program_type: "Online",
    rating: 4.7,
    students: 100,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
];
