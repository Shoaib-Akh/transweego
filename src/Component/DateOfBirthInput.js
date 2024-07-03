import React, { useState, useEffect } from 'react';
import SimpleInput from './SimpleInput';

const DateOfBirthInput = ({setBirthDate}) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    validateDate();
  }, [day, month, year]);

  const validateDate = () => {
    if (day && month && year) {
      const dayNum = parseInt(day, 10);
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);

      if (dayNum < 1 || dayNum > 31) {
        setIsValid(false);
        setError('Day must be between 1 and 31');
        return;
      }

      if (monthNum < 1 || monthNum > 12) {
        setIsValid(false);
        setError('Month must be between 1 and 12');
        return;
      }

      const isLeapYear = (year) => {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      };

      const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
      };

      if (dayNum > daysInMonth(monthNum, yearNum)) {
        setIsValid(false);
        setError("Invalid day for the given month");
        return;
      }

      const currentDate = new Date();
      const inputDate = new Date(`${year}-${month}-${day}`);

      if (isNaN(inputDate.getTime()) || inputDate > currentDate) {
        setIsValid(false);
        setError('Date of Birth cannot be in the future');
      } else {
        setIsValid(true);
        setBirthDate(inputDate)
       
        setError('');
      }
    }
  };

  return (
    <div>
      <div className="row mt-3">
        <div className="col-md-4">
          <SimpleInput 
            placeholder="DD" 
            value={day} 
            onChange={(e) => setDay(e.target.value)} 
            name="day"
          />
        </div>
        <div className="col-md-4">
          <SimpleInput 
            placeholder="MM" 
            value={month} 
            onChange={(e) => setMonth(e.target.value)} 
            name="month"
          />
        </div>
        <div className="col-md-4">
          <SimpleInput 
            placeholder="YYYY" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
            name="year"
          />
        </div>
      </div>
      {!isValid && (
        <div className="text-danger mt-2">{error}</div>
      )}
    </div>
  );
};

export default DateOfBirthInput;