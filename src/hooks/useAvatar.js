import { useState } from 'react';

export const useAvatar = () => {
  const [display, setDisplay] = useState(false);
  const [url, setUrl] = useState('');



  return { display, setDisplay, url, setUrl };
};
