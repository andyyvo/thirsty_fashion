import React from "react";
import { PageScreen } from "../components/PageScreen/PageScreen";
import MaterialVizDashboard from "../visualizations/MaterialVizDashboard/MaterialVizDashboard";
import CO2EmissionsViz from "../visualizations/CO2EmissionsViz/CO2EmissionsViz";

export const InfoPage3 = () => {
  return (
    <>
      <PageScreen classname="infopage3">
        <div className='all-viz-div'>
          < MaterialVizDashboard />
          < CO2EmissionsViz />
        </div>
        <div className="takeaways-div">
          <div className="takeaway-div">
            <h4>Cotton</h4>
            <p></p>
          </div>
          <div className="takeaway-div">
            <h4>Wool</h4>
            <p></p>
          </div>
          <div className="takeaway-div">
            <h4>Hemp</h4>
            <p></p>
          </div>
          <div className="takeaway-div">
            <h4>Polyester</h4>
            <p></p>
          </div>
        </div>
        <div className="tips-div">
            <h4>Four tips while buying clothes</h4>
            <div className="tip-div">
            <p>1</p>
            </div>
            <div className="tip-div">
            <p>2</p>
            </div>
            <div className="tip-div">
            <p>3</p>
            </div>
            <div className="tip-div">
            <p>4</p>
            </div>
        </div>
      </PageScreen>
    </>
  )
}