import { useSelector, useDispatch } from 'react-redux';
import { toGetEvent } from '../selectors/useSelectors';
import { useState, useEffect } from 'react';
import { fetchGetEvent } from '../actions/eventActions';

export const useEvent = () => {
  const dispatch = useDispatch();
  const { event, error, loading } = useSelector(toGetEvent);

  const [date, setDate] = useState();
  const [showEventForm, setShowEventForm] = useState(false);

  const monthArray = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekdaysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {dispatch(fetchGetEvent());}, []);
  useEffect(() => {if(event) setDate(getMmDd(event.date));}, [event]);

  const getMmDd = (date) => {
    const formattedDate =  new Date(date);
    const weekday = weekdaysArray[formattedDate.getDay()];
    const month = monthArray[formattedDate.getMonth()];
    const day = formattedDate.getDate();
    return `${weekday}, ${month} ${day}`;
  };

  return { event, date, showEventForm, setShowEventForm, error, loading };
};
