import { DomainModel } from "@/models/course/domain";
import { JobRolesModel } from "@/models/course/roles";

interface Props {
  data: DomainModel | JobRolesModel;
}

const PathsCard: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h1>Paths Card</h1>
    </div>
  );
};
