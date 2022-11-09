import React from "react";
import { useSelector } from "react-redux";

const Button = (props) => {
  const characters = useSelector((state) => state.characters);

  return (
    <a
      href={
        props.class === "button button__main"
          ? `${props.hero.urls[0].url}`
          : `${props.hero.urls[1].url}`
      }
      target="_blank"
      className={props.class}
    >
      <div className={props.inner}>{props.title}</div>
    </a>
  );
};

export default Button;
