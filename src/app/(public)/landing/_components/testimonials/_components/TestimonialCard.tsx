import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TestimonialCardProps } from "../content";

interface Props {
  data: TestimonialCardProps;
}

export const TestimonialCard: React.FC<Props> = ({
  data: { studentName, avatar, review, stars },
}) => {
  return (
    <div className=" p-8   rounded-xl  bg-gray-800 bg-opacity-50 backdrop-blur-md border border-gray-600 h-[16rem] ">
      <div className="rounded-x">
        <div className="mb-3 text-white">
          <div className="flex gap-x-3 items-center mb-4">
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h2 className="text-lg font-semibold">{studentName}</h2>
          </div>
          <p className="text-subtitle line-clamp-[5] ">{review}</p>
        </div>
      </div>
    </div>
  );
};
