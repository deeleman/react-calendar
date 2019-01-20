import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import CalendarNavSelector from './CalendarNavSelector';

export default class CalendarNav extends PureComponent {
  static propTypes = {
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
  }

  onMonthChange(index, event) {
    const month = index < 0 ? 11 :
      index > 11 ? 0 :
      index;
    
    const year = index < 0 ? this.props.year - 1 :
      index > 11 ? this.props.year + 1 :
      this.props.year;

    this.props.onChange(month, year);
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <ul>
          <li>
            <button onClick={this.onMonthChange.bind(this, this.props.month - 1)}>Previous</button>
          </li>
          <li>
            <CalendarNavSelector month={this.props.month} year={this.props.year} onChange={this.onMonthChange.bind(this)}></CalendarNavSelector>
          </li>
          <li>
            <button onClick={this.onMonthChange.bind(this, this.props.month + 1)}>Next</button>
          </li>
        </ul>
      </form>
    )
  }
}
