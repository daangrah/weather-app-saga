import React from 'react';
import '../index.css'
import temp from '../assets/thermometer.png'
import humidity from '../assets/humidity.png'
import wind from '../assets/windspeed.png'
import cloud from '../assets/Today_Info.png'
import {useSelector} from "react-redux";
import './ispinner.css'

const Loader =() => {return (<div className="ispinner gray animating">
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
  <div className="ispinner-blade"></div>
</div>)}
const ThisDayInfo = () => {
  const store = useSelector(state => state.weather)
  const state = useSelector(state => state.loading)
  return (
    <>
        <div className='this_day_info_container'>
          <img alt='' src={cloud} className='cloud_img'/>
          <div className='weather_cont'>
            <div className='round_ellipse'>
              <img alt='' src={temp}/>
            </div>
            Feels Like: {state ? <Loader /> : Math.round(store.feels_like - 273.15)}°
          </div>
          <div className='weather_cont'>
            <div className='round_ellipse'>
              <img alt='' src={humidity}/>
            </div>
            Humidity: {state ? <Loader /> : store.humidity}%
          </div>
          <div className='weather_cont'>
            <div className='round_ellipse'>
              <img alt='' src={wind}/>
            </div>
            Wind Speed: {state ? <Loader /> : store.wind} m/s
          </div>
        </div>
    }</>);
};

export default ThisDayInfo;