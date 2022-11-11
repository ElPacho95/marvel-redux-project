import loading from "../assets/loadingImg.svg";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import SelectCharacter from "./SelectCharacter";
import AboutCharacters from "./AboutCharacters";
import { loadCharacters } from "../store/reducer";

const CharacterCards = () => {
  const [loadMore, setLoadMore] = useState(9);
  const [infoAboutCard, setInfoAboutCard] = useState({});

  const handleLoadMore = () => {
    setLoadMore(loadMore + 9);
  };
  const handleActive = (card) => {
    setInfoAboutCard(card);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  const characters = useSelector((state) => state.characters);
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
                  <div className="card-blocks">
                    <img src={`${item.thumbnail.path + ".jpg"}`} alt="" />
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
