import { DomainModel } from "@/models/course/domain";
import { JobRolesModel } from "@/models/course/roles";
import { BookOpenText, Timer } from "lucide-react";





interface Props {
  data: DomainModel | JobRolesModel;
}

const PathsCard: React.FC<Props> = ({ data }) => {
  const { title, description, courses, id, totalDuration } = data;
  return (
    <div className="group bg-gradient-to-b  from-gray-500 hover:from-yellow-500 to-black rounded-b-xl rounded-t-xl relative max-w-[500px] h-[120px] flex item-center overflow-hidden transition-transform duration-300 ease-linear transform hover:scale-105 cursor-pointer">
        <div className="bg-black  mt-px mr-[1px] ml-[1px] rounded-t-xl rounded-b-xl w-full p-4 ">
        <h1 className=" text-white group-hover:text-yellow-500">{title}</h1>
        
        <p className="text-gray-600"></p>

        <div className="flex text-gray-400 gap-x-8 group-hover:text-white">
          <div className="flex gap-x-2 items-center pt-8">
            <p><BookOpenText  size={18} /></p>
            <p>{courses?.length} Courses</p>
          </div>
          <div className="flex gap-x-2 items-center pt-8">
            <p><Timer size={18} /></p>
              <p>{totalDuration} hours</p>
          </div>
        </div>
        
      </div>
    </div>

    
  );
};

export default PathsCard;
