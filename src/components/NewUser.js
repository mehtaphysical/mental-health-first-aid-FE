import React from 'react';
import { useNewUser } from '../hooks/useNewUser';
import { useSelector } from 'react-redux';
import { toGetAuth } from '../selectors/useSelectors';
import { useVerifyUser } from '../hooks/useVerifyUser';

export const NewUser = () => {
  const { index, slides, currentRender, handleNext, handleBack } = useNewUser();

  return (
    <section>
      <progress value={index} max={slides.length} />
      {currentRender}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </section>
  );
};
