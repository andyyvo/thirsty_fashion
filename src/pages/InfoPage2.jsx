import React from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";
// import { useInView } from "react-intersection-observer";
import { ReactComponent as WaterDrop } from "../assets/images/waterdrop.svg";
import { ReactComponent as LakeOntario } from "../assets/images/lakeontario.svg";
import { ReactComponent as WaterDrop50 } from "../assets/images/waterdrop50.svg";
import { ReactComponent as California } from "../assets/images/california.svg";
import { ReactComponent as WaterDrop95 } from "../assets/images/waterdrop95.svg";
import { Link } from "react-router-dom";
import ScrollToTop from "../config/ScrollToTop";

export const InfoPage2 = () => {

  /** LOGIC */
  // firstRef will activate fullyScrolled when user scrolls to bottom of 79billion div to activate css change to push over to make room for lakeOntario div fade in
  // const { ref: firstRef, inView: fullyScrolled } = useInView({threshold: 1});

  // const splitScreen = () => {
  //   return fullyScrolled ? "infopage2-wrapper split" : "infopage2-wrapper";
  // }

  // animate on scroll
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.scrollY / (document.body.offsetHeight - window.innerHeight));
  }, false);

  return (
    <>
      <ScrollToTop />
      <PageScreen classname="infopage2" noOverflowScroll>
        <div className="infopage2-wrapper">
          <div className="stickyscroll1">
            <div className="bigSVG">
              <WaterDrop />
            </div>
            <h2 className="playfair blacktext">79 billion m<sup>3</sup></h2>
            <p className="avenir blacktext">water is used in fashion every year.</p>
          </div>
          <div className="stickyscroll2">
            <div className="bigSVG">
              <LakeOntario />
            </div>
            <h2 className="playfair blacktext">= Half of Lake Ontario</h2>
            <p className="avenir blacktext">I don't know about you but that's a lot of water.</p>
          </div>
        </div>
        <div className="emptyspace"></div>
        <div className="infopage2-wrapper2">
          <div className="waterdrop50">
            <div className="bigSVG">
              <WaterDrop50 />
            </div>
            <h2 className="playfair blacktext">55.7% of that</h2>
            <p className="avenir blacktext">is used in textile production every year</p>
          </div>
          <div className="california">
            <div className="bigSVG">
              <California />
            </div>
            <h2 className="playfair blacktext">= Annual water usage</h2>
            <p className="avenir blacktext">in California in 2021</p>
          </div>
        </div>
        <div className="emptyspace"></div>
        <div className="infopage2-wrapper2">
          <div className="waterdrop50">
            <div className="bigSVG">
              <WaterDrop95 />
            </div>
            <h2 className="playfair blacktext">95% of that is associated with cotton production</h2>
            <p id="source" className="avenir blacktext">Source: Global Fashion Agenda (GFA) & The Boston Consulting Group (BCG). Pulse of the fashion industry (2017)</p>
          </div>
        </div>
        <Link to="/thirsty_fashion/info3">
          <h4 id="toInfo3" className="avenir blacktext"><u>Let's take a look at how water use compares to other resources in fashion!</u></h4>
        </Link>
      </PageScreen>
    </>
  )
}