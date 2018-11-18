import { combineReducers } from 'redux';
import WeatherRedcuer from './reducer_weather';

const rootReducer = combineReducers({
  weather: WeatherRedcuer
});

export default rootReducer;
