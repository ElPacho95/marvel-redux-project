import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import avengers from "../assets/Avengers.svg";
import avengersLogo from "../assets/Avengers logo.svg";
import { Link } from "react-router-dom";

const Comic = () => {
  const comics = useSelector((state) => state.comics);
  const { idComic } = useParams("idComic");
  const find = comics.find((item) => item.id === +idComic);
  return (
    <div>
      <div className="banner-bg">
        <div className="banner">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img width={`152`} height={`90`} src={avengers} alt="" />
            <h2 style={{ marginLeft: "80px" }}>
              New comics every week! <br />
              Stay tuned!
            </h2>
          </div>
          <div>
            <img src={avengersLogo} alt="" />
          </div>
        </div>
      </div>
      <div className="comic">
        <img
          width={"293px"}
          height={"450px"}
          src={`${find.thumbnail.path + ".jpg"}`}
          alt=""
        />
        <div>
          <h2>{find.title}</h2>
          <p>{find.description || <p>no info</p>}</p>
          <p>100 pages</p>
          <p>Language: en-us</p>
          <h3>{find.prices[0].price}$</h3>
        </div>
        <Link to={"/"}>
          <h2>Back to all</h2>
        </Link>
      </div>
    </div>
  );
};

export default Comic;
