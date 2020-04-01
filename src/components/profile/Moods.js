import React from 'react';
import { MoodForm } from '../MoodForm';
import { useMood } from '../../hooks/useMood';

export const Moods = () => {
  const { allMoods, currentMood, handleEdit, handleDelete, selected, setSelected, editing, setEditing } = useMood();

  const moodNameOptions = allMoods.map(({ moodName, _id }) => (<option key={_id} value={_id}>{moodName}</option>));

  const solutionsList = currentMood ? (
    <div>
      <h4>You might try to:</h4>
      <ul>
        {currentMood.solutions.map(solution => (
          <li key={solution}>{solution}</li>
        ))}
      </ul>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ) : (
    <></>
  );

  return (
    <section>
      <h3>Currently Feeling</h3>
      <select 
        value={selected} 
        onChange={({ target }) => {
          setEditing(false);
          setSelected(target.value);
        }}>
        <option value="defualt">Select a Mood</option>
        {moodNameOptions}
        <option value="add">Add +</option>
      </select>
      {editing ? (
        <div>
          <MoodForm importId={currentMood._id} importMoodName={currentMood.moodName} importSolutions={currentMood.solutions}/>
          <button onClick={handleEdit}>Cancel</button>
        </div>
      ) : (
        <div>
          {solutionsList}
          {selected === 'add' ? (<MoodForm />) : (<></>)}
        </div>
      )}
    </section>
  );
};
