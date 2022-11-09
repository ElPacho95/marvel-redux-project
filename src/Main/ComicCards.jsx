import React, { useState } from "react";
import { useSelector } from "react-redux";
import avengers from "../assets/Avengers.svg";
import avengersLogo from "../assets/Avengers logo.svg";
import loading from "../assets/loadingImg.svg";
import { Link } from "react-router-dom";
const ComicCards = () => {
  const comics = useSelector((state) => state.comics);
  const [loadMore, setLoadMore] = useState(8);
  const handleLoadMore = () => {
    setLoadMore(loadMore + 8);
  };
  console.log(comics);
  if (!comics?.length) {
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    );
  }
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
      <div className="comicsCard">
        {comics.map((item, index) => {
          if (index < loadMore) {
            return (
              <div key={item.id}>
                <Link to={`/comic/${item.id}`}>
                  <img
                    width={"225"}
                    height={"346"}
                    src={`${item.thumbnail.path + ".jpg"}`}
                    alt=""
                  />
                </Link>

                <h3>{item.title}</h3>
                <p>{item.prices[0].price} $</p>
              </div>
            );
          }
        })}
      </div>
      <div style={{ textAlign: "center" }} className="load-btn">
        <button className="button button__main try" onClick={handleLoadMore}>
          <div className="inner try">LOAD MORE</div>
        </button>
      </div>
    </div>
  );
};

export default ComicCards;
