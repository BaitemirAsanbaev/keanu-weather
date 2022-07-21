import axios from 'axios';
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
import { useEffect, useState } from 'react';
import data from "./data.json"


function App() {

  const [keanu, setKeanu] = useState(casual)
  function getData (response) {
    console.log(response);
    let currentTemp = response.current.temperature
    if ( response.current.is_day == false) {
      setKeanu(sleepy)
    }
    else if (response.current.weather_descriptions[0] === "Rain") {
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
    else if (currentTemp <= 0) {
      setKeanu(cloack)
    }
    else if (currentTemp <= -5) {
      setKeanu(jacket)
    }
    console.log(response);
  }
  useEffect(()=>{
    getData(data)
  }, [])
  return (
    <div className="App">
      <img src={keanu} alt="keanu" />
    </div>
  );
}

export default App;
