import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';
import { AuthPage } from './authComponents/AuthPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/auth' component={AuthPage} />
      </Switch>
    </Router>
  );
}
