import { useContext, useEffect } from 'react';
import { WeatherContextList } from './store/weather-store';
import InputHead from './components/InputHead'
import DetailList from './components/DetailList'
import Clothes from './components/Cothes';
import { WeatherContextProvider } from './store/weather-store';
import 'bootstrap/dist/css/bootstrap.min.css';
import rainBg from './assets/rain.gif';
import cloudBg from './assets/clouds.gif';
import snowBg from './assets/snow.gif';
// and so on...

import './App.css'


function AppContent() {
  const { weatherFullDetails } = useContext(WeatherContextList);
  const weatherType = weatherFullDetails?.weather?.[0]?.main;

  const getBackgroundImage = () => {
    switch (weatherType) {
      case 'Rain':
      case 'Drizzle':
        return `url(${rainBg})`;
      case 'Snow':
        return `url(${snowBg})`;
      case 'Clouds':
        return `url(${cloudBg})`;
      case 'Clear':
        return ''; // fallback handled separately
      default:
        return '';
    }
  };

  useEffect(() => {
    const bg = getBackgroundImage();
    document.body.style.background = bg
      ? `${bg} center center / cover no-repeat fixed`
      : 'linear-gradient(to top, #56ccf2, #2f80ed)';
    document.body.style.minHeight = '100vh';

    return () => {
      // Reset on unmount (optional)
      // document.body.style.background = '';
    };
  }, [weatherType]);

  // Your normal app layout
  return (
    <div className="container">
      <h1 className="text-light">Weather Forecast</h1>
      <div className="date">
        {new Date().toLocaleDateString("en-GB", {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </div>
      <InputHead />
      <DetailList />
    </div>
  );
}


function App() {
  return (
    <WeatherContextProvider>
      <AppContent />
      <Clothes />
    </WeatherContextProvider>
  );
}


export default App
