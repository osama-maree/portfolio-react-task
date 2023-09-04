import React from "react";
import SkillsItem from "./SkillsItem.jsx";

const SkillsSection = ({ title, data }) => {
  return (
    <div className="content">
      <h3 className="skillsTitle text-sm">{title}</h3>
      <div className="skillsList bg-gray grid">
        {data.map((item, i) => (
          <SkillsItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
