import React from "react";

import Avatar from "../../images/girl.jpg";

import "./circleAvatar.css";

const CircledAvatar = (props) => {
  const { withShadow } = props;

  return (
    <div className="avatar">
      <img className={withShadow} src={Avatar} alt="Avatar" />
    </div>
  );
};

export default CircledAvatar;
