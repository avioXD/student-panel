import axios from "axios";
import { cache } from "react";

import { SectionProps } from "@/models/global_props/props";
import { domains } from "@/models/course/domain";
import { JobRolesModel, jobRoles } from "@/models/course/roles";
import { CourseModel, courses } from "@/models/course/course";
import { apiMode } from "@/lib/apimode";

interface PathsSectionProps extends SectionProps {}

export const pathsSectionContent: PathsSectionProps = {
  title: "Browse Paths By Domain",
  description:
    "🌟 Explore our curated collection of learning paths 📖 organized by domain. From technology to personal development, find your next learning adventure!",
};

export const getPathsByDomain = cache(async () => {
  /** Implement API */
  if (apiMode.isProduction) {
    const response = await axios.get(
      "https://api.example.com/v1/learning-paths/domains"
    );
    return response.data;
  }

  if (apiMode.isDevelopment) {
    return domains.map((domain) => {
      return {
        id: domain.id,
        title: domain.title,
        description: domain.description,
        courses: courses.filter(
          (course: CourseModel) => course.domain_id == domain.id
        ),
        totalDuration: courses.reduce((acc: any, course: CourseModel) => {
          if (course.domain_id == domain.id) {
            return acc + course.duration;
          }
          return acc;
        }, 0),
      };
    });
  }

  return null;
});

export const getPathsByJonRoles = cache(async () => {
  /** Implement API */
  if (apiMode.isProduction) {
    const response = await axios.get(
      "https://api.example.com/v1/learning-paths/job-roles"
    );
    return response.data;
  }

  if (apiMode.isDevelopment) {
    return jobRoles.map((role) => {
      return {
        id: role.id,
        title: role.title,
        description: role.description,
        courses: courses.filter(
          (course: CourseModel) => course.job_role_id == role.id
        ),
        totalDuration: courses.reduce((acc: any, course: CourseModel) => {
          if (course.job_role_id == role.id) {
            return acc + course.duration;
          }
          return acc;
        }, 0),
      };
    });
  }

  return null;
});
