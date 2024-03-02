import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopButtons from './components/TopButtons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import History from './pages/History';
import { UilSun } from '@iconscout/react-unicons';

function App() {
  const baseURL = 'http://localhost:8080';
  const [weatherRecord, setWeatherRecord] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // invalid URL will trigger a 404 error
    axios.get(`${baseURL}/api/v1/weather/today`)
      .then((response) => {
        setWeatherRecord(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!weatherRecord) return "No weather record!";

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AppContent weatherRecord={weatherRecord} />}>
          <Route path="historik" element={<History/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function AppContent({ weatherRecord }) {
  return (
    <div className="app">
      <div className="container">
        <div className="topbuttons">
          <TopButtons />
        </div>
        <div className="top">
          <div className="location">
            {weatherRecord.location && <p>{weatherRecord.location}</p>}
          </div>
          <div className="temp">
            {weatherRecord.temperature && <h1>{weatherRecord.temperature.toFixed()}°C</h1>}
          </div>
          <div className="description">
            {weatherRecord.weatherDescription && <p>{weatherRecord.weatherDescription}</p>}
          </div>
        </div>
        <div className="mid">
          <div className="weathericon">
            <UilSun size={200}/>
          </div>
        </div>
        <div className="bottom">
          <div className="wind">
            {weatherRecord.windSpeed && (
              <>
                <p className='bold'>{weatherRecord.windSpeed.toFixed()} km/t</p>
                <p>Vindhastighed</p>
              </>
            )}
          </div>
          <div className="direction">
            {weatherRecord.windDirection && (
              <>
                <p className='bold'>{weatherRecord.windDirection}</p>
                <p>Vindretning</p>
              </>
            )}
          </div>
          <div className="humidity">
            {weatherRecord.humidity && (
              <>
                <p className='bold'>{weatherRecord.humidity}%</p>
                <p>Luftfugtighed</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
