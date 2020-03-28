import React, { useState, useEffect } from 'react';
import { EventForm } from '../components/EventForm';
import { MessageForm } from '../components/MessageForm';
import { useHistory } from 'react-router-dom';

export const useNewUser = () => {
  const [currentRender, setCurrentRender] = useState((<></>));
  const [index, setIndex] = useState(0);
  const history = useHistory();

  const slides = [
    {
      title: 'Hello!',
      text: 'The goal of this app is for you, the user, to be in control and only add what is helpful to you.'
    },
    {
      title: 'Hello!',
      text: 'We want using this app to be an easy, stressfree exprience.'
    },
    {
      title: 'Hello!',
      text: 'So let\'s get started by introducing you to some fetures you may want to use. After we\'re done, we will go to your profile where you can customize more for what you need.'
    },
    {
      title: 'Looking Forward',
      text: 'Having something to look forward to is important. It can be something big, like a holiday, or something small, like eating breakfast.'
    },
    {
      title: 'Looking Forward',
      text: 'What is one thing you are looking forward to?',
      component: (<EventForm key={0} />)
    },
    {
      text: 'What is one thing you like about your self?',
      component: <MessageForm key={1} />
    },
    {
      text: 'You are all done!',
      component: (<p>Congrats!!!</p>)
    }
  ];
  
  useEffect(() => {
    setCurrentRender(
      <div>
        {(<></>) && <h2>{slides[index].title}</h2>}
        {(<></>) && <p>{slides[index].text}</p>}
        {(<></>) && slides[index].component}
      </div>);
  }, [index]);

  const handleNext = () => {
    if(index < slides.length - 1) setIndex(index + 1);
    else history.push('./profile');
  };
  const handleBack = () => {
    if(index > 0) setIndex(index - 1);
  };

  return { index, slides, currentRender, handleNext, handleBack };


}