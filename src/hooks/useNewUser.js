import React, { useState, useEffect } from 'react';
import { EventForm } from '../components/EventForm';
import { MoodForm } from '../components/MoodForm';
import { PositiveForm } from '../components/PositiveForm';
import { CopyLink } from '../components/CopyLink';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toGetEvent, toGetPositives, toGetMoods } from '../selectors/useSelectors';
import { updateUser } from '../actions/authActions';

export const useNewUser = () => {
  const { loading: eventCreated } = useSelector(toGetEvent);
  const { loading: positiveCreated } = useSelector(toGetPositives);
  const { loading: moodCreated } = useSelector(toGetMoods);
  const [currentRender, setCurrentRender] = useState((<></>));
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const dispatch = useDispatch();

  const friendCode = new URLSearchParams(location.search).get('friendcode');

  const slides = [
    {
      title: 'Positives',
      text: 'Or you can send the link below to the people who lift you up, and they can send you a positive message. (They don’t need an account).',
      component: <CopyLink key={4} link={`localhost:7890/positive?friendcode=${friendCode}`} />
    },
    {
      title: 'Hello!',
      text: 'The goal of this app if to give you the tools for you to be in control.'
    },
    {
      title: 'Hello!',
      text: 'Ideally you should be able to open this app, and go directly to things that will help you for where ever your mental health is at the moment.'
    },
    {
      title: 'Hello!',
      text: 'At the moment your mental health first-aid kit is empty,'
    },
    {
      title: 'Hello!',
      text: 'Let’s start filling it!'
    },
    {
      title: 'Looking Forward',
      text: 'Feelings won’t last forever, they come and go in waves.'
    },
    {
      title: 'Looking Forward',
      text: 'One way to remind yourself that this too shall pass is to give yourself something that you are looking forward to, that you can be excited about right now.'
    },
    {
      title: 'Looking Forward',
      text: 'What is one thing you are looking forward to?',
      component: (<EventForm key={0} />),
      conditions: eventCreated
    },
    {
      title: 'Looking Forward',
      text: 'You can update this anytime, whether the event has happened or not.'
    },
    {
      title: 'Feelings',
      text: 'Sometimes strong feelings come on and it’s hard to think clearly about what you might want to do in response..'
    },
    {
      title: 'Feelings',
      text: 'Sometimes there’s we can’t get rid of the feeling, but we can find ways to sit with it or get through it.'
    },
    {
      title: 'Feelings',
      text: 'What is a feeling you\'ve struggled with, and what are some things you might do in response?',
      component: (<MoodForm key={1} />),
      conditions: moodCreated
    },
    {
      title: 'Feelings',
      text: 'As you discover what works and what doesn’t, you can update your lists.'
    },
    {
      title: 'Feelings',
      text: 'And you can add as many “Feelings” as you like.'
    },
    {
      title: 'Positives',
      text: 'There are so many wonderful things about you!'
    },
    {
      title: 'Positives',
      text: 'Take a moment to send a message your future self with something you admire/like/value about who you are.'
    },
    {
      title: 'Positives',
      text: 'What is something you like about your self?',
      component: <PositiveForm key={2} />,
      conditions: positiveCreated
    },
    {
      title: 'Positives',
      text: 'You can continue to add more and more positive messages to yourself.'
    },
    {
      title: 'Positives',
      text: 'Or you can send the link below to the people who lift you up, and they can send you a positive message. (They don’t need an account).',
      component: <CopyLink key={4} link={`localhost:7890/positive?friendcode=${friendCode}`} />
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
    if(index === slides.length - 1) dispatch(updateUser({ newUser: false }));
    if(index < slides.length - 1) setIndex(index + 1);
    else history.push('./profile');
  };
  const handleBack = () => {
    if(index > 0) setIndex(index - 1);
  };

  return { index, slides, currentRender, handleNext, handleBack };
};
