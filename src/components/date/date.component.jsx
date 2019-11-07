import React from 'react';
import './date.styles.css';

const Today = () => {
  const getDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }

    return mm + '-' + dd + '-' + yyyy;
  };

  const getDay = () => {
    var weekday = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    var today = new Date();

    return weekday[today.getDay()];
  };

  return (
    <div>
      <h2 className="todo-title">
        {' '}
        {getDay()} <br /> {getDate()}{' '}
      </h2>
    </div>
  );
};

export default Today;
