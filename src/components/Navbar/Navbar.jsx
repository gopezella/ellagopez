import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "../Navbar/Navbar.css";
import { Link } from "react-scroll";
import DarkModeToggle from "react-dark-mode-toggle";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { useSelector, useDispatch } from "react-redux";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <nav>
        <div className="container">
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            <img src={logo} alt="logo" />
          </Link>
          <ul className="navLinks">
            <li>
              <Link activeClass="active" to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>

            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>

            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>

            <li>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>

            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>

            <DarkModeToggle
              className="darkModeButton"
              onChange={() => dispatch({ type: "TOGGLE_DARKTHEME" })}
              checked={state.toggleDarkTheme}
              size={60}
            />
          </ul>

          {/* MENU MOBILE */}

          <MenuOutlined className="menuMobile" onClick={showDrawer} />

          <Drawer
            placement="top"
            closable={false}
            onClose={onClose}
            visible={isDrawerVisible}
            className={state.toggleDarkTheme ? "dark" : "light"}
          >
            <div className="closeButton">
              <CloseOutlined onClick={onClose} />
            </div>

            <div className="menuContainer">
              <ul className="menuLinksMobile">
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    onClick={onClose}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link to="about" spy={true} smooth={true} onClick={onClose}>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="skills" spy={true} smooth={true} onClick={onClose}>
                    Skills
                  </Link>
                </li>

                <li>
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    onClick={onClose}
                  >
                    Projects
                  </Link>
                </li>

                <li>
                  <Link to="contact" spy={true} smooth={true} onClick={onClose}>
                    Contact
                  </Link>
                </li>

                <DarkModeToggle
                  className="darkModeButton"
                  onChange={() => dispatch({ type: "TOGGLE_DARKTHEME" })}
                  checked={state.toggleDarkTheme}
                  size={60}
                />
              </ul>
            </div>
          </Drawer>

          {/* END OF MENU MOBILE */}
        </div>
      </nav>
    </>
  );
}
