import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { CourseCard } from "./_components/CourseCard";
import { categoryContent, categoryList, coursesList } from "./content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CategorySection = () => {
  return (
    <section className="bg-black rounded-t-2xl relative">
      <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
        <div className=" absolute bottom-[10%] left-[20%]  w-[400px] h-[400px] rotate-45 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
        <div className=" absolute top-[10%] right-[20%]  w-80 h-[60%] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-25 "></div>
      </div>
      <MaxWidthWrapper>
        <div className="py-[100px] flex flex-col relative">
          <div className="text-center flex flex-col gap-4 text-white mb-10 md:mb-12">
            <h2 className="text-heading ">{categoryContent.title}</h2>
            <p className="text-subheading mx-auto">
              {categoryContent.description}
            </p>
          </div>
          <div className="mx-auto relative">
            <Tabs defaultValue={categoryList[0].id} className="flex flex-col">
              <TabsList
                variant="secondary"
                className="mb-6 mx-auto w-full hidden md:flex"
              >
                {categoryList.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    variant="secondary"
                    value={category.id}
                    className="md:mx-4 xl:mx-6"
                  >
                    {category.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 ">
                {" "}
                {coursesList.map((course) => (
                  <TabsContent key={course.id} value={course.categoryId}>
                    <CourseCard data={course} />
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
