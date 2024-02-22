import { CourseCard } from "./_components/CourseCard";

export const CategorySection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2  h-[200px]">
        <div>Content</div>
        <CourseCard
          id="1"
          categoryId="1"
          description="Description"
          image="Image"
          link="Link"
          title="Title"
        />
      </div>
    </section>
  );
};
