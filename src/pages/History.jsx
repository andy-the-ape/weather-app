import React, { useState, useEffect } from 'react';
import TopButtons from '../components/TopButtons';
import axios from 'axios';
import LineChart from '../components/LineChart';

function History() {
  const [weatherRecords, setWeatherRecords] = useState([]);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState({
    labels: [weatherRecords.map((record) => record.date)],
    datasets: [
      {
        label: 'Temperatur',
        data: [weatherRecords.map((record) => record.temperature)],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
      },
    ]
  });

  useEffect(() => {
    const baseURL = 'http://localhost:8080';
    axios.get(`${baseURL}/api/v1/weather/all`)
      .then((response) => {
        setWeatherRecords(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!weatherRecords || weatherRecords.length === 0) return "No weather records!";

  

    return (
        <div className="app">
      <div className="container">
        <div className="topbuttons">
          <TopButtons />
        </div>
        <div className="top">
          <div className="location">
            
          </div>
          <div className="temp">
            
          </div>
          <div className="description">
            
          </div>
        </div>
        <div className="mid">
            <LineChart chartData={chartData}/>
        </div>
        <div className="bottom">
          <div className="wind">Temperatur
          </div>
          <div className="direction">
            Vindhastighed
          </div>
          <div className="humidity">
            Luftfugtighed
          </div>
        </div>
      </div>
    </div>
    )
}

export default History;