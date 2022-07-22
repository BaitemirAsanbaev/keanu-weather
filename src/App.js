import './App.css';
import naked from "./assets/naked.png"
import sleepy from "./assets/sleepy.png"
import tshirt from "./assets/t-shirt.png"
import summer from "./assets/summer.png"
import casual from "./assets/casual.png"
import sport from "./assets/sport.png"
import hoody from "./assets/hoody.png"
import coat from "./assets/coat.png"
import cloack from "./assets/cloack.png"
import jacket from "./assets/jacket.png"
import { useState } from 'react';
import Header from './Header/Header';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import axios from 'axios';


function App() {

  const [keanu, setKeanu] = useState(casual)
  const [currentData, setCurrentData] = useState({})

  function getData(city) {
    try {
      axios({
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=731ebe35142a1bfcacb3789bb14c5069&`,
        responseType: 'stream'
      })
        .then(function (response) {
          let celsium = Math.round(response.data.main.temp - 273.15)
          console.log(response);
          let newData = {
            city: response.data.name,
            temp: celsium,
            desc: response.data.weather[0].main,
            cloud: response.data.clouds.all,
            humid: response.data.main.humidity,
            press: response.data.main.pressure,
            w_spd: response.data.wind.speed
          }
          setCurrentData(newData)
          let currentTemp = celsium
          if (response.data.weather[0].main === "Rain") {
            setKeanu(coat)
          }
          else if (currentTemp >= 30) {
            setKeanu(naked)
          }
          else if (currentTemp >= 25) {
            setKeanu(tshirt)
          }
          else if (currentTemp >= 20) {
            setKeanu(summer)
          }
          else if (currentTemp >= 15) {
            setKeanu(sport)
          }
          else if (currentTemp >= 10) {
            setKeanu(hoody)
          }
          else if (currentTemp > 0) {
            setKeanu(casual)
          }
          else if (currentTemp <= -5) {
            setKeanu(jacket)
          }
          else if (currentTemp <= 0) {
            setKeanu(cloack)
          }

        });
    }
    catch (e) {
      alert(e);
    }


  }

  return (
    <div className="App">
      <Header />
      <div className='main'>
        <WeatherInfo data={currentData} getData={getData} />
        <img src={keanu} alt="keanu" />
      </div>
    </div>
  );
}

export default App;
