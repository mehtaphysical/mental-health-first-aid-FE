import React from 'react';
import { useMoodForm } from '../hooks/useMoodForm';
import { Solution } from './Solution';


export const MoodForm = () => {
  const { success, handleSubmit, moodName, setMoodName, solutions, setSolutions, handleKeyPress, handleAdd } = useMoodForm();

  const renderSolutions = solutions.map((solution, index) => (
    <li key={index}>
      <Solution setSolutions={setSolutions} solutions={solutions} index={index} />
    </li>
  ));

  return success ? (
    <section>
      <p>Note Created!</p>
    </section>
  ) : (
    <section>
      <div>
        <label>When I feel
          <input required
            type="text"
            value={moodName}
            onChange={({ target }) => setMoodName(target.value)} />
        </label>
        <br/>
        <p>What helps me is:</p>
        <ul onKeyPress={(event) => handleKeyPress(event)}>
          {renderSolutions}
        </ul>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  );
};
