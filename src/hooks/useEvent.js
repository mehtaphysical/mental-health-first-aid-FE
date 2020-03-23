import { useSelector } from 'react-redux';
import { toGetAuth } from '../selectors/useSelectors';
import { useState, useEffect } from 'react';

export const useEvent = () => {
  const { user: { event } } = useSelector(toGetAuth);
  const [date, setDate] = useState();
  const [showEventForm, setShowEventForm] = useState(!date);

  useEffect(() => {
    if(event && !date) setDate(getMmDd(event.date));
  }, []);

  const getMmDd = (date) => {
    const formattedDate =  new Date(date);
    const month = formattedDate.getMonth();
    const day = formattedDate.getDate();
    return `${month + 1}/${day}`;
  };

  return { event, date, showEventForm, setShowEventForm };
};
