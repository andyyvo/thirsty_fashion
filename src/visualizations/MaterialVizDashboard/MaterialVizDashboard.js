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

    return (
        <div className='t-shirt-viz-dashboard'>
            <div >
                {isLoaded && < MaterialWaterUseViz height={300} width={400} margins={{ top: 15, right: 15, bottom: 20, left: 80 }} />}
                <p>blurb goes here</p>
            </div>
            <div>
                {isLoaded && < MaterialEnergyUseViz height={300} width={400} margins={{ top: 15, right: 15, bottom: 20, left: 80 }} />}
                <p>blurb goes here</p>
            </div>
            <div>
                {isLoaded && < MaterialCO2Viz height={300} width={400} margins={{ top: 15, right: 15, bottom: 20, left: 80 }} />}
                <p>blurb goes here</p>
            </div>
        </div>
    )
}
