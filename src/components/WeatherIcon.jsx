import { 
    UilSun, 
    UilCloud,
    UilClouds,
    UilCloudRain,
    UilCloudShowersHeavy,
    UilCloudHail,
    UilCloudSun,
    UilSnowflake,
    UilCloudWind,
    UilWind,
    UilWindSun,
    UilThunderstorm
    } from '@iconscout/react-unicons';
import { useState, useEffect } from 'react';

    const weatherTypes = {
        isCloud: [],
        isHeavyCloud: [],
        isSun: [],
        isRain: [],
        isHeavyRain: [],
        isHail: [],
        isSnow: [],
        isThunderstorm: [],
        isWind: [],
        isWindSun: [],
        isWindCloud: [],
        isCloudSun: []
    }; 

    const weatherIcons = {
        isCloud: <UilCloud />,
        isHeavyCloud: <UilClouds />,
        isSun: <UilSun />,
        isRain: <UilCloudRain />,
        isHeavyRain: <UilCloudShowersHeavy />,
        isHail: <UilCloudHail />,
        isSnow: <UilSnowflake />,
        isThunderstorm: <UilThunderstorm />,
        isWind: <UilWind />,
        isWindSun: <UilWindSun />,
        isWindCloud: <UilCloudWind />,
        isCloudSun: <UilCloudSun />
    };

    const WeatherIcon =  ({currentWeatherType}) => {
        const [currentWeatherIcon, setCurrentWeatherIcon] = useState('isSun');

        

        
    
      return (
        <div className='weatherIcon'>
            {weatherIcon}
        </div>
      )
    }
    
    export default WeatherIcon;