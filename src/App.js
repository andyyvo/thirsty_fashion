import './App.css';
// import MaterialWaterUseViz from './visualizations/MaterialWaterUseViz/MaterialWaterUseViz';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/AllRoutes';
import './assets/fonts/Avenir-Black.ttf';
import './assets/fonts/Avenir-BlackOblique.ttf';
import './assets/fonts/Avenir-Book.ttf';
import './assets/fonts/Avenir-BookOblique.ttf';

function App() {
  return (
    <div className="App">
        {/* < MaterialWaterUseViz /> */}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
