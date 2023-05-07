import React, {useState} from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";
import { Rating } from "../components/Rating/Rating";
import { ReactComponent as Wave } from "../assets/images/wave_animation.svg";
import { ReactComponent as WaterGlassOn } from "../assets/images/waterglass-on.svg";
import { ReactComponent as WaterGlassOff } from "../assets/images/waterglass-off.svg"

export const HomePage = () => {
  /** ratingSelected state for the ratingSelected prop */
  const [ratingSelected, setRatingSelected] = useState(0);
  /** ratingTrigger function to start next page animation */
  const ratingTrigger = (index) => {
    console.log(index);
  }

  return (
    <>
      <PageScreen classname="homepage" snap>
        <div className="homepage-hero">
          <h2 id="homepage-hero-title1" className="playfair">The</h2>
          <h1 id="homepage-hero-title2" className="playfair inline">Thirsty Fashion </h1>
          <h1 id="homepage-hero-title3" className="playfair-italic right large">Industry.</h1>
        </div>
        <div className="pourAnimation"></div>
        <div className="fillAnimation">
          <Wave />
        </div>
        <div className="homepage-survey">
          <div className="homepage-survey-content">
            <h4 id="homepage-survey-title" className="avenir">ABOUT YOUR WATER USAGE</h4>
            <div id="homepage-survey-question">
              <h2 className="playfair right inline">How many cups of </h2>
              <h2 className="playfair-italic right inline">water </h2>
              <h2 className="playfair right inline">do you drink a day?</h2>
            </div>
            <Rating
              ratingMax={10}
              ratingItemOn={<WaterGlassOn />}
              ratingItemOff={<WaterGlassOff />}
              ratingText={"cups of water"}
              ratingTrigger={(index) => ratingTrigger(index)}
              ratingAlign={"center"}
              ratingSelected={0}
            />
          </div>
        </div>
      </PageScreen>
    </>
  );
}