import Input from "./Input";
import classes from "./WeatherInfo.module.css"
const WeatherInfo = ({ data, getData }) => {

  return (<div className={classes.WeatherInfo}>
    <Input getData={getData} />
    <div style={data.city !== undefined ? {color: "#fff"}: {color: '#343434'}}>
    <div className={classes.main}>
        <span className={classes.city}>{data.city}</span>
        <span className={classes.temp}>{data.temp}{'\xB0C'}</span>
        <span className={classes.desc}>{data.desc}</span>
      </div>
      <div className={classes.additional}>
        <span>cloud: {data.cloud}</span>
        <span>humidity: {data.humid}</span>
        <span>pressure: {data.press}</span>
        <span>wind speed: {data.w_spd}</span>
      </div>
    </div>
  </div>)
}

export default WeatherInfo;