import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CalendarNav from './CalendarNav';
import { monthNames } from './i18n/en-gb';

export default class Calendar extends Component {
  static propTypes = {
    year: PropTypes.number,
    month: PropTypes.number
  }

  static defaultProps = {
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth()
  }

  componentWillMount() {
    this.setState((_, props) => ({
      month: props.month,
      year: props.year,
    }));
  }

  updateMonthAndYear = (month, year) => {
    this.setState({
      month,
      year
    });
  }

  render() {
    return (
      <>
        <header>
          <h1>{ monthNames[this.state.month] } {this.state.year}</h1>
        </header>
        <article>
          <nav>
            <CalendarNav month={this.state.month} year={this.state.year} onChange={this.updateMonthAndYear}></CalendarNav>
          </nav>
          <div>
            <pre>Calendar placeholder</pre>
          </div>
        </article>
        <footer>MIT License</footer>
      </>
    )
  }
}
