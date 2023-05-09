import React, { useEffect, useState } from 'react';
import MaterialWaterUseViz from '../MaterialWaterUseViz/MaterialWaterUseViz';
import MaterialEnergyUseViz from '../MaterialEnergyUseViz/MaterialEnergyUseViz';
import MaterialCO2Viz from '../MaterialCO2Viz/MaterialCO2Viz';
import './MaterialVizDashboard.css'

export default function MaterialVizDashboard() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);
    const third_width = Math.round(window.innerWidth/4);
    const third_height = Math.round(third_width * 2/3);
    return (
        <div className='t-shirt-viz-dashboard'>
            <div >
                {isLoaded && < MaterialWaterUseViz height={third_height} width={third_width} margins={{ top: 15, right: 15, bottom: 20, left: 80 }} />}
                <p>blurb goes here</p>
            </div>
            <div>
                {isLoaded && < MaterialEnergyUseViz height={third_height} width={third_width} margins={{ top: 15, right: 15, bottom: 20, left: 80 }} />}
                <p>blurb goes here</p>
            </div>
            <div>
                {isLoaded && < MaterialCO2Viz height={third_height} width={third_width} margins={{ top: 15, right: 15, bottom: 20, left: 80 }} />}
                <p>blurb goes here</p>
            </div>
        </div>
    )
}
