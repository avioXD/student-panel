import { apiMode } from "@/lib/apimode";
import { courses } from "@/models/course/course";

const getCourse = async (id: string) => {
  if (apiMode.isProduction) {
    const res = await fetch(`/api/course/${id}`);
    const course = await res.json();
    return course;
  }
  if (apiMode.isDevelopment) {
    return courses.find((course) => course.id === id);
  }
  return null;
};

export default getCourse;
