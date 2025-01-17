import { cache } from "react";

export interface CourseModel {
  id: string;
  title: string;
  category_id: string;
  domain_id: string;
  job_role_id: string;
  description: string;
  duration: number;
  level: string;
  image: string;
  program_type: string;
  rating: number;
  students: number;
  paid: boolean;
  metadata: any;
}

// export const getCourses = cache(async () => {
//   return [];
// });

export const getCourses = async () => {
  return [];
};

export const courses: CourseModel[] = [
  {
    id: "1",
    title: "Cybersecurity Essentials",
    category_id: "1",
    domain_id: "Cybersecurity",
    job_role_id: "1",
    description:
      "Explore Golang essentials: syntax, concurrency, and efficiency in this beginner-friendly course. Learn to develop scalable applications with one of the fastest-growing programming languages. 💻",
    duration: 3,
    level: "Beginner",
    image:
      "https://i1.wp.com/itnews.blog.fordham.edu/wp-content/uploads/2016/11/AdobeStock_67901546-2.jpg",
    program_type: "Online",
    rating: 4.5,
    students: 100,
    paid: true,
    metadata: {
      program_overview:
        "Join our Golang course and master the fundamentals of the language, including syntax and concurrency. Dive into practical exercises to develop efficient, scalable applications. Whether you're a beginner or seasoned developer, our comprehensive curriculum will elevate your Golang skills. Explore the power of Golang in building robust software solutions. Enroll now to start your journey towards becoming a proficient Golang developer. Learn more...",
      why_learn: {
        title: "Why Should You Learn Golang?",
        content: `Uncover Golang's efficiency with its concurrency model, clean syntax, and fast compilation. Leverage its robust standard library and cross-platform support. Equip yourself with essential tools like GoLand, Go Modules, Delve, Ginkgo & Gomega, and Docker for seamless development, dependency management, debugging, testing, and deployment. Embrace Golang's versatility for scalable and efficient applications.`,
      },
      tools: {
        title: "Tools to Master",
        content: ["GoLand", "Go Modules", "Delve", "Ginkgo & Gomega", "Docker"],
      },
      curriculum: {
        title: "Course Curriculum",
        content: [
          {
            title: "001. Introduction to Golang",
            content: [
              {
                type: "video",
                label: "Setting Up Golang Environment (14 mins)",
                preview: "https://www.youtube.com/watch?v=3l4nVByCL44",
              },
              {
                type: "video",
                label: "Golang Syntax (07 mins)",
                preview: "https://www.youtube.com/watch?v=3l4nVByCL44",
              },
              {
                type: "document",
                label: "Golang Concurrency",
              },
              {
                type: "lab",
                label: "Lab introduction",
              },
              {
                type: "resource",
                label: "Resource",
              },
              {
                type: "quiz",
                label: "Quiz",
              },
              {
                type: "lab",
                label: "Assignment",
              },
            ],
          },
          {
            title: "002. Intermediate Golang",
            content: [
              {
                type: "video",
                label: "Golang Packages",
              },
              {
                type: "document",
                label: "Error Handling in Golang",
              },
              {
                type: "lab",
                label: "Lab exercises",
              },
              {
                type: "resource",
                label: "Additional resources",
              },
              {
                type: "quiz",
                label: "Quiz",
              },
            ],
          },
          {
            title: "003. Advanced Golang",
            content: [
              {
                type: "video",
                label: "Golang Concurrency Patterns",
              },
              {
                type: "document",
                label: "Golang Reflection",
              },
              {
                type: "lab",
                label: "Lab exercises",
              },
              {
                type: "resource",
                label: "Additional resources",
              },
              {
                type: "quiz",
                label: "Quiz",
              },
            ],
          },
          {
            title: "004. Golang Web Development",
            content: [
              {
                type: "video",
                label: "Introduction to Web Development with Golang",
              },
              {
                type: "document",
                label: "Building RESTful APIs with Golang",
              },
              {
                type: "lab",
                label: "Lab exercises",
              },
              {
                type: "resource",
                label: "Additional resources",
              },
              {
                type: "quiz",
                label: "Quiz",
              },
            ],
          },
        ],
      },
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
    duration: 6,
    level: "Intermediate",
    image:
      "https://th.bing.com/th/id/OIP.W9xeEQDheQIrIEi-95qzhwHaE8?rs=1&pid=ImgDetMain",
    program_type: "Online",
    rating: 4.8,
    students: 200,
    paid: true,
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
    duration: 9,
    level: "Advanced",
    image: "https://source.unsplash.com/300x200/?data-science",
    program_type: "Online",
    rating: 4.9,
    students: 300,
    paid: true,
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
    duration: 1,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?cybersecurity",
    program_type: "Online",
    rating: 4.2,
    students: 50,
    paid: true,
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
    duration: 3,
    level: "Intermediate",
    image:
      "https://th.bing.com/th/id/OIP.W9xeEQDheQIrIEi-95qzhwHaE8?rs=1&pid=ImgDetMain",
    program_type: "Online",
    rating: 4.7,
    students: 80,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image:
      "https://th.bing.com/th/id/OIP.W9xeEQDheQIrIEi-95qzhwHaE8?rs=1&pid=ImgDetMain",
    program_type: "Online",
    rating: 4.4,
    students: 60,
    paid: true,
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
    duration: 3,
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?networking",
    program_type: "Online",
    rating: 4.6,
    students: 70,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?artificial-intelligence",
    program_type: "Online",
    rating: 4.3,
    students: 70,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?machine-learning",
    program_type: "Online",
    rating: 4.5,
    students: 80,
    paid: true,
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
    duration: 3,
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?deep-learning",
    program_type: "Online",
    rating: 4.8,
    students: 100,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?web-development",
    program_type: "Online",
    rating: 4.2,
    students: 60,
    paid: true,
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
    duration: 3,
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?web-development",
    program_type: "Online",
    rating: 4.6,
    students: 80,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?machine-learning",
    program_type: "Online",
    rating: 4.4,
    students: 70,
    paid: true,
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
    duration: 1,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?artificial-intelligence",
    program_type: "Online",
    rating: 4.7,
    students: 50,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?web-design",
    program_type: "Online",
    rating: 4.3,
    students: 60,
    paid: true,
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
    duration: 3,
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?web-design",
    program_type: "Online",
    rating: 4.5,
    students: 80,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?networking",
    program_type: "Online",
    rating: 4.2,
    students: 70,
    paid: true,
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
    duration: 3,
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?networking",
    program_type: "Online",
    rating: 4.6,
    students: 90,
    paid: true,
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
    duration: 2,
    level: "Beginner",
    image: "https://source.unsplash.com/300x200/?data-science",
    program_type: "Online",
    rating: 4.4,
    students: 80,
    paid: true,
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
    duration: 3,
    level: "Intermediate",
    image: "https://source.unsplash.com/300x200/?data-science",
    program_type: "Online",
    rating: 4.7,
    students: 100,
    paid: true,
    metadata: {
      language: "English",
      subtitle: "Subtitle",
      instructor: "Instructor",
      skills: ["Skill 1", "Skill 2"],
    },
  },
];
