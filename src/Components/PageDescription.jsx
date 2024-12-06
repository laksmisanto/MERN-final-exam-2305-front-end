import React from "react";

const PageDescription = ({ className, children }) => {
  return (
    <p
      className={` text-gray font-primary font-regular text-2xl leading-9 ${className} `}
    >
      {children}
    </p>
  );
};

export default PageDescription;
