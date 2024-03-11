import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { experiences, exploreExperience } from "./content";
import { ExploreExperienceCard } from "./_components/ExploreExperienceCard";

export const ExploreExperience = () => {
  return (
    <section className="bg-white rounded-t-2xl relative">
      {/* <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute top-[2%] left-[20%]  w-[400px] h-[400px] rotate-45 bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute bottom-[10%] right-[20%]  w-80 h-[60%] bg-red-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div> */}
      <MaxWidthWrapper>
        <div className="py-[100px] flex flex-col relative">
          <div className="text-center flex flex-col gap-4  mb-6 md:mb-10">
            <h2 className="text-heading ">{exploreExperience.title}</h2>
            <p className="text-subheading mx-auto">
              {exploreExperience.description}
            </p>
          </div>
          <div className="mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2   gap-6 md:gap-10 ">
              {experiences.map((experience) => (
                <ExploreExperienceCard key={experience.id} data={experience} />
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
