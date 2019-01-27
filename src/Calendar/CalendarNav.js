import PropTypes from 'prop-types';
import React from 'react';
import CalendarNavSelector from './CalendarNavSelector';
import { navLabels } from './i18n/en-gb';

export default function CalendarNav(props) {
  const onMonthChange = (index, event) => {
    const month = index < 0 ? 11 :
      index > 11 ? 0 :
      index;
    
    const year = index < 0 ? props.year - 1 :
      index > 11 ? props.year + 1 :
      props.year;

    props.onChange(month, year);
    event.preventDefault();
  }

  return (
    <form>
      <ul className="nav">
        <li className="nav__prev">
          <button onClick={onMonthChange.bind(this, props.month - 1)}>{navLabels.prev}</button>
        </li>
        <li className="nav__months">
          <CalendarNavSelector month={props.month} year={props.year} onChange={onMonthChange}></CalendarNavSelector>
        </li>
        <li className="nav__next">
          <button onClick={onMonthChange.bind(this, props.month + 1)}>{navLabels.next}</button>
        </li>
      </ul>
    </form>
  );
}

CalendarNav.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}