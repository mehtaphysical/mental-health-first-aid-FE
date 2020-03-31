import React from 'react';
import { Positive } from './Positive';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toGetAuth, toGetPositives } from '../../selectors/useSelectors';
import { usePositives } from '../../hooks/usePositives';

export const Positives = () => {
  const history = useHistory();

  const { user: { friendCode } } = useSelector(toGetAuth);

  const { link, setLink, handleGetNext, handleDelete, currentMessage, unread, loading, allMessages } = usePositives();

  const render = currentMessage ? (
    <Positive key={currentMessage._id} message={currentMessage.message} author={currentMessage.author} seen={currentMessage.seen} />
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
        <button onClick={() => history.push(`/message?friendcode=${friendCode}`)}>Create New</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {link || allMessages < 1 ? (
        <div>
          <p>Click &quot;Create New&quot;, or share this link: localhost:7890/message?friendcode={friendCode}</p>
          <button onClick={() => setLink(!link)}>Okay</button>
        </div>
      ) : (<></>)}
    </section>
  );
};
