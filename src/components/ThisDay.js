import React from 'react';
import "../index.css"
import {useSelector} from "react-redux";

const ThisDay = () => {
  const store = useSelector(state => state)
  const weatherPic = store.weather.weather_pic
  return (
    <div className='this-day-container'>
      <div className='this-day-tamperature'>
        {store.weather.temperature}°
        <img src={`https://openweathermap.org/img/w/${weatherPic}.png`}  alt='' className='weather_pic'/>
        </div>
      <div className='this-day'>
        TODAY
      </div>
      <div className='this-day-city'>
        City: {store.city}
      </div>
    </div>
  );
};

export default ThisDay;