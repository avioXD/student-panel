import { JobRolesModel } from "@/models/course/roles";
import { getPathsByDomain, getPathsByJonRoles } from "./content";
import { DomainModel } from "@/models/course/domain";

const PathsSection: React.FC<any> = async () => {
  let domainsContent: DomainModel[] = await getPathsByDomain();
  let jonRolesContent: JobRolesModel[] = await getPathsByJonRoles();
  return (
    <div>
      <h1 className="text-gray-800">Learning Paths</h1>
      {domainsContent.map((domain: DomainModel) => {
        return (
          <div key={domain.id}>
            <h2>{domain.title}</h2>
          </div>
        );
      })}
      {jonRolesContent.map((role: JobRolesModel) => {
        return (
          <div key={role.id}>
            <h2>{role.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PathsSection;
