import React from "react";

function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="container mx-auto px-[10px]">{children}</div>;
}

export default Container;
