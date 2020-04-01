import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllPositives, fetchPatchPositive, chooseNextCurrentPositive, fetchDeletePositive } from '../actions/positiveActions';
import { toGetPositives } from '../selectors/useSelectors';

export const usePositives = () => {
  const dispatch = useDispatch();
  const { currentPositive, unread, loading, allPositives } = useSelector(toGetPositives);
  const [link, setLink] = useState();

  useEffect(() => {
    dispatch(fetchGetAllPositives());
  }, []);

  const handleGetNext = () => {
    if(currentPositive && !currentPositive.seen) dispatch(fetchPatchPositive(currentPositive._id, { seen: true }));
    else if(allPositives.length > 1) dispatch(chooseNextCurrentPositive(allPositives, currentPositive));
    else setLink(true);
  };

  const handleDelete = () => {
    const areYouSure = confirm(`Are you sure you want to delete "${currentPositive.message}" from ${currentPositive.author}?`);
    if(areYouSure) {
      dispatch(fetchDeletePositive(currentPositive._id));
    }
  };

  return { link, setLink, handleGetNext, handleDelete, currentPositive, unread, loading, allPositives };
};