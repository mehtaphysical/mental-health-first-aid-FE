import React from 'react';
import { Positive } from './Positive';
import { usePositives } from '../../hooks/usePositives';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const Positives = () => {
  const { user: { friendCode } } = useSelector(toGetAuth);
  const history = useHistory();
  const { currentPositive, totalUnread, display, setDisplay, getNewCurrentPositive, loading } = usePositives();

  const render = currentPositive._id ? (
    <Positive key={currentPositive._id} message={currentPositive.message} author={currentPositive.author} seen={currentPositive.seen} />
  ) : (
    <></>
  );

  return (
    <section>
      <h3 onClick={() => setDisplay(!display)} >Positives{totalUnread > 0 ? (<span> - {totalUnread} new</span>) : (<></>)}</h3>
      {loading ? <img style={{ height: '64px' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" /> : <></>}
      {display ? (
        <div>
          {!loading && render}
          <button onClick={getNewCurrentPositive}>Get Another</button>
          <button onClick={() => history.push(`/message?friendcode=${friendCode}`)}>Create New</button>
          <button onClick={() => setDisplay(!display)}>Close</button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
