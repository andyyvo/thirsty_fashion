import './App.css';
import { useEffect, useState } from 'react';
import MaterialWaterUseViz from './visualizations/MaterialWaterUseViz/MaterialWaterUseViz';
import CO2EmissionsViz from './visualizations/CO2EmissionsViz/CO2EmissionsViz';
import BackgroundWaterFillViz from './visualizations/BackgroundWaterFillViz/BackgroundWaterFillViz';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/AllRoutes';
import './fonts/Avenir-Black.ttf';
import './fonts/Avenir-BlackOblique.ttf';
import './fonts/Avenir-Book.ttf';
import './fonts/Avenir-BookOblique.ttf';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="App">
        <RouterProvider router={router} />
        <div className='all-viz-div'>
        < MaterialWaterUseViz />
        < CO2EmissionsViz />
        {isLoaded && < BackgroundWaterFillViz color='red'/>}
        </div>
    </div>
  );
}

export default App;
