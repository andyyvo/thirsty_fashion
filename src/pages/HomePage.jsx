import React from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";
import { Rating } from "../components/Rating/Rating";

export const HomePage = () => {
  return (
    <>
      <PageScreen classname="homepage">
        <div className="homepage-hero">
          <h2 className="playfair">The</h2>
          <h1 className="playfair inline">Thirsty Fashion </h1>
          <h1 className="playfair-italic right large">Industry.</h1>
        </div>
        <div className="homepage-survey">
          <h3 className="avenir">ABOUT YOUR WATER USAGE</h3>
          <h2 className="playfair right inline">How many cups of </h2>
          <h2 className="playfair-italic right inline">water </h2>
          <h2 className="playfair right inline">do you drink a day?</h2>
          <Rating
            ratingMax={10}
            ratingItemOn={process.env.PUBLIC_URL + "/images/waterglass-on.svg"}
            ratingItemOff={process.env.PUBLIC_URL + "/images/waterglass-off.svg"}
            ratingText={"cups of water"}
          />
        </div>
      </PageScreen>
    </>
  );
}