import React from 'react';
import { Positive } from './Positive';
import { usePositives } from '../../hooks/usePositives';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';

export const Positives = () => {
  const { user: { friendCode } } = useSelector(toGetAuth);
  const history = useHistory();
  const { currentPositive, totalUnread, display, setDisplay, getNewCurrentPositive } = usePositives();

  const render = currentPositive._id ? (
    <Positive key={currentPositive._id} message={currentPositive.message} author={currentPositive.author} seen={currentPositive.seen} />
  ) : (
    <></>
  );

  return (
    <section>
      <h2 onClick={() => {
        if(!display) getNewCurrentPositive();
        setDisplay(!display);
      }}>Positives{totalUnread > 0 ? (<span> - {totalUnread} new</span>) : (<></>)}</h2>
      {display ? (
        <div>
          {totalUnread > 0 ? (<h3>{totalUnread - 1} new</h3>) : (<></>)}
          {render}
          <button onClick={getNewCurrentPositive}>Get Another</button>
          <button onClick={() => history.push(`/message#${friendCode}`)}>Create New</button>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};
