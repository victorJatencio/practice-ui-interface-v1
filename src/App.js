import React from "react";

import "normalize.css";
import "./css/main.css";

import LayoutComponent from "./components/layout/layoutContainer";
import Intro from "./pages/Intro";

const App = () => {
  return (
    <div>
      <LayoutComponent>
        <Intro />
      </LayoutComponent>
    </div>
  );
};

export default App;
