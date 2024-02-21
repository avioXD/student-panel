import { CourseCard } from "./_components/CourseCard";

export default function Category() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2  h-[200px]">
        <div>Content</div>
        <CourseCard />
      </div>
    </section>
  );
}
