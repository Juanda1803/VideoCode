import React from "react";

import error from "../assets/static/Monster-404.png";
import "../assets/styles/components/NotFound.scss";

const NotFound = () => (
  <div className="notFound__container">
    <img className="notFound" src={error} alt="No encontrado" />
  </div>
);

export default NotFound;
