import React from "react";

import CircledAvatar from "../components/circledAvatars/circleAvatar";
import TitleBar from "../components/titleBar/titleBar";

import "../css/intro.css";

const Intro = () => {
  return (
    <div className="intro__container">
      <div className="item__avatar">
        <CircledAvatar withShadow="withShadow" xs="xs" />
      </div>
      <h1 className="item__text">
        A peep at some distant orb has power to raise and purify our thoughts
        like a <span className="primary">strain of scared</span> music, or a
        noble picture
      </h1>

      <div className="item__bar">
        <TitleBar
          bkgColor="bkg__primary"
          title="Victor Atencio"
          supportText="Web Designer & UI Developer"
        />
      </div>
    </div>
  );
};

export default Intro;
