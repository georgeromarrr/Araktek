import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ classStyle }) => {
  return (
    <div className={`container mx-auto mb-2.5 text-sm px-3 ${classStyle}`}>
      © 2022 Araktek. All Rights Reserved | Handfully created by{" "}
      <Link to="/">
        <span>Aracholō Group</span>
      </Link>
    </div>
  );
};

export default Footer;
