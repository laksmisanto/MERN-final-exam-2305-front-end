const PageDescription = ({ className, children }) => {
  return (
    <p
      className={` text-gray font-primary font-regular text-lg lg:text-xl 2xl:text-2xl leading-7 lg:leading-8 2xl:leading-9 ${className} `}
    >
      {children}
    </p>
  );
};

export default PageDescription;
