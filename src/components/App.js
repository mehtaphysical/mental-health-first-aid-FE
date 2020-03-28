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
import { NewUser } from './NewUser';
import { Profile } from './profile/Profile';
import { MessageForm } from './MessageForm';
import { Breathing } from './Breathing';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/auth' component={AuthPage} />
        <Route path='/message' component={MessageForm} />
        <Route path='/newuser' component={NewUser} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route path='/breathing' component={Breathing} />
      </Switch>
      <Footer />
    </Router>
  );
}
