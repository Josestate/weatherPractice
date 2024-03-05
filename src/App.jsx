import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [temp, setTemp] = useState();

  const succes = info =>{
    console.log(info)
    setCoords({
      lat: info.coords.latitude,
      lon: info.coords.longitude
    })
  }
  


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition( succes )
  }, [])



  useEffect(()=>{
    if(coords){
    const apiKey = '7438c9481c599ed981801783b7e38850';
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`)
    .then(res => res.json())
    .then(resp => {
      setWeather((resp))
        const celsius = (resp.main.temp - 273.15).toFixed(1)
        const fahrenheit = (( 9/5 * celsius ) + 32).toFixed(1)
        setTemp({celsius, fahrenheit})
    })
    .catch(error=>console.log(error))
    }
  }, [coords])

  return (
    <>
      <WeatherCard weather={weather} temp={temp}/>
    </>
  )
}

export default App
