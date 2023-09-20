import { useState } from "react";
import iconStar from "../../assets/images/icon-star.svg";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function RatingPage() {
  const [selectedValue, setSelectedValue] = useState<number>(-1);
  const selectedValueHandler = (val: number) => {
    setSelectedValue(val);
  };
  return (
    <div id="ratingPageElementsContainer">
      <img src={iconStar} alt="icon start" id="iconImage" />
      <p id="rateTitle">How did we do?</p>
      <p id="rateDescription">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div id="rateNumbersContainer">
        <a
          href="#"
          className="rateNumber"
          onClick={() => selectedValueHandler(1)}
        >
          1
        </a>
        <a
          href="#"
          className="rateNumber"
          onClick={() => selectedValueHandler(2)}
        >
          2
        </a>
        <a
          href="#"
          className="rateNumber"
          onClick={() => selectedValueHandler(3)}
        >
          3
        </a>
        <a
          href="#"
          className="rateNumber"
          onClick={() => selectedValueHandler(4)}
        >
          4
        </a>
        <a
          href="#"
          className="rateNumber"
          onClick={() => selectedValueHandler(5)}
        >
          5
        </a>
      </div>
      <Link to={`/ThankYouForRate/${selectedValue}`} id="buttonSubmit">
        SUBMIT
      </Link>
    </div>
  );
}
