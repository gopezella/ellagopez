import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../FloatingButton/FloatingButton.css";
import messageIcon from "../../assets/message.svg";

export default function Floatingbutton(props) {
  const [isButtonSticky, setIsButtonSticky] = useState(false);
  useEffect(() => {
    const landingButton = document.getElementById("landingButton");
    const landingButtonPosition =
      landingButton?.offsetTop || window.pageYOffset;
    console.log(landingButtonPosition);

    const scrollCallBack = () => {
      const isButtonOnSticky = window.pageYOffset > landingButtonPosition;
      setIsButtonSticky(isButtonOnSticky);
    };

    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
      setIsButtonSticky(false);
    };
  }, []);

  const state = useSelector((state) => state);

  return (
    <>
      <div
        className={
          "floating-button " +
          (isButtonSticky ? "show " : "hide ") +
          (state.toggleDarkTheme ? "dark" : "light")
        }
      >
        <img src={messageIcon} alt="Contact Floating Button" />
      </div>
    </>
  );
}
