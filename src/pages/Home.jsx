import React from 'react';
import TopButtons from '../components/TopButtons';
import { UilSun } from '@iconscout/react-unicons';

function Home({ weatherRecord }) {
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

export default Home;