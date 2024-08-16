function Container({
  children,
  containerClassName,
}: Readonly<{
  children: React.ReactNode;
  containerClassName?: string;
}>) {
  return (
    <div
      className={`container mx-auto px-[10px] py-10 md:px-[40px] ${
        containerClassName ? containerClassName : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Container;
