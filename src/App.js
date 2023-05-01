import './App.css';
// import MaterialWaterUseViz from './visualizations/MaterialWaterUseViz/MaterialWaterUseViz';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/AllRoutes';

function App() {
  return (
    <div className="App">
        {/* < MaterialWaterUseViz /> */}
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
