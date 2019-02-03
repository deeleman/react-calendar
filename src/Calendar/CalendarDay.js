import PropTypes from 'prop-types';
import React from 'react';

export default function CalendarDay(props) {
  const classNames = ['calendar__day'];

  if (props.month !== props.date.getMonth()) {
    classNames.push('calendar__day--off');
  }

  if (new Date(props.date).getDate() === new Date().getDate()) {
    classNames.push('calendar__day--today');
  }

  return (
    <li className={classNames.join(' ')} data-label={props.date.toDateString()} onClick={props.onClick.bind(this, props.date)}>
      <strong className="calendar__date">{props.date.getDate()}</strong>
    </li>
  );
}

CalendarDay.propTypes = {
  month: PropTypes.number.isRequired,
  date: PropTypes.date,
  onClick: PropTypes.func,
}