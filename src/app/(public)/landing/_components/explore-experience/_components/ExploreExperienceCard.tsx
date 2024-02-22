import React from "react";
import { ExploreExperienceCardProps } from "../content";

export const ExploreExperienceCard: React.FC<ExploreExperienceCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <div>
      <div>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
