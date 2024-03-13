"use client";

import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
// Replace with your JSON path

interface Props {
  animationData: any;
}

export const Animated: React.FC<Props> = ({ animationData }) => {
  const animationContainer: any = useRef(null);

  useEffect(() => {
    if (animationData) {
      Lottie.loadAnimation({
        container: animationContainer.current,
        renderer: "canvas", // "svg", "canvas", "html"
        loop: true, // Set to false for one-time playback
        autoplay: true, // Set to false to control playback manually
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });
    }
    return () => {
      Lottie.destroy(animationContainer.current);
    };
  }, [animationData]);

  return (
    <div className="w-full h-42 overflow-hidden p-4" ref={animationContainer} />
  );
};
