import React, { useState, useEffect } from 'react';
import TopButtons from '../components/TopButtons';
import axios from 'axios';
import LineChart from '../components/LineChart';

function History() {
  const [weatherRecords, setWeatherRecords] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Temperatur',
        data: [],
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 255, 255)',
        borderWidth: 2,
      },
    ]
  });

  useEffect(() => {
    const baseURL = 'http://localhost:8080';
    axios.get(`${baseURL}/api/v1/weather/historik`)
      .then((response) => {
        setWeatherRecords(response.data);

        // Update chartData based on fetched weather records
        const labels = response.data.map((record) => record.date + '\n' + record.time);
        const data = response.data.map((record) => record.temperature);
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Temperatur',
              data: data,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 255, 255)',
              borderWidth: 2,
            },
          ]
        });
        setLoading(false); // Update loading state
      })
      .catch(error => {
        setError(error);
        setLoading(false); // Update loading state even if there's an error
      });
  }, []);

  if (loading) return "Loading..."; // Display loading message while waiting for API response
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
  );
}

export default History;
