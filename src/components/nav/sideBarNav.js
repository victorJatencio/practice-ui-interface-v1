import React, { useRef, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";

import "./sideBarNav.css";

const SideBarNav = (props) => {
  const { menuState, setMenuState } = props;
  let sidebarMenu = useRef(null);
  let sidebarMenuOverlay = useRef(null);
  let menuLayer = useRef(null);
  let menuTimeLine = useRef();

  useEffect(() => {
    menuTimeLine.current = gsap.timeline({ paused: true });
    menuTimeLine.current.fromTo(
      [sidebarMenuOverlay, menuLayer, sidebarMenu],
      {
        duration: 0,
        x: "-100%",
      },
      {
        duration: 0.75,
        x: "0%",
        ease: "power3.InOut",
        stagger: {
          amount: 0.5,
        },
      }
    );
  }, []);

  useEffect(() => {
    menuState ? menuTimeLine.current.play() : menuTimeLine.current.reverse();
  }, [menuState]);

  useEffect(() => {
    const { history } = props;
    history.listen(() => setMenuState(false));
  });

  return (
    <div
      className="sidebarNavigationOverlay"
      ref={(el) => (sidebarMenuOverlay = el)}
      onClick={() => setMenuState(false)}
    >
      <div className="menu-wrapper">
        <div className="menu-layer" ref={(el) => (menuLayer = el)}></div>
        <nav className="sidebarNavigation" ref={(el) => (sidebarMenu = el)}>
          <div className="sidebar-top">
            <div className="links-wrapper">
              <Link className="menu-link" to="/">
                Intro
              </Link>
              <Link className="menu-link" to="/agenda">
                Agenda
              </Link>
            </div>
          </div>
          <div className="sidebar-bottom">
            <ul className="extra-links">
              <li className="link-item">
                <div className="link-title">Email</div>
                <a href="mailto:example@gmail.com">example@gmail.com</a>
              </li>
              <li className="link-item">
                <div className="link-title">Find Us</div>
                <span className="link-social">
                  <span>
                    <FaFacebook />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <FaLinkedin />
                  </span>
                </span>
                <span>97, Central Avenue</span>
                <span>New York, NY</span>
              </li>
              <li className="link-item">
                <div className="link-title">Phone</div>
                <span>817-555-3344</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default withRouter(SideBarNav);
