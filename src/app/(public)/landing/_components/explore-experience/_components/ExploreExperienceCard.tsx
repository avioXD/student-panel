import React from "react";
import { ExploreExperienceCardProps } from "../content";

interface Props {
  data: ExploreExperienceCardProps;
}

export const ExploreExperienceCard: React.FC<Props> = ({
  data: { image, title, description },
}) => {
  return (
    <div>
      <div className="shadow-lg p-4 flex gap-x-4 rounded-xl bg-white backdrop-blur-md bg-opacity-75 border border-gray-200">
        <img
          className="object-cover rounded-lg aspect-[4/4]  max-w-32 max-h-32   "
          src={image}
          alt={title}
        />
        <div className="my-4">
          <p className="text-xl font-semibold mb-2">{title}</p>
          <p className=" ">{description}</p>
        </div>
      </div>
    </div>
  );
};
