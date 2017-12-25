import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div className="text-center">
        <h2 style={{margin: "20px 5px 0px 5px"}} className="text-center text-capitalize">Weather Search Component</h2>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
