import axios from "axios";
import { cache } from "react";

import { SectionProps } from "@/models/global_props/props";
import { domains } from "@/models/course/domain";
import { jobRoles } from "@/models/course/roles";

interface PathsSectionProps extends SectionProps {}

export const pathsSectionContent: PathsSectionProps = {
  title: "Browse Paths By Domain",
  description:
    "🌟 Explore our curated collection of learning paths 📖 organized by domain. From technology to personal development, find your next learning adventure!",
};

export const getPathsByDomain = cache(async () => {
  /** Implement API */

  return domains;
});

export const getPathsByJonRoles = cache(async () => {
  /** Implement API */

  return jobRoles;
});
