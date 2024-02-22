import React from "react";
import { CourseCardProps } from "../content";

export const CourseCard: React.FC<CourseCardProps> = ({
  id,
  categoryId,
  description,
  image,
  link,
  title,
}) => {
  return (
    <div>
      <h1>Card</h1>
    </div>
  );
};
