import { takeEvery, call, all, put } from 'redux-saga/effects'
import {CLICK, LOADING, SET_CITY, UPLOAD_WEATHER} from "../reducers/rootReducer";

const API_key = '2e19406cc850004ee8896c266ef62484';
const fetchWeather = ({lat, lon}) => fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`).then(r=>r.json())
const fetchPlace = (city) => fetch (`https://api.openweathermap.org/geo/1.0/direct?q=${city}}&appid=${API_key}`)

export function* workerGetPlace({payload: city}) {
  yield put({type: LOADING, payload: true})
  const data = yield call(fetchPlace, city);
  const json = yield call(() => new Promise(res => res(data.json())))
  const lat = json[0].lat;
  const lon = json[0].lon;
  const weather = yield call(fetchWeather,{lat, lon});
  const weather2 = {temperature: Math.round(weather.main.temp - 273.15),
    feels_like: weather.main.feels_like, humidity: weather.main.humidity, pressure: weather.main.pressure,
    wind: weather.wind.speed, weather_pic: weather.weather[0].icon};
  yield put({ type: UPLOAD_WEATHER, payload: weather2 });
  yield put({type: SET_CITY, payload: weather.name});
  yield put({type: LOADING, payload: false})
  console.log(weather);
}

export function* watcherClickSaga () {
  yield takeEvery(CLICK, workerGetPlace)
}

export default function* rootSaga() {
  yield all([watcherClickSaga()])
}