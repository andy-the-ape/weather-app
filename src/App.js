import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const baseURL = 'http://localhost:8080';
  const [weatherRecord, setWeatherRecord] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // invalid url will trigger an 404 error
    axios.get(`${baseURL}/api/v1/weather/28-02-2024`).then((response) => {
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
            <p>{weatherRecord.title}</p>
          </div>
          <div className="temp">
            <h1>15°C</h1>
          </div>
          <div className="description">
            <p>Overskyet</p>
          </div>
        </div>
        <div className="bottom">
            <div className="feels">
              <p className='bold'>12°C</p>
              <p>Føles som</p>
            </div>
            <div className="humidity">
              <p className='bold'>80%</p>
              <p>Luftfugtighed</p>
            </div>
            <div className="wind">
              <p className='bold'>10 km/t</p>
              <p>Vindhastighed</p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
