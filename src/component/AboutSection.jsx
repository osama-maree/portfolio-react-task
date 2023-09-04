import React from "react";
import AboutItem from "./AboutItem.jsx";

const AboutSection = ({ title, data }) => {
  return (
    <div className="halfRow">
      <h3 className="title">Education</h3>
      <div className="row bg-gray">
        <div className="leftItem">
          {data.map((item, indx) => (
            <AboutItem item={item} key={indx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
