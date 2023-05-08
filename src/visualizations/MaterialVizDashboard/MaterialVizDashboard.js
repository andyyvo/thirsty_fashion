import React, {useEffect, useState} from 'react';
import MaterialWaterUseViz from './visualizations/MaterialWaterUseViz/MaterialWaterUseViz';
import MaterialEnergyUseViz from './visualizations/MaterialEnergyUseViz/MaterialEnergyUseViz';
import MaterialCO2Viz from './visualizations/MaterialCO2Viz/MaterialCO2Viz';

export default function MaterialVizDashboard() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className='t-shirt-viz-dashboard'>
            {isLoaded && < MaterialWaterUseViz height={300} width={400} margins={{ top: 15, right: 15, bottom: 20, left: 80 }} />}
            {isLoaded && < MaterialEnergyUseViz />}
            {isLoaded && < MaterialCO2Viz />}
        </div>
    )
}
