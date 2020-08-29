import React from "react";

import CircledAvatar from "../components/circledAvatars/circleAvatar";
import TitleBar from "../components/titleBar/titleBar";

const Intro = () => {
  return (
    <div>
      <CircledAvatar withShadow="withShadow" />
      <h1>
        A peep at some distant orb has power to raise and purify our thoughts
        like a <span className="primary">strain of scared</span> music, or a
        noble picture
      </h1>

      <TitleBar
        bkgColor="bkg__primary"
        title="Victor Atencio"
        supportText="Web Designer & UI Developer"
      />
    </div>
  );
};

export default Intro;
