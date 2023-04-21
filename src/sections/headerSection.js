import React from "react";

import "./headerSection.scss";
import { Data } from "../App";

const HeaderSection = () => {
  return (
    <Data.Consumer>
      {(data) => {
        return (
          <div className="header-container">
            <h1>{data.HeadingSection.heading}</h1>
            <p>{data.HeadingSection.description}</p>
          </div>
        );
      }}
    </Data.Consumer>
  );
};

export default HeaderSection;
