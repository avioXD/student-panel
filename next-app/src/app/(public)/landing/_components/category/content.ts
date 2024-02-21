type CategoryContentProps = {
  title: string;
  description: string;
  image: string;
  link: string;
  categories: Category[];
};

type Category = {
  name: string;
  courses: CourseCardProps[];
};

type CourseCardProps = {
  category: Category;
  name: string;
  description: string;
  image: string;
  link: string;
};
