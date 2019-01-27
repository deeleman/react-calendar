import React from 'react';
import CalendarDay from './CalendarDay';

const WEEK_DAYS_LENGTH = 7;

export default function CalendarMonth(props) {
  const firstDate = new Date(props.year, props.month, 1);
  const firstDay = firstDate.getDay();
  const firstDateOffset = firstDay === 0 ? WEEK_DAYS_LENGTH : firstDay - 1;
  const currentCalendarDate = new Date(firstDate.setDate(firstDate.getDate() - firstDateOffset));
  
  const lastMonthDate = new Date(props.year, props.month + 1, 0).getDate();
  const lastDate = new Date(props.year, props.month, lastMonthDate);
  const lastDateOffset = WEEK_DAYS_LENGTH - lastDate.getDay();
  const lastCalendarDate = new Date(lastDate.setDate(lastDate.getDate() + lastDateOffset));
  
  const calendarDayElements = [];

  while (currentCalendarDate <= lastCalendarDate) {
    calendarDayElements.push(
      <CalendarDay key={+currentCalendarDate}
        month={props.month}
        date={new Date(currentCalendarDate)}
        onClick={props.onDateClick}>
      </CalendarDay>
    );
    currentCalendarDate.setDate(currentCalendarDate.getDate() + 1);
  }

  return (
    <ul className="calendar__month">
      {calendarDayElements}
    </ul>
  );
}
