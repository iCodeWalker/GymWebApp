import React, { useContext } from "react";
import { Data } from "../App";

import "./homeSection.scss";

const HomeSection = () => {
  const data = useContext(Data);

  return (
    <div className="home-container">
      <h1>{data.HomeSection.heading}</h1>
    </div>
  );
};

export default HomeSection;
