export const SET_CITY = 'SET_CITY'
export const CLICK = 'CLICK'
export const UPLOAD_WEATHER = 'UPLOAD_WEATHER'
export const SET_PICTURE = 'SET_PICTURE'
export let LOADING = 'LOADING'
const initialState = {
  loading: true,
  city:'',
  weather: {}
};

export default function rootReducer(state = initialState, action){
  switch (action.type){
    case LOADING:
      return {...state, loading: action.payload}
    case CLICK:
      return {...state, city: [...state.city, action.payload]}
    case SET_CITY:
      return {...state, city: action.payload}
    case SET_PICTURE:
      return {...state, pic: action.payload}
    case UPLOAD_WEATHER:
      return {...state, weather: {...state.weather, temperature: action.payload.temperature,
          feels_like: action.payload.feels_like,
          humidity: action.payload.humidity,
          pressure: action.payload.pressure,
          wind: action.payload.wind,
          weather_pic: action.payload.weather_pic}}
    default:
      return state
  }
};