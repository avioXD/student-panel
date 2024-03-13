import React from "react";

const LoadingScreen: React.FC = () => {
  return (
    <div className="h-screen w-screen z-50">
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
