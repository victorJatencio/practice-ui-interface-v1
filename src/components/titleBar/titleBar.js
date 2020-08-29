import React from "react";

import "../titleBar/titleBar.css";

const TitleBar = (props) => {
  const { bkgColor, title, supportText } = props;

  return (
    <div className={`titleBar ${bkgColor}`}>
      <h4>{title}</h4>
      <p>{supportText}</p>
    </div>
  );
};

export default TitleBar;
