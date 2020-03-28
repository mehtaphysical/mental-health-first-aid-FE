import React from 'react';
import { useNewUser } from '../hooks/useNewUser';

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
