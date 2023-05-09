import React, { useEffect } from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";
import { useInView } from "react-intersection-observer";
import { ReactComponent as WaterDrop } from "../assets/images/waterdrop.svg";
import { ReactComponent as LakeOntario } from "../assets/images/lakeontario.svg";

export const InfoPage2 = () => {

  /** LOGIC */
  // firstRef will activate fullyScrolled when user scrolls to bottom of 79billion div to activate css change to push over to make room for lakeOntario div fade in
  const { ref: firstRef, inView: fullyScrolled } = useInView({threshold: 0.5});

  const splitScreen = () => {
    return fullyScrolled ? "infopage2-wrapper split" : "infopage2-wrapper";
  }

  return (
    <>
      <PageScreen classname="infopage2" noOverflowScroll>
        <div className={splitScreen()}>
          <div ref={firstRef} className="billion79">
            <WaterDrop />
            <h2 className="playfair blacktext">79 billion m<sup>3</sup></h2>
            <p className="avenir blacktext">water is used in fashion every year.</p>
          </div>
          <div className="lakeOntario">
            <LakeOntario />
            <h2 className="playfair blacktext">Half of Lake Ontario</h2>
            <p className="avenir blacktext">I don't know about you but that's a lot of water.</p>
          </div>
        </div>
        <div className="stuff">
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
          <h1 className="avenir large">hi.</h1>
        </div>
      </PageScreen>
    </>
  )
}