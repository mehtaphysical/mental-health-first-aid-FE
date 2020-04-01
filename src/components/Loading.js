import React from 'react';
import { useSelector } from 'react-redux';
import { toGetAuth, toGetEvent, toGetPositives, toGetMoods } from '../selectors/useSelectors';
import styles from './Loading.css';

export const Loading = () => {
  const { loading: auth } = useSelector(toGetAuth);
  const { loading: event } = useSelector(toGetEvent);
  const { loading: mood } = useSelector(toGetMoods);
  const { loading: positive } = useSelector(toGetPositives);

  if(auth || event || mood || positive) return (
    <img className={styles.loading} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f1055231234507.564a1d234bfb6.gif" />
  );
  else return null;
};
