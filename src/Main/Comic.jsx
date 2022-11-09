import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import ComicsBanner from "../ComicsBanner";

const Comic = () => {
  const comics = useSelector((state) => state.comics);
  const { idComic } = useParams("idComic");
  const find = comics.find((item) => item.id === +idComic);

  return (
    <div>
      <ComicsBanner />
      <div className="comic">
        <img src={`${find.thumbnail.path + ".jpg"}`} alt="" />
        <div>
          <h2>{find.title}</h2>
          <p>{find.description || "no info"}</p>
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
