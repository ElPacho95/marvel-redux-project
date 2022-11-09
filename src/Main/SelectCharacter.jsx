import React from "react";
import Button from "../button/Button";

const SelectCharacter = ({ infoAboutCard }) => {
  if (!Object.keys(infoAboutCard).length) {
    return (
      <div className="info">
        <h3>Please select a character to see information</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="circle"></div>
          <div
            style={{
              width: "290px",
              height: "16px",
              backgroundColor: "#C4C4C4",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "325px",
            height: "35px",
            margin: "15px auto",
            backgroundColor: "#C4C4C4",
          }}
        ></div>
        <div
          style={{
            width: "325px",
            height: "35px",
            margin: "15px auto",
            backgroundColor: "#C4C4C4",
          }}
        ></div>
        <div
          style={{
            width: "325px",
            height: "35px",
            margin: "15px auto",
            backgroundColor: "#C4C4C4",
          }}
        ></div>
      </div>
    );
  } else {
    return (
      <div className="selected-block">
        <div className="selected">
          <img
            width={"159px"}
            height={"147px"}
            src={`${infoAboutCard.thumbnail.path + ".jpg"}`}
            alt=""
          />
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
          <p>{infoAboutCard.description || <p>no info</p>}</p>
        </div>
      </div>
    );
  }
};

export default SelectCharacter;
