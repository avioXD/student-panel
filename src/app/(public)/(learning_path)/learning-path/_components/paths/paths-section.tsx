import { JobRolesModel } from "@/models/course/roles";
import { getPathsByDomain, getPathsByJonRoles } from "./content";
import { DomainModel } from "@/models/course/domain";
import PathsCard from "./_components/paths-card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const PathsSection: React.FC<any> = async () => {
  let domainsContent: DomainModel[] | null = await getPathsByDomain();
  let jonRolesContent: JobRolesModel[] | null = await getPathsByJonRoles();
  return (

    
    <div>
      <section className="bg-black rounded-t-2xl relative">
        <div className="absolute backdrop-blur-sm left-0 right-0 top-20 bottom-0">
          <div className=" absolute top-[2%] left-[30%]  w-[400px] h-[400px] rotate-45 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 "></div>
          <div className=" absolute top-[15%] left-[50%]  w-[400px] h-[400px] rotate-45 bg-green-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 "></div>
          <div className=" absolute top-[50%] bottom-[10%] right-[30%]  w-[800px] h-[60%] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 "></div>
        </div>
        <MaxWidthWrapper className="relative">
        <div>
          <h1 className="text-white text-center text-4xl mx-auto pt-20 pb-10">Browse Paths By Domain</h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 ">
            {domainsContent &&
            domainsContent.map((domain: DomainModel) => {
              return (
                <div key={domain.id}>
                  <PathsCard data={domain} />
                </div>
              );
            })}
          </div>  
        </div>  
      
        <div className="pb-10">
          <h1 className="text-white text-center text-4xl mx-auto pt-20 pb-10">Browse Paths By Roles</h1>
          <div className="grid   grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    gap-4">
            {jonRolesContent &&
            jonRolesContent.map((role: JobRolesModel) => {
            return (
              <div key={role.id}>
                <PathsCard data={role} />
              </div>
            );
          })}
          </div>
        </div>    
      
      
        </MaxWidthWrapper>
      
      </section>
     
    </div>
  );
};

export default PathsSection;
