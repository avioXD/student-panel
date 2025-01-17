import { SectionProps } from "@/models/global_props/props";

export interface CategoryContentProps extends SectionProps {
  link: string;
}

export interface Category {
  id: string;
  title: string;
}

export interface CourseCardProps extends SectionProps {
  id: string;
  categoryId: string;
  link: string;
  image: string;
}

export const categoryContent: CategoryContentProps = {
  title: "Find Course By Category",
  description:
    "🌟 Explore our curated collection of courses 📖 organized by category. From technology to personal development, find your next learning adventure!",
  link: "Link",
};

export const categoryList: Category[] = [
  {
    id: "1",
    title: "Cybersecurity",
  },
  {
    id: "2",
    title: "Cloud Computing",
  },
  {
    id: "3",
    title: "Data Science & Analytics",
  },
  {
    id: "4",
    title: "Digital Marketing",
  },
  {
    id: "5",
    title: "Programming & Development",
  },
];

export const coursesList: CourseCardProps[] = [
  {
    id: "1",
    categoryId: "1",
    title: "Cybersecurity Essentials",
    image:
      "https://i1.wp.com/itnews.blog.fordham.edu/wp-content/uploads/2016/11/AdobeStock_67901546-2.jpg",
    description:
      "Learn the fundamentals of cybersecurity and how it applies to the real world.",
    link: "Link",
  },
  {
    id: "2",
    categoryId: "1",
    title: "Network Security Fundamentals",
    image:
      "https://i1.wp.com/itnews.blog.fordham.edu/wp-content/uploads/2016/11/AdobeStock_67901546-2.jpg",
    description:
      "Explore the basics of securing computer networks and systems.",
    link: "Link",
  },
  {
    id: "3",
    categoryId: "1",
    title: "Ethical Hacking",
    image:
      "https://i1.wp.com/itnews.blog.fordham.edu/wp-content/uploads/2016/11/AdobeStock_67901546-2.jpg",
    description:
      "Master the techniques used by ethical hackers to secure systems.",
    link: "Link",
  },
  {
    id: "4",
    categoryId: "1",
    title: "Incident Response and Management",
    image: "https://source.unsplash.com/300x200/?incidentresponse",
    description:
      "Learn how to effectively respond to and manage cybersecurity incidents.",
    link: "Link",
  },
  {
    id: "5",
    categoryId: "1",
    title: "Cryptocurrency Security",
    image: "https://source.unsplash.com/300x200/?cryptocurrency",
    description:
      "Explore the security challenges and best practices in the cryptocurrency space.",
    link: "Link",
  },
  {
    id: "6",
    categoryId: "1",
    title: "Secure Coding Practices",
    image: "https://source.unsplash.com/300x200/?securecoding",
    description:
      "Learn how to write secure code and prevent common vulnerabilities.",
    link: "Link",
  },
  {
    id: "7",
    categoryId: "3",
    title: "Introduction to Data Science",
    image: "https://source.unsplash.com/300x200/?datascience",
    description: "Get started with the basics of data science and analytics.",
    link: "Link",
  },
  {
    id: "8",
    categoryId: "3",
    title: "Machine Learning Foundations",
    image: "https://source.unsplash.com/300x200/?machinelearning",
    description:
      "Explore the foundational concepts of machine learning and its applications.",
    link: "Link",
  },
  {
    id: "9",
    categoryId: "3",
    title: "Data Visualization Techniques",
    image: "https://source.unsplash.com/300x200/?datavisualization",
    description:
      "Learn how to effectively visualize data to gain insights and make informed decisions.",
    link: "Link",
  },
  {
    id: "10",
    categoryId: "3",
    title: "Big Data Analytics",
    image: "https://source.unsplash.com/300x200/?bigdata",
    description:
      "Explore techniques and tools for analyzing large datasets to extract valuable insights.",
    link: "Link",
  },
  {
    id: "11",
    categoryId: "3",
    title: "Deep Learning Fundamentals",
    image: "https://source.unsplash.com/300x200/?deeplearning",
    description: "Learn the basics of deep learning and neural networks.",
    link: "Link",
  },
  {
    id: "12",
    categoryId: "3",
    title: "Data Mining Techniques",
    image: "https://source.unsplash.com/300x200/?datamining",
    description:
      "Explore methods for discovering patterns and insights from large datasets.",
    link: "Link",
  },
  {
    id: "13",
    categoryId: "2",
    title: "Introduction to Cloud Computing",
    image: "https://source.unsplash.com/300x200/?cloudcomputing",
    description:
      "Learn the basics of cloud computing and its benefits for businesses.",
    link: "Link",
  },
  {
    id: "14",
    categoryId: "2",
    title: "Cloud Infrastructure Management",
    image: "https://source.unsplash.com/300x200/?cloudinfrastructure",
    description:
      "Explore best practices for managing cloud infrastructure and resources.",
    link: "Link",
  },
  {
    id: "15",
    categoryId: "2",
    title: "Serverless Computing",
    image: "https://source.unsplash.com/300x200/?serverlesscomputing",
    description:
      "Learn about serverless computing and its advantages for scalable applications.",
    link: "Link",
  },
  {
    id: "16",
    categoryId: "2",
    title: "Cloud Security Best Practices",
    image: "https://source.unsplash.com/300x200/?cloudsecurity",
    description:
      "Explore techniques and tools for ensuring security in cloud environments.",
    link: "Link",
  },
  {
    id: "17",
    categoryId: "2",
    title: "Cloud Migration Strategies",
    image: "https://source.unsplash.com/300x200/?cloudmigration",
    description:
      "Learn how to plan and execute successful cloud migration projects.",
    link: "Link",
  },
  {
    id: "18",
    categoryId: "2",
    title: "DevOps in the Cloud",
    image: "https://source.unsplash.com/300x200/?devops",
    description:
      "Explore the integration of DevOps practices with cloud computing.",
    link: "Link",
  },
  {
    id: "19",
    categoryId: "4",
    title: "Digital Marketing Fundamentals",
    image: "https://source.unsplash.com/300x200/?digitalmarketing",
    description:
      "Learn the basics of digital marketing strategies and techniques.",
    link: "Link",
  },
  {
    id: "20",
    categoryId: "4",
    title: "Social Media Marketing",
    image: "https://source.unsplash.com/300x200/?socialmediamarketing",
    description:
      "Explore effective strategies for marketing on popular social media platforms.",
    link: "Link",
  },
  {
    id: "21",
    categoryId: "4",
    title: "Search Engine Optimization (SEO)",
    image: "https://source.unsplash.com/300x200/?seo",
    description:
      "Learn how to optimize websites for better visibility in search engine results.",
    link: "Link",
  },
  {
    id: "22",
    categoryId: "4",
    title: "Content Marketing Strategies",
    image: "https://source.unsplash.com/300x200/?contentmarketing",
    description:
      "Explore techniques for creating and distributing valuable content to attract and engage audiences.",
    link: "Link",
  },
  {
    id: "23",
    categoryId: "4",
    title: "Email Marketing Essentials",
    image: "https://source.unsplash.com/300x200/?emailmarketing",
    description:
      "Learn how to create effective email marketing campaigns that drive engagement and conversions.",
    link: "Link",
  },
  {
    id: "24",
    categoryId: "4",
    title: "Digital Advertising Strategies",
    image: "https://source.unsplash.com/300x200/?digitaladvertising",
    description:
      "Explore various digital advertising platforms and strategies for reaching target audiences.",
    link: "Link",
  },
  {
    id: "25",
    categoryId: "5",
    title: "Introduction to Programming",
    image: "https://source.unsplash.com/300x200/?programming",
    description:
      "Learn the basics of programming and computer science principles.",
    link: "Link",
  },
  {
    id: "26",
    categoryId: "5",
    title: "Web Development Fundamentals",
    image: "https://source.unsplash.com/300x200/?webdevelopment",
    description:
      "Get started with building websites using HTML, CSS, and JavaScript.",
    link: "Link",
  },
  {
    id: "27",
    categoryId: "5",
    title: "Mobile App Development",
    image: "https://source.unsplash.com/300x200/?mobileappdevelopment",
    description:
      "Learn how to develop mobile applications for iOS and Android platforms.",
    link: "Link",
  },
  {
    id: "28",
    categoryId: "5",
    title: "Database Management Essentials",
    image: "https://source.unsplash.com/300x200/?databasemanagement",
    description:
      "Explore the fundamentals of database design, implementation, and management.",
    link: "Link",
  },
  {
    id: "29",
    categoryId: "5",
    title: "Software Engineering Principles",
    image: "https://source.unsplash.com/300x200/?softwareengineering",
    description:
      "Learn about software development methodologies and best practices.",
    link: "Link",
  },
  {
    id: "30",
    categoryId: "5",
    title: "Version Control with Git",
    image: "https://source.unsplash.com/300x200/?git",
    description:
      "Master the use of Git for version control and collaboration in software development.",
    link: "Link",
  },
];
