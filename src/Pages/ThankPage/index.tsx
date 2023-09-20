import { useLocation } from "react-router-dom";
import thankIllustartion from "../../assets/images/illustration-thank-you.svg";
import "./styles.scss";

export default function ThankPage() {
  const { pathname } = useLocation();
  const selectedValue = pathname.split("/ThankYouForRate/")[1];
  return (
    <div id="thankPageElementsContainer">
      <img
        src={thankIllustartion}
        alt="thank you illustration"
        id="thankIllutrate"
      />
      <p id="selectedRate">You selected {selectedValue} of 5</p>
      <p id="ThankfullTitle">Thank you!</p>
      <p id="thankfullParagraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
