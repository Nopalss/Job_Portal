import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, style, link, onclick = () => {} }) => {
  return (
    <Link to={link}>
      <button className={` btn   ${style} cursor-pointer `} onClick={onclick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
