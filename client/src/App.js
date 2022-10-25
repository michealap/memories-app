import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Camera from './components/Camera/Camera';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
 

  return (
    <BrowserRouter>
      <NavBar />
      <Camera />
      <Container maxwidth='xlg'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
   </BrowserRouter>
  );
}

export default App;
