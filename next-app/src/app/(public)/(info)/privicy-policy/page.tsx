import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const PrivacyPolicy: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <h1>Privacy Policy</h1>
      <p>{children}</p>
    </div>
  );
};

export default PrivacyPolicy;
