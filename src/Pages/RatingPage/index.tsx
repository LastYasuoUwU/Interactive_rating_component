import iconStar from "../../assets/images/icon-star.svg";
import "./styles.scss";

export default function RatingPage() {
  return (
    <div id="ratingPageElementsContainer">
      <img src={iconStar} alt="icon start" id="iconImage" />
      <p id="rateTitle">How did we do?</p>
      <p id="rateDescription">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div id="rateNumbersContainer">
        <div className="rateNumberContainer">
          <a href="#" className="rateNumber">
            1
          </a>
        </div>
        <div className="rateNumberContainer">
          <a href="#" className="rateNumber">
            2
          </a>
        </div>
        <div className="rateNumberContainer">
          <a href="#" className="rateNumber">
            3
          </a>
        </div>
        <div className="rateNumberContainer">
          <a href="#" className="rateNumber">
            4
          </a>
        </div>
        <div className="rateNumberContainer">
          <a href="#" className="rateNumber">
            5
          </a>
        </div>
      </div>
      <input type="submit" value="SUBMIT" id="buttonSubmit" />
    </div>
  );
}
