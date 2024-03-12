import { DomainModel } from "@/models/course/domain";
import { JobRolesModel } from "@/models/course/roles";

interface Props {
  data: DomainModel | JobRolesModel;
}

const PathsCard: React.FC<Props> = ({ data }) => {
  const { title, description, courses, id, totalDuration } = data;
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{courses?.length}</p>
      <p>{totalDuration}</p>
    </div>
  );
};

export default PathsCard;
