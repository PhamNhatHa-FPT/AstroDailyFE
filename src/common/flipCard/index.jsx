import "./flipCard.css";

function FlipCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p>
            <img src="/assets/images/astrologist-illustrations-15.png" alt="" />
          </p>
        </div>
        <div className="flip-card-back">
          <p className="title">Crystall Ball Reading</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
