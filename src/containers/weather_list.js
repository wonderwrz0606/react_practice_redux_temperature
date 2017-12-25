import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    // TODO: This will return the temps as [ undefined, undefined, undefined, undefined ]
    // const temps = cityData.list.map((weather) => {weather.main.temp});
    const temps = _.map(cityData.list.map(function(weather) { return weather.main.temp; }), (temp) => temp - 273);
    const humidities = cityData.list.map(weather => { return weather.main.humidity; });
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon, lat } = cityData.city.coord;


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart color="green" data={temps} width={180} height={120} units="C" />
        </td>
        <td>
          <Chart color="blue" data={pressures} width={180} height={120} units="hPa" />
        </td>
        <td>
          <Chart color="red" data={humidities} width={180} height={120} units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// These two functions are identically the same
function mapStateToProps(state) {
  return { weather: state.weather };
}
// ES6 Way
// function mapStateToProps({ weather }) {
//   return { weather };
// }

export default connect(mapStateToProps)(WeatherList);
