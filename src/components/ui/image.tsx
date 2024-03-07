"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ImageProps = any;

interface imageLoaderProps {
  src: string;
  width: number;
  quality: number;
}

const imageLoader = ({ src, width, quality }: imageLoaderProps) => {
  return src;
};

const Image: React.FC<ImageProps> = (props) => {
  return <img fill={true} className={cn(props.className)} {...props} />;
};

export default Image;
