import React, { useEffect } from 'react';
import { Positive } from './Positive';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toGetAuth, toGetPositives } from '../../selectors/useSelectors';
import { getAllPositives, chooseNextCurrentPositive, updateCurrentPositive } from '../../actions/messageActions';

export const Positives = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { user: { friendCode } } = useSelector(toGetAuth);
  const { currentMessage, unread, loading, allMessages } = useSelector(toGetPositives);

  useEffect(() => {
    console.log('Use Effect ran');
    dispatch(getAllPositives());
  }, []);

  const handleGetNext = () => {
    console.log('Boop!', Math.random());
    if(!currentMessage.seen) dispatch(updateCurrentPositive(currentMessage._id, { seen: true }));
    else if(allMessages.length > 1) dispatch(chooseNextCurrentPositive(allMessages, currentMessage));
  };

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
      </div>
    </section>
  );
};
