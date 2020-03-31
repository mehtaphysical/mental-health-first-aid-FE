import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPositives, updateCurrentPositive, chooseNextCurrentPositive, fetchDeletePositive } from "../actions/messageActions";
import { toGetPositives } from "../selectors/useSelectors";

export const usePositives = () => {
  const dispatch = useDispatch();
  const { currentMessage, unread, loading, allMessages } = useSelector(toGetPositives);
  const [link, setLink] = useState();

  useEffect(() => {
    dispatch(getAllPositives());
  }, []);

  const handleGetNext = () => {
    if(!currentMessage.seen) dispatch(updateCurrentPositive(currentMessage._id, { seen: true }));
    else if(allMessages.length > 1) dispatch(chooseNextCurrentPositive(allMessages, currentMessage));
    else setLink(true);
  };

  const handleDelete = () => {
    const areYouSure = confirm(`Are you sure you want to delete ${currentMessage.message} from ${currentMessage.author}?`);
    if(areYouSure) {
      dispatch(fetchDeletePositive(currentMessage._id));
    }
  };

  return { link, setLink, handleGetNext, handleDelete, currentMessage, unread, loading, allMessages };
};