import loading from "../assets/loadingImg.svg";
import { useDispatch, useSelector } from "react-redux";
import { uploadCharacters, uploadComics } from "../Redux";
import React, { useEffect, useState } from "react";
import SelectCharacter from "./SelectCharacter";
import AboutCharacters from "./AboutCharacters";

const CharacterCards = () => {
  const [loadMore, setLoadMore] = useState(9);
  const [infoAboutCard, setInfoAboutCard] = useState({});

  const handleLoadMore = () => {
    setLoadMore(loadMore + 9);
  };
  const handleActive = (card) => {
    setInfoAboutCard(card);
    return null;
  };
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    dispatch(await uploadCharacters());
    dispatch(await uploadComics());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const characters = useSelector((state) => state.characters);
  console.log(characters);
  if (!characters?.length) {
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    );
  }
  return (
    <div>
      <AboutCharacters />
      <div className="info-block">
        <div className="cards">
          {characters.map((item, index) => {
            if (index < loadMore) {
              return (
                <div
                  key={item.id}
                  className={infoAboutCard.id === item.id ? "active" : "card"}
                  onClick={() => handleActive(item)}
                >
                  <div style={{ textDecoration: "none", color: "white" }}>
                    <img
                      width={"200px"}
                      height={"200px"}
                      src={`${item.thumbnail.path + ".jpg"}`}
                      alt=""
                    />
                    <h2>{item.name}</h2>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <SelectCharacter infoAboutCard={infoAboutCard} />
      </div>
      <div className="load-btn">
        <button className="button button__main try" onClick={handleLoadMore}>
          <div className="inner try">LOAD MORE</div>
        </button>
      </div>
    </div>
  );
};

export default CharacterCards;
