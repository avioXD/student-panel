interface CategoryContentProps {
  title: string;
  description: string;
  image: string;
  link: string;
  categories: Category[];
}

interface Category {
  name: string;
  courses: CourseCardProps[];
}

interface CourseCardProps {
  category: Category;
  name: string;
  description: string;
  image: string;
  link: string;
}
