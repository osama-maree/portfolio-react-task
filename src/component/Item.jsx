import React from "react";
import { Link } from "react-router-dom";

const Item = ({ e, value, setOpen }) => {
  return (
    <li>
      <Link className="toggle" to={e} onClick={() => setOpen((prev) => !prev)}>
        {value}
      </Link>
    </li>
  );
};

export default Item;
