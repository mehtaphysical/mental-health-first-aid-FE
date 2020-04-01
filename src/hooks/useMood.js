import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { fetchGetAllMoods, setCurrentMood, fetchDeleteMood } from '../actions/moodActions';
import { toGetMoods } from '../selectors/useSelectors';

export const useMood = () => {
  const dispatch = useDispatch();
  const { allMoods, currentMood, updated, loading } = useSelector(toGetMoods);

  const [selected, setSelected] = useState('default');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if(updated) dispatch(fetchGetAllMoods());
  }, [updated]);

  useEffect(() => {
    const foundMood = allMoods.find(({ _id }) => _id === selected);
    dispatch(setCurrentMood(foundMood));
  }, [selected]);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleDelete = () => {
    const areYouSure = confirm(`Are you sure you want to delete ${currentMood.moodName}?`);
    if(areYouSure) {
      dispatch(fetchDeleteMood(currentMood._id));
    }
  };

  return { allMoods, currentMood, handleEdit, handleDelete, selected, setSelected, editing, setEditing, loading };
};
