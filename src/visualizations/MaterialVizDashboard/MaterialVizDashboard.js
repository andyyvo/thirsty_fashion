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
    const third_width = Math.round(window.innerWidth / 4);
    const third_height = Math.round(third_width * 2 / 3);
    const third_margin = { top: 25, right: 0, bottom: 20, left: 80 };
    return (
        <div className='t-shirt-viz-dashboard'>
            <div>
                {isLoaded && < MaterialWaterUseViz height={third_height} width={third_width} margins={third_margin} />}
                <div className='material-text-div'>
                    <p><b>Cotton cultivation is especially water-intensive</b>, contributing significantly to the fashion industry's water consumption. Factors such as production methods, irrigation practices, and geographical location of cultivation also influence the amount of water utilized in the process.
                    </p>
                </div>
            </div>
            <div>
                {isLoaded && < MaterialEnergyUseViz height={third_height} width={third_width} margins={third_margin} />}
                <div className='material-text-div'>
                    <p><b>Synthetic fibers like polyester and polyamide generally require more energy</b> during production compared to natural fibers like cotton and hemp. Factors such as production methods, machinery efficiency, and energy sources also affect the overall energy use in the industry.
                    </p>
                </div>
            </div>
            <div>
                <div className='material-text-div'>
                    {isLoaded && < MaterialCO2Viz height={third_height} width={third_width} margins={third_margin} />}
                    <p><b>CO2 emissions in the fashion industry are higher for synthetic fibers</b>, which are derived from fossil fuels, compared to natural fibers. Factors such as production methods, transportation, and distribution of finished products also contribute to CO2 emissions. Long transportation distances for wool from suppliers to manufacturers result in higher CO2 emissions.
                    </p>
                </div>
            </div>
        </div >
    )
}
