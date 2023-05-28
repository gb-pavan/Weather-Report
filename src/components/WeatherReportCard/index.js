import React,{useState} from 'react'
import './index.css'
import WeatherReportDetails from '../WeatherReportDetails'

const WeatherReportCard = props => {
    
    const {error,weatherData} = props

    return (
        <div className='weather-report-card-container'>
            {error ? 
                (
                    <div className="error-container">{error}</div>
                ) 
          : (<WeatherReportDetails weatherData={weatherData} />)
          
          }
        </div>
    )
}

export default WeatherReportCard
