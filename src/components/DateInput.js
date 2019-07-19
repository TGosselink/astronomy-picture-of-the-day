//DateInput.js
import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DateInput = props => (
  <div>
    Select a Date:
    <DayPickerInput
        value={props.date}
        onDayChange={props.changeDate}
    />
    <button onClick={props.handleClick}>Random photo</button>
  </div>
);

export default DateInput;