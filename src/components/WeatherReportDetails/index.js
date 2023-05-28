import React from 'react'
import './index.css'

const WeatherReportDetails = props => {
    const {weatherData} = props
  return (
    weatherData !== undefined ?
        (
        <div className='report-display-container'>
          <p className='city-name'>{weatherData.data.name}</p>
          <div>
            <img src ={`https://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}@2x.png`} alt ='' />
            <p className='weather-status'>{weatherData.data.weather[0].description}</p>
          </div>            
          <div className="values-container">
            <div className="feels">
              {weatherData ? <p className='bold'>{weatherData.data.main.temp.toFixed()}°F</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {weatherData ? <p className='bold'>{weatherData.data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {weatherData ? <p className='bold'>{weatherData.data.wind.speed} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
        ):
        (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>)
  )
}

export default WeatherReportDetails
