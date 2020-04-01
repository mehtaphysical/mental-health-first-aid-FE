import React from 'react';
import { Positive } from './Positive';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../../selectors/useSelectors';
import { usePositives } from '../../hooks/usePositives';

export const Positives = () => {
  const history = useHistory();

  const { user: { friendCode } } = useSelector(toGetAuth);

  const { link, setLink, handleGetNext, handleDelete, currentPositive, unread, loading, allPositives } = usePositives();

  const render = currentPositive ? (
    <Positive key={currentPositive._id} message={currentPositive.message} author={currentPositive.author} seen={currentPositive.seen} />
  ) : (
    <></>
  );

  return (
    <section>
      <h3>Positives{unread > 0 ? (<span> - {unread} new</span>) : (<></>)}</h3>
      {loading ? <img style={{ height: '64px' }} src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" /> : <></>}
      <div>
        {!loading && render}
        <button onClick={handleGetNext}>Get Another</button>
        <button onClick={() => history.push(`/positive?friendcode=${friendCode}`)}>Create New</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {link || allPositives < 1 ? (
        <div>
          <p>Click &quot;Create New&quot;, or share this link: localhost:7890/positive?friendcode={friendCode}</p>
          <button onClick={() => setLink(!link)}>Okay</button>
        </div>
      ) : (<></>)}
    </section>
  );
};
