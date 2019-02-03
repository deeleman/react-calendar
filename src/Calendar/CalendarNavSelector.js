import PropTypes from 'prop-types';
import React from 'react';
import { monthNames } from './i18n/en-gb';

export default function CalendarNavSelector(props) {
  const monthIndexes = new Array(12).fill(0).map((value, index) => value + index);
  const onChange = (event) => props.onChange(parseInt(event.target.value, 10), event)

  return (
    <select className="nav__months-select" value={props.month} onChange={onChange}>
      {monthIndexes.map(monthIndex => <option key={monthIndex} value={monthIndex}>{monthNames[monthIndex]} {props.year}</option>)}
    </select>
  );
}

CalendarNavSelector.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}