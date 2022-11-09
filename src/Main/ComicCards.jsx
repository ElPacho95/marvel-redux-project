import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loading from "../assets/loadingImg.svg";
import { Link } from "react-router-dom";
import { uploadCharacters, uploadComics } from "../Redux";
import ComicsBanner from "../ComicsBanner";

const ComicCards = () => {
  const comics = useSelector((state) => state.comics);
  const [loadMore, setLoadMore] = useState(8);

  const dispatch = useDispatch();

  const fetchAPI = async () => {
    dispatch(await uploadCharacters());
    dispatch(await uploadComics());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (!comics?.length) {
    return (
      <div className="loading">
        <img src={loading} alt="" />
      </div>
    );
  }

  const handleLoadMore = () => {
    setLoadMore(loadMore + 8);
  };
  return (
    <div>
      <ComicsBanner />
      <div className="comicsCard">
        {comics.map((item, index) => {
          if (index < loadMore) {
            return (
              <div key={item.id}>
                <Link to={`/comic/${item.id}`}>
                  <img src={`${item.thumbnail.path + ".jpg"}`} alt="" />
                </Link>

                <h3>{item.title}</h3>
                <p>{item.prices[0].price} $</p>
              </div>
            );
          }
        })}
      </div>
      <div className="load-btn center">
        <button className="button button__main try" onClick={handleLoadMore}>
          <div className="inner try">LOAD MORE</div>
        </button>
      </div>
    </div>
  );
};

export default ComicCards;
