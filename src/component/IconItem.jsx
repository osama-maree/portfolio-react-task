import React from "react";

const IconItem = ({ link, icon }) => {
  return (
    <>
      <a href={link} target="_blank">
        {icon}
      </a>
    </>
  );
};

export default IconItem;
