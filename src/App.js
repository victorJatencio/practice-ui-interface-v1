import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import Header from "./components/header/header";
import SideBarNav from "./components/nav/sideBarNav";
import LayoutComponent from "./components/layout/layoutContainer";

// Pages
import Intro from "./pages/Intro";
import Agenda from "./pages/agenda";
// Global CSS
import "normalize.css";
import "./css/main.css";

const App = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <BrowserRouter>
      <LayoutComponent>
        <div className="App container">
          <Header menuState={menuState} setMenuState={setMenuState} />

          <SideBarNav menuState={menuState} setMenuState={setMenuState} />

          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/agenda" component={Agenda} />
          </Switch>
        </div>
      </LayoutComponent>
    </BrowserRouter>
  );
};

export default App;
