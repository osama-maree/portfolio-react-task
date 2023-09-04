import React from 'react'

const Title = ({title}) => {
  return (
    <h2 class="h2">
      {title}
      <div class="line">
        <span class="span"></span>
        <i class="fa-solid fa-star icon"></i>
        <span class="span"></span>
      </div>
    </h2>
  );
}

export default Title