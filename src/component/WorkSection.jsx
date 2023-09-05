import React from "react";

const WorkSection = (props) => {
  return (
    <div className="item grid ">
      <div
        className="imgProject "
        style={{
          border: `${props.item.link ? "unset" : "1px solid #aaaaaa"}`,
          borderRadius: `${props.item.link ? "unser" : "20px"}`,
          padding: `${props.item.link ? "unser" : "4px"}`,
        }}
      >
        <img src={`/assets/${props.item.name}`} alt="" />
      </div>
      <div className="desc">
        <h3>{props.item.title}</h3>
        <p>{props.item.text}</p>
        <div className="technologeis ">
          <h4>Technologies &#x1F604;</h4>
          <div className="items">
            {props.item.tech.map((item, i) => (
              <h5 key={i}>{item}</h5>
            ))}
          </div>
        </div>
        <div className="bottomBar">
          <div className={`side ${props.item.prev ? "" : "cancel-event"}`}>
            <a href={props.item.prev} target="_blank">
              Preview <i class="fa-solid fa-laptop"></i>
            </a>
          </div>
          <div className="side">
            <a href={props.item.github} target="_blank">
              Source Code
            </a>
            <i className="fa-brands fa-github"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
