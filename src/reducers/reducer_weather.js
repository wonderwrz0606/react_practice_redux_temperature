import { FETCH_WEATHER } from '../actions/index';

const WeatherReducer = function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state ]; // return [ city, city, city]
    default:
      return state;
  }
}

export default WeatherReducer;
