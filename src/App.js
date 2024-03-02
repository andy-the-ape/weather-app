import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const baseURL = 'http://localhost:8080';
  const [weatherRecord, setWeatherRecord] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // invalid url will trigger a 404 error
    axios.get(`${baseURL}/api/v1/weather/03-02-2024`).then((response) => {
      setWeatherRecord(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);
  
  if (error) return `Error: ${error.message}`;
  if (!weatherRecord) return "No weather record!"

  return (
    <div className="app">
      <div className="container">


        <div className="top">
          <div className="location">
            <p>{weatherRecord.location}</p>
          </div>
          <div className="temp">
            <h1>{weatherRecord.temperature.toFixed()}°C</h1>
          </div>
          <div className="description">
            <p>{weatherRecord.weatherDescription}</p>
          </div>
        </div>


        <div className="bottom">
            <div className="wind">
              <p className='bold'>{weatherRecord.windSpeed.toFixed()} km/t</p>
              <p>Vindhastighed</p>
            </div>
            <div className="direction">
              <p className='bold'>{weatherRecord.windDirection}</p>
              <p>Vindretning</p>
            </div>
            <div className="humidity">
              <p className='bold'>{weatherRecord.humidity}%</p>
              <p>Luftfugtighed</p>
            </div>
        </div>
          
      </div>
    </div>
  );
}

export default App;
