import { JobRolesModel } from "@/models/course/roles";
import { getPathsByDomain, getPathsByJonRoles } from "./content";
import { DomainModel } from "@/models/course/domain";
import PathsCard from "./_components/paths-card";

const PathsSection: React.FC<any> = async () => {
  let domainsContent: DomainModel[] | null = await getPathsByDomain();
  let jonRolesContent: JobRolesModel[] | null = await getPathsByJonRoles();
  return (
    <div>
      <h1 className="text-gray-800">Learning Paths</h1>
      {domainsContent &&
        domainsContent.map((domain: DomainModel) => {
          return (
            <div key={domain.id}>
              <PathsCard data={domain} />
            </div>
          );
        })}
      {jonRolesContent &&
        jonRolesContent.map((role: JobRolesModel) => {
          return (
            <div key={role.id}>
              <PathsCard data={role} />
            </div>
          );
        })}
    </div>
  );
};

export default PathsSection;
