import React from "react";

const SectionTitle = ({
  titleText,
  subtitleText,
  positionClass,
  spaceClass,
  borderClass
}) => {
  return (
    <div
      className={`section-title ${positionClass ? positionClass : ""} ${
        spaceClass ? spaceClass : ""
      } ${borderClass ? borderClass : ""}`}
    >
      <h2>{titleText}</h2>
      <p>{subtitleText}</p>
    </div>
  );
};

export default SectionTitle;
