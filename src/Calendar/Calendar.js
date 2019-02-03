import PropTypes from 'prop-types';
import React, { Component } from 'react';
import CalendarMonth from './CalendarMonth';
import CalendarNav from './CalendarNav';
import { monthNames } from './i18n/en-gb';

export default class Calendar extends Component {
  static propTypes = {
    year: PropTypes.number,
    month: PropTypes.number,
    onDateClick: PropTypes.func,
  }

  static defaultProps = {
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth(),
  }

  componentWillMount() {
    this.setState((_, props) => ({
      month: props.month,
      year: props.year,
    }));
  }

  updateMonthAndYear(month, year) {
    this.setState({
      month,
      year
    });
  }

  onDateClick(date) {
    if (this.props.onDateClick) {
      this.props.onDateClick(date);
    }
  }

  render() {
    return (
      <>
        <header>
          <h1>{ monthNames[this.state.month] } {this.state.year}</h1>
        </header>
        <article className="calendar">
          <nav className="calendar__nav">
            <CalendarNav {...this.state} onChange={this.updateMonthAndYear.bind(this)}></CalendarNav>
          </nav>
          <section className="calendar__main">
            <CalendarMonth {...this.state} onDateClick={this.onDateClick.bind(this)}></CalendarMonth>
          </section>
        </article>
      </>
    )
  }
}
