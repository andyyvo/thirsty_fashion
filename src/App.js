import './App.css';
import { useEffect, useState } from 'react';
import CO2EmissionsViz from './visualizations/CO2EmissionsViz/CO2EmissionsViz';
import MaterialVizDashboard from './visualizations/MaterialVizDashboard/MaterialVizDashboard';
import BackgroundWaterFillViz from './visualizations/BackgroundWaterFillViz/BackgroundWaterFillViz';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/AllRoutes';
import './assets/fonts/Avenir-Black.ttf';
import './assets/fonts/Avenir-BlackOblique.ttf';
import './assets/fonts/Avenir-Book.ttf';
import './assets/fonts/Avenir-BookOblique.ttf';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <div className='all-viz-div'>
        < MaterialVizDashboard />
        < CO2EmissionsViz />
        {isLoaded && < BackgroundWaterFillViz color='red' />}
      </div>
    </div>
  );
}

export default App;
