import { React, useState, useEffect } from 'react';
import TopButtons from '../components/TopButtons';
import WeatherIcon from '../components/WeatherIcon';

function Home({ weatherRecord }) {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Define logic to choose background image based on weatherRecord
    const currentWeatherType = weatherRecord.type.apiId;

    const weatherTypes = {
      isCloud: [802],
        isHeavyCloud: [803, 804],
        isSun: [800],
        isRain: [300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 511],
        isHeavyRain: [502, 503, 504, 520, 521, 522, 531],
        isHail: [],
        isSnow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
        isThunderstorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
        isCloudSun: [801],
        isWarning: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781]
    };

    const backgroundImages = {
      isCloud: './assets/cloudy-day.jpg',
      isHeavyCloud: './assets/cloudy-day.jpg',
      isSun: './assets/clear-day.jpg',
      isRain: './assets/rainy-day.jpg',
      isHeavyRain: './assets/rainy-day.jpg',
      isHail: './assets/rainy-day.jpg',
      isSnow: './assets/snowy-day.jpg',
      isThunderstorm: './assets/rainy-day.jpg',
      isWind: './assets/clear-day.jpg',
      isWindSun: './assets/clear-day.jpg',
      isWindCloud: './assets/cloudy-day.jpg',
      isCloudSun: './assets/cloudy-day.jpg',
      isWarning: './assets/rainy-day.jpg'
    };

    let currentType = "isSun";
    Object.entries(weatherTypes).forEach(([type, ids]) => {
      if (ids.includes(currentWeatherType)) {
        currentType = type;
      }
    });

    console.log("Current Weather Type:", currentWeatherType);
    console.log("Current Type:", currentType);
    console.log("Background Image URL:", backgroundImages[currentType]);
    
    setBackgroundImage(backgroundImages[currentType]);
  }, [weatherRecord]);


  return (
    <div className="app" style={{ 
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: '#fff',
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }}>
      <div className="container">
        <div className="topbuttons">
          <TopButtons />
        </div>
        <div className="top">
          <div className="location">
            {weatherRecord.location.name && <p>{weatherRecord.location.name}</p>}
          </div>
          <div className="date">
            {weatherRecord.date && <p>{weatherRecord.date}</p>}
          </div>
          <div className="temp">
            {weatherRecord.temperature && <h1>{weatherRecord.temperature.toFixed()}°C</h1>}
          </div>
          <div className="description">
            {weatherRecord.description && <p>{weatherRecord.description}</p>}
          </div>
        </div>
        <div className="mid">
          <div className="weathericon">
            <WeatherIcon currentApiId={weatherRecord.type.apiId}/>
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
