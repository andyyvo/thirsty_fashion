import './App.css';
// import MaterialWaterUseViz from './visualizations/MaterialWaterUseViz/MaterialWaterUseViz';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/AllRoutes';
import './fonts/Avenir-Black.ttf';
import './fonts/Avenir-BlackOblique.ttf';
import './fonts/Avenir-Book.ttf';
import './fonts/Avenir-BookOblique.ttf';

function App() {
  return (
    <div className="App">
        {/* < MaterialWaterUseViz /> */}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
