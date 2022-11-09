import React from "react";
import Button from "../button/Button";

const SelectCharacter = ({ infoAboutCard }) => {
  if (!Object.keys(infoAboutCard).length) {
    return (
      <div className="info">
        <h3>Please select a character to see information</h3>
        <div className="info__title">
          <div className="circle"></div>
          <div className="subtitle"></div>
        </div>
        <div className="blocks"></div>
        <div className="blocks"></div>
        <div className="blocks"></div>
      </div>
    );
  } else {
    return (
      <div className="selected-block">
        <div className="selected">
          <img src={`${infoAboutCard.thumbnail.path + ".jpg"}`} alt="" />
          <div className="title">
            <strong>{infoAboutCard.name}</strong>
            <div className="selected-btn">
              <Button
                title="HOMEPAGE"
                class="button button__main"
                inner="inner"
                hero={infoAboutCard}
              />
              <Button
                title="Wiki"
                class="button button__secondary"
                inner="inner"
                hero={infoAboutCard}
              />
            </div>
          </div>
        </div>
        <div className="subtitle">
          <p>{infoAboutCard.description || "no info"}</p>
        </div>
      </div>
    );
  }
};

export default SelectCharacter;
