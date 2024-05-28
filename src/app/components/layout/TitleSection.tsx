import React from "react";

type TitleSectionProps = {
  h1Text: string;
  subText: string;
};

function TitleSection({ h1Text, subText }: TitleSectionProps) {
  return (
    <>
      <h1>{h1Text}</h1>
      <h4>{subText}</h4>
    </>
  );
}

export default TitleSection;
