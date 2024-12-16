const Container = ({ className, children }) => {
  return (
    <div className={`container px-6 md:px-12 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
