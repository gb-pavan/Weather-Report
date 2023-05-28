import './App.css';
import WeatherReportCard from './components/WeatherReportCard'
import React,{useState,useEffect} from 'react'
import SearchBar from './components/SearchBar'
import axios from 'axios'


const App = () => {

  const [city,setCity] = useState('')
  const [location,setLocation] = useState('')
  const [weatherData,setWeatherData] = useState()
  const [error, setError] = useState(null);

  // Get the weather report of current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d2f5964521a28db70dfd9da33299b5b0&units=metric`)
          .then((response) => {
            const { name } = response.data;
            setLocation(name);
            setError(null);
            
          })
          .catch((error) => {
            console.log(error);
            setError('Error fetching weather data.');                 
          });
      },
      (error) => {
        console.log(error);
        
      }
    );
    
  }, []);


  // Get the weather report of user given location
  useEffect(() => {
    const fetchData = async () => {
        try {
          if (location) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d2f5964521a28db70dfd9da33299b5b0`);
            console.log("location city response", response);
            
            return response;
          }
        } catch (error) {
          console.log(error);
          setError('Error fetching weather data.');
        }
      };
    
      fetchData().then((data) => {
        console.log("location city weather", data);
        
        setWeatherData(data);
      }).catch((error) => {
  console.log(error);
  setError('Error fetching weather data.'); 
});

      console.log('weatherData',weatherData )
  }, [location]);
  

  const handleInputKeyDown = event =>{
    if (event.key === 'Enter') {
      console.log('entered handleInputKeyDown - Enter key pressed');
      setWeatherData(undefined)
      
      setLocation(event.target.value);
    }
  }
  return (
    <div className='weather-report-container'>
      <SearchBar  city={city} setCity={setCity}  handleInputKeyDown={handleInputKeyDown}  />
      <WeatherReportCard weatherData={weatherData} error={error} />
    </div>
  )
}

export default App



