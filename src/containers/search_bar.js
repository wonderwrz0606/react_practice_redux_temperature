import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
    };
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
 // Every Dom action like onClick, onChange and so on comes with a event obj
  onChangeSearch(event) {
    this.setState({
      term: event.target.value,
    });
  }

  onFormSubmit(event) {
    // Press 'enter' dont submit the form by default
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({
      term: "",
    });
  }

// Note:
// These two methods have the same action
// One:
// this.onChangeSearch = this.onChangeSearch.bind(this);
// onChange={this.onChangeSearch}
// Two:
// onChange={(event) => this.onChangeSearch(event)}

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onChangeSearch}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

// function mapStateToProps() {
//
// }

export default connect(null, mapDispatchToProps)(SearchBar);
