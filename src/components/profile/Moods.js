import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toGetMoods } from '../../selectors/useSelectors';
import { getAllMoods, setCurrentMood } from '../../actions/moodActions';

export const Moods = () => {
  const dispatch = useDispatch();
  const { allMoods, currentMood } = useSelector(toGetMoods);

  useEffect(() => {
    dispatch(getAllMoods());
  }, []);

  const handleChange = (value) => {
    const foundMood = allMoods.find(({ moodName }) => moodName === value);
    dispatch(setCurrentMood(foundMood));
  };

  const moodNameOptions = allMoods.map(({ moodName, _id }) => (<option key={_id} value={moodName}>{moodName}</option>));

  const solutionsList = currentMood ? (
    <ul>
      {currentMood.solutions.map(solution => (
        <li key={solution}>{solution}</li>
      ))}
    </ul>
  ) : (
    <></>
  );
  

  return (
    <section>
      <h3>Currently Feeling</h3>
      <select onChange={({ target }) => handleChange(target.value)}>
        <option value="selectOne" defaultValue disabled>Select a Mood</option>
        {moodNameOptions}
      </select>
      {solutionsList}
    </section>
  );
};
