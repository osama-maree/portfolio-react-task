import React from "react";
import AboutItem from "./AboutItem.jsx";

const AboutSection = ({ title, data }) => {
  return (
    <div class="halfRow">
      <h3 class="title">Education</h3>
      <div class="row bg-gray">
        <div class="leftItem">
          {data.map((item, indx) => (
            <AboutItem item={item} key={indx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
