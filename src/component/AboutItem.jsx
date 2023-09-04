import React from "react";

const AboutItem = (props) => {
  return (
    <div className="item">
      <div className="circle-dot" />
      <h3 className="item-data">
        {props.item.icon} {props.item.title}
      </h3>
      <p className="item-text">
        {props.item.text}
        {props.item.link ? (
          <b>
            <a href={props.item.link} target="_blank">
              Link
            </a>
          </b>
        ) : (
          ""
        )}
        <br />
        <i
          className="fa-solid fa-calendar-days"
          style={{ marginTop: "0.5rem" }}
        />
        {props.item.date}
      </p>
    </div>
  );
};

export default AboutItem;
