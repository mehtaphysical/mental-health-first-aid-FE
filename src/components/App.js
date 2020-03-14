import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

import { Header } from './Header';
import { AuthPage } from './authComponents/AuthPage';
import { Footer } from './Footer';
import { PrivateRoute } from './authComponents/PrivateRoute';
import { Secret } from './Secret';
import { Profile } from './profile/Profile';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/auth' component={AuthPage} />
        <PrivateRoute exact path='/secret' component={Secret} />
        <PrivateRoute exact path='/profile' component={Profile} />
      </Switch>
      <Footer />
    </Router>
  );
}
