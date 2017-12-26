import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather';

// These two ways are identical same
// Traditional way
// function rootReducer(state = {}, action) {
//   return {
//     weather: weatherReducer(state.weather, action),
//   };
// }
// ES6 way
// The state which will pass to the reducer is the state.key
// In this example, it should be weather: weatherReducer(stete.weather, action)
const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
