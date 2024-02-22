import React from "react";
import { InstructorCardProps } from "../content";

export const InstructorCard: React.FC<InstructorCardProps> = ({
  id,
  name,
  image,
  description,
  designation,
}) => {
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{designation}</p>
      <p>{description}</p>
    </div>
  );
};
