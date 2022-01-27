import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import "../FloatingButton/FloatingButton.css";
import messageIcon from "../../assets/message.svg";

export default function Floatingbutton(props) {
  const [isButtonSticky, setIsButtonSticky] = useState(false);

  useEffect(() => {
    const landingButton = document.getElementById("landingButton");
    const contactSection = document.getElementById("contact");

    const landingButtonPosition =
      landingButton?.offsetTop || window.pageYOffset;

    const contactPosition = contactSection?.offsetTop || window.pageYOffset;
    // console.log(contactPosition);

    const scrollCallBack = () => {
      // const isButtonOnSticky = window.pageYOffset > landingButtonPosition;
      // setIsButtonSticky(isButtonOnSticky);
      // console.log(window.pageYOffset);
      if (
        window.pageYOffset > landingButtonPosition &&
        window.pageYOffset < contactPosition
      ) {
        setIsButtonSticky(true);
      } else if (window.pageYOffset < landingButtonPosition) {
        setIsButtonSticky(false);
      } else {
        setIsButtonSticky(false);
      }
    };

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      setIsButtonSticky(false);
    };
  }, []);

  const state = useSelector((state) => state);

  // console.log(isButtonSticky);

  return (
    <>
      <div
        className={
          "floating-button " +
          (isButtonSticky ? "show " : "hide ") +
          (state.toggleDarkTheme ? "dark" : "light")
        }
      >
        <Link to="contact" spy={true} smooth={true}>
          <img src={messageIcon} alt="Contact Floating Button" />
        </Link>
      </div>
    </>
  );
}
