import React from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";
import { useLocation } from "react-router-dom";

export const InfoPage1 = () => {
  /** to get state of index (userInput) from HomePage */
  const location = useLocation();
  const userInput = location.state.userInput;
  const cupsInTee = 11421
  const percentTee = (userInput/cupsInTee).toFixed(5);

  return (
    <div className="infopage1-background">
      <PageScreen classname="infopage1">
        {percentTee}
      </PageScreen>
    </div>
  )
}