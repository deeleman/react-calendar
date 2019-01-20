import React from 'react';
import { monthNames } from './i18n/en-gb';

export default function CalendarNavSelector(props) {
  const renderMonthOptions = [];

  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    renderMonthOptions.push(
      <option value={monthIndex} key={monthIndex}>{monthNames[monthIndex]} {props.year}</option>
    );
  }

  const onChange = (event) => {
    props.onChange(parseInt(event.target.value, 10), event);
  }

  return (
    <select value={props.month} onChange={onChange}>
      {renderMonthOptions}
    </select>
  );
}