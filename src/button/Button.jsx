import React from "react";

const Button = (props) => {
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
