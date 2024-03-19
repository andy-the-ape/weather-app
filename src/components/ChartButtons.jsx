import React from 'react';
import './ChartButtons.css';

function ChartButtons() {


    return (
        <div className='chartButtonsContainer'>
            <button className="windButton">Temperatur
          </button>
          <button className="directionButton">
            Vindhastighed
          </button>
          <button className="humidityButton">
            Luftfugtighed
          </button>
        </div>

    )
}

export default ChartButtons;
