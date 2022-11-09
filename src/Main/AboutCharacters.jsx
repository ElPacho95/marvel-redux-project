import React, { useState } from "react";
import Button from "../button/Button";
import { useSelector } from "react-redux";
import loading from "../assets/loadingImg.svg";

const AboutCharacters = () => {
  const [randomNum, setRandomNum] = useState(0);
  const characters = useSelector((state) => state.characters);
  const handleRandom = () => {
    const ind = Math.random(0, 99) * 99;
    setRandomNum(Math.floor(ind));
  };
  if (!characters?.length) {
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    );
  }
  return (
    <div className="about">
      <div className="white-bg">
        <div className="character">
          <img
            src={`${characters[randomNum].thumbnail.path + ".jpg"}`}
            alt=""
          />
          <div className="about-thor">
            <h3>{characters[randomNum]?.name}</h3>
            <p className="subtitle">
              {characters[randomNum]?.description || "no info"}
            </p>
            <div className="buttons">
              <Button
                title="HOMEPAGE"
                class="button button__main"
                inner="inner"
                hero={characters[randomNum]}
              />
              <Button
                title="Wiki"
                class="button button__secondary"
                inner="inner"
                hero={characters[randomNum]}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="randomizer-bg">
        <h2>
          Random character for today! <br />
          Do you want to get to know him better?
        </h2>
        <h2 className="subtitle">Or choose another one</h2>
        <div className="random-btn">
          <button
            onClick={handleRandom}
            className="button button__main try"
            inner="inner try"
          >
            <div className="inner try">Try It</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCharacters;
