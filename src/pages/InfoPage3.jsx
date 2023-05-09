import React from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";
import MaterialVizDashboard from "../visualizations/MaterialVizDashboard/MaterialVizDashboard";
import CO2EmissionsViz from "../visualizations/CO2EmissionsViz/CO2EmissionsViz";
import ScrollToTop from "../config/ScrollToTop";

export const InfoPage3 = () => {
  return (
    <>
    <ScrollToTop />
      <PageScreen classname="infopage3">
        <div className="process-viz-div top-level-div">
          <h3 className="process-header">Costs of the Process</h3>
          < CO2EmissionsViz />
          <p>
            Different stages of clothing production also see varying amounts of energy use and emission.
            Producing garments emits the most CO2 because the machinery for washing, knitting, drying all require a large amount of energy.
          </p>
        </div>

        <div className='material-viz-div top-level-div'>
          <h3>Costs of the Materials</h3>
          < MaterialVizDashboard />
        </div>


        <div className="takeaways-div top-level-div">
          <h3>Breaking Down Top Materials</h3>
          <div className="takeaway-div" id='cotton-flashcard'>
            <img className="takeaway-img"
              src="img/cotton.jpg"
              alt="">
            </img>
            <div className="takeaway-text">
              <h4 className="takeaway-header">Cotton</h4>
              <p>While cotton is a natural and biodegradable fiber,
                it has high water consumption and energy usage during production.</p>
            </div>
          </div>
          <div className="takeaway-div" id='wool-flashcard'>
            <img className="takeaway-img"
              src="img/wool.jpg"
              alt="">
            </img>
            <div className="takeaway-text">
              <h4 className="takeaway-header">Wool</h4>
              <p>Wool has lower water and energy consumption compared to cotton but higher CO2 emissions.</p>
            </div>

          </div>
          <div className="takeaway-div" id='hemp-flashcard'>
            <img className="takeaway-img"
              src="img/hemp.jpg"
              alt="">
            </img>
            <div className="takeaway-text">
              <h4 className="takeaway-header">Hemp</h4>
              <p>Hemp consumes more water than cotton and wool but has lower CO2 emissions than both and moderate energy consumption.</p>
            </div>
          </div>
          <div className="takeaway-div" id='polyester-flashcard'>
          <img className="takeaway-img"
              src="img/polyester.jpg"
              alt="">
            </img>
            <div className="takeaway-text">
            <h4 className="takeaway-header">Polyester</h4>
            <p>Polyester is a synthetic fiber this means it needs less washing leading to its low water consumption,
              however the creation process has the highest CO2 emissions
              and its energy consumption falls between cotton and wool.</p>
          </div>
          </div>
        </div>

        <div className="tips-div top-level-div">
          <h3>What To Do as a Consumer</h3>
          <div className="tip-div">
            <p><b>1. Consider the holistic environmental impacts of fibers.</b><br />
              When choosing materials, take into account the full range of environmental consequences associated with various fibers.
              <i>Natural fibers</i> typically have lower environmental impacts overall; however, some, like cotton, require significant water resources during cultivation. Synthetic fibers, while offering appealing physical properties and low environmental impacts during production, can have negative effects during use, such as releasing microplastics when washed, leading to water pollution.
            </p>
          </div>
          <div className="tip-div">
            <p>
              <b>2. Research brand sustainability and certifications.</b><br />
              Investigate brands that emphasize sustainable and ethical practices, like using eco-friendly materials, conserving water and energy, and providing fair labor conditions. Seek garments with certifications like GOTS (Global Organic Textile Standard) or OEKO-TEX, which signify compliance with specific environmental and social standards throughout the production process.
            </p>
          </div>
          <div className="tip-div">
            <p>
              <b>3. Prioritize quality, durability, and sustainable fashion.</b><br />
              Embrace a conscious approach to fashion by buying fewer items and focusing on timeless, versatile, and high-quality pieces. Avoid short-lived trends and consider adopting recycled fashion, such as opting for used denim and leather items due to their significant environmental impacts during production.
            </p>
          </div>
          <div className="tip-div">
            <p>
              <b>4. Support local and ethical businesses.</b><br />
              Support local and ethical businesses: Choose to purchase from local designers and small businesses committed to sustainable and ethical practices. This not only helps minimize the environmental footprint of your clothing but also supports your community and allows you to access unique and authentic styles that reflect the culture and heritage of the region.
            </p>
          </div>
        </div >
      </PageScreen >
    </>
  )
}