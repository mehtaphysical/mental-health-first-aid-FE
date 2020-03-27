import { useSelector } from 'react-redux';
import { toGetAuth } from '../selectors/useSelectors';
import { useState, useEffect } from 'react';

export const useEvent = () => {
  const { user: { event } } = useSelector(toGetAuth);
  const [date, setDate] = useState();
  const [showEventForm, setShowEventForm] = useState(!!date);
  const monthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    if(event && !date) setDate(getMmDd(event.date));
  }, []);

  const getMmDd = (date) => {
    const formattedDate =  new Date(date);
    const weekday = weekdaysArray[formattedDate.getDay()];
    const month = monthArray[formattedDate.getMonth()];
    const day = formattedDate.getDate();
    return `${weekday}, ${month} ${day}`;
  };

  return { event, date, showEventForm, setShowEventForm };
};
