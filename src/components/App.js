import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

import { Header } from './Header';
import { LandingPage } from './LandingPage'
import { AuthPage } from './authComponents/AuthPage';
import { Footer } from './Footer';
import { PrivateRoute } from './authComponents/PrivateRoute';
import { Profile } from './profile/Profile';
import { MessageForm } from './MessageForm';
import { Positives } from './profile/Positives';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/auth' component={AuthPage} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route path='/message' component={MessageForm} />
        <PrivateRoute path='/positives' component={Positives} />
      </Switch>
      <Footer />
    </Router>
  );
}
