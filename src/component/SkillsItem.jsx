import React from "react";

const SkillsItem = (props) => {
  return (
    <div className="skillsData">
      <div className="skillsTitles">
        <div className="group">
          <img src={`/assets/${props.item.name}`} alt="" />
          <p className="skillsName text-sm">{props.item.title}</p>
        </div>
        <span className="skillsNumber text-sm">{props.item.per}%</span>
      </div>

      <div className="skillsBar">
        <span
          className="percentage"
          style={{ width: `${props.item.per}` }}
        ></span>
      </div>
    </div>
  );
};

export default SkillsItem;
