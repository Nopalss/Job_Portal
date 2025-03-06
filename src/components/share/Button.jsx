import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, style, link }) => {
  return (
    <Link to={link}>
      <button className={`px-5 py-2  ${style} cursor-pointer`}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
