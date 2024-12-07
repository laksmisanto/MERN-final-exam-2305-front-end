const PageTitle = ({
  beforeHighlight,
  Highlight,
  afterHighlight,
  className,
}) => {
  return (
    <h2
      className={` font-secondary text-black font-regular text-3xl lg:text-4xl xl:text-[40px] 2xl:text-5xl ${className}`}
    >
      {beforeHighlight} <span className="text-primary">{Highlight}</span>{" "}
      {afterHighlight}
    </h2>
  );
};

export default PageTitle;
