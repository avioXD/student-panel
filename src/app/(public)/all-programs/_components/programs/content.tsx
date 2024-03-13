import { apiMode } from "@/lib/apimode";
import { courses } from "@/models/course/course";
import axios from "axios";

export const getFeaturedPrograms = async () => {
  if (apiMode.isProduction) {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/programs/featured`
    );
    return data;
  }
  if (apiMode.isDevelopment) {
    return courses.slice(0, 4);
  }
};

export const getPrograms = async () => {
  if (apiMode.isProduction) {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/programs`
    );
    return data;
  }
  if (apiMode.isDevelopment) {
    return courses.slice(0, 8);
  }
};
