import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { PageScreen } from "../components/PageScreen/PageScreen";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Arrow } from "../assets/images/arrow.svg";
import { ReactComponent as HotTub } from "../assets/images/hottub.svg";
import { ReactComponent as WaterGlass } from "../assets/images/waterglass-on.svg";

export const InfoPage1 = () => {
  /** to get state of index (userInput) from HomePage */
  // help from https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
  const location = useLocation();
  const userInput = location.state.userInput;
  const cupsInTee = 11421;
  // help from https://stackoverflow.com/questions/4435170/how-to-parse-float-with-two-decimal-places-in-javascript
  const percentTee = (userInput/cupsInTee).toFixed(5);

  const BLEACH = 32;
  const DYE = 212;
  const PRINT = 53;
  const FINISH = 106;

  // scrolling effects https://spacejelly.dev/posts/how-to-trigger-a-function-when-scrolling-to-an-element-in-react-intersection-observer/
  // advantages to ref over qS: https://www.reddit.com/r/reactjs/comments/ks1voq/is_there_any_advantage_of_using_ref_over/
  // const [bleachingVisible, setBleachingVisible] = useState();
  // const [dyeingVisible, setDyeingVisible] = useState();
  // const [printingVisible, setPrintingVisible] = useState();
  // const [finishingVisible, setFinishingVisible] = useState();
  const [cupsVisible, setCupsVisible] = useState(0);
  // const bleachRef = useRef(); // to access DOM without querySelector
  // const dyeRef = useRef();
  // const printRef = useRef();
  // const finishRef = useRef();

  const { ref: bleachRef, inView: bleachingVisible } = useInView({threshold: 0.5});
  const { ref: dyeRef, inView: dyeingVisible } = useInView({threshold: 0.5});
  const { ref: printRef, inView: printingVisible } = useInView({threshold: 0.5});
  const { ref: finishRef, inView: finishingVisible } = useInView({threshold: 0});

  // useEffect(() => {
  //   // console.log('myRef', myRef.current);
  //   const bleachObserver = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setBleachingVisible(entry.isIntersecting);
  //     // console.log('entry', entry);
  //     // console.log('entry.isIntersecting', entry.isIntersecting);
  //   });
  //   bleachObserver.observe(bleachRef.current);
  //   const dyeObserver = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setDyeingVisible(entry.isIntersecting);
  //     // console.log('entry', entry);
  //     // console.log('entry.isIntersecting', entry.isIntersecting);
  //   });
  //   dyeObserver.observe(dyeRef.current);
  //   const printObserver = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setPrintingVisible(entry.isIntersecting);
  //     // console.log('entry', entry);
  //     // console.log('entry.isIntersecting', entry.isIntersecting);
  //   });
  //   printObserver.observe(printRef.current);
  //   const finishObserver = new IntersectionObserver((entries, observer) => {
  //     const entry = entries[0];
  //     setFinishingVisible(entry.isIntersecting);
  //     // console.log('entry', entry);
  //     // console.log('entry.isIntersecting', entry.isIntersecting);
  //   });
  //   finishObserver.observe(finishRef.current);
  // }, []);

  useEffect(() => {
    if (bleachingVisible) {
      setCupsVisible(BLEACH);
    } else if (dyeingVisible) {
      setCupsVisible(BLEACH + DYE);
    } else if (printingVisible) {
      setCupsVisible(BLEACH + DYE + PRINT);
    } else if (finishingVisible) {
      setCupsVisible(BLEACH + DYE + PRINT + FINISH);
    } else {
      setCupsVisible(0);
    }
  }, [bleachingVisible, dyeingVisible, printingVisible, finishingVisible])

  /** sticky cups scrolling effect */
  const stickyCups = (numCups) => {
    console.log("numCups " + numCups)
    return (
      <>
        {[...Array(numCups)].map((val, index) => {
          return (
            <WaterGlass key={index} />
          )
        })}
      </>
    )
  }

  return (
    <>
      <div className="infopage1-background">
        <div className="stickyCupsBackground">
          {stickyCups(cupsVisible)}
        </div>
        <PageScreen classname="infopage1">
          <div className="floatingScrollArrow"><Arrow /></div>
          {/* T-SHIRT CONTENT */}
          <div className="teeshirtcontent">
            <div className="teeshirtcontent-left">
              <HotTub />
              <HotTub />
            </div>
            <div className="teeshirtcontent-right">
              <h1 className="playfair large whitetext">{percentTee}%</h1>
              <p className="avenir blacktext">That's how much water you drink compared to the water needed to <b>cultivate cotton</b> in <b>a single cotton t-shirt!</b> That's {cupsInTee} cups of water to be exact (about 2 four-person hot tubs). Imagine you pouring the {userInput} cups of water you drink on average into one hot tub. Let that sink in.</p>
            </div>
          </div>
          <div className="emptydivspace">
            <div className="emptydivspace-content">
              <h2 className="avenir inline whitetext">But wait!</h2>
              <h2 className="playfair-italic inline whitetext"> There's more!</h2>
              <p className="avenir blacktext">We were only talking about cultivating the cotton. Now that we have the cotton, we have to go through the <b>processing stage</b> to get our t-shirt! Processing can be simplified into a four-step process: bleaching, dyeing, printing, and finishing.</p>
            </div>
          </div>
          {/* STEPS TO MAKE T-SHIRT: STEP 1 */}
          <div ref={bleachRef} className="bleachingcontent">
            <div className="content-wrapper">
              <h1 className="playfair large creamtext">Bleaching</h1>
              <p className="avenir blacktext">In this step, chemicals are used to strip the fabric of its natural color and impurities, creating a clean and uniform base for further processing. This process requires <b>11 to 32 cups of water!</b></p>
            </div>
          </div>
          {/* STEPS TO MAKE T-SHIRT: STEP 2 */}
          <div ref={dyeRef} className="dyeingcontent">
            <div className="content-wrapper">
              <h1 className="playfair large creamtext">Dyeing</h1>
              <p className="avenir blacktext">The prepared fabric is soaked in a dye solution, allowing the fibers to absorb the color, with chemicals sometimes added to ensure colorfastness. This process requires <b>53 to 212 cups of water!</b> Looks like we're at 244 cups of water now.</p>
            </div>
          </div>
          {/* STEPS TO MAKE T-SHIRT: STEP 3 */}
          <div ref={printRef} className="printingcontent">
            <div className="content-wrapper">
              <h1 className="playfair large creamtext">Printing</h1>
              <p className="avenir blacktext">Various techniques, such as screen printing, digital printing, or heat transfer printing, are employed to apply designs or patterns to the fabric. This process requires <b>11 to 53 cups of water!</b> We're looking at a total of 297 cups of water so far.</p>
            </div>
          </div>
          {/* STEPS TO MAKE T-SHIRT: STEP 4 */}
          <div ref={finishRef} className="finishingcontent">
            <div className="content-wrapper">
              <h1 className="playfair large creamtext">Finishing</h1>
              <p className="avenir blacktext">A range of treatments, including softening, water repellency, and anti-shrink or anti-wrinkle applications, are applied to enhance the fabric's quality and wearability. This process requires <b>11 to 106 cups of water!</b> In total, that's another 403 cups to factor in!</p>
            </div>
          </div>
        </PageScreen>
      </div>
      <div className="postinfopage1">
        <div className="postinfopage1-content">
          <h1 className="playfair whitetext">11,824 cups of water</h1>
          <h4 className="avenir whitetext">2,797 liters</h4>
          <div className="leftlinebordertext">
            <p className="avenir whitetext">That's enough water for over a thousand people - even up to 2,000 (assuming 6-8 cups of water a day)! Imagine, you could last four years worth of water from the amount needed to make the cotton t-shirt you're wearing!</p>
          </div>
          <h1 id="think" className="playfair large whitetext">But let's think</h1>
          <Link to="/info2">
            <span id="bigger" className="whitetext"><u>BIGGER.</u></span>
          </Link>
        </div>
      </div>
    </>
  )
}