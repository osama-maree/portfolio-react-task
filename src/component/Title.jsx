import React from 'react'

const Title = ({title}) => {
  return (
    <h2 className="h2">
      {title}
      <div className="line">
        <span className="span"></span>
        <i className="fa-solid fa-star icon"></i>
        <span className="span"></span>
      </div>
    </h2>
  );
}

export default Title