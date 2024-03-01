import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = 'https://api.openweathermap.org/data/2.5/weather?lat=55.39594&lon=10.38831&appid=2438ec868e96bc0d041dc6fde565f0b6';

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Odense</p>
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
