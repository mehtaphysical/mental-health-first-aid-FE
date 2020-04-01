import React from 'react';
import { useNewUser } from '../hooks/useNewUser';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../selectors/useSelectors';
import { useHistory } from 'react-router-dom';

export const NewUser = () => {
  const history = useHistory();
  const { user: { newUser } } = useSelector(toGetAuth);
  const { index, slides, currentRender, handleNext, handleBack } = useNewUser();

  if(newUser) {
    return (
      <section>
        <progress value={index} max={slides.length} />
        {currentRender}
        <button onClick={handleBack}>Back</button>
        <button disabled={!!slides[index].conditions} onClick={handleNext}>Next</button>
      </section>
    );
  } else {
    history.replace('/profile');
    return null;
  }

};
