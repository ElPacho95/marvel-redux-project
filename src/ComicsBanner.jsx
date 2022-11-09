import avengers from "./assets/Avengers.svg";
import avengersLogo from "./assets/Avengers logo.svg";

const ComicsBanner = () => {
  return (
    <div className="banner-bg">
      <div className="banner">
        <div className="banner__items">
          <img src={avengers} alt="" />
          <h2>
            New comics every week! <br />
            Stay tuned!
          </h2>
        </div>
        <div>
          <img src={avengersLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ComicsBanner;
