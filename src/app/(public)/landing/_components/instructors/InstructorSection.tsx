import { InstructorCard } from "./_components/InstructorCard";

export const InstructorSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2  h-[200px]">
        <div>Content</div>
        <div>
          <div>
            slides
            <InstructorCard
              id="1"
              name="Name"
              image="Image"
              description="Description"
              designation="Designation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
