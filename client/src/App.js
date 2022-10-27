import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Camera from './components/Camera/Camera';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  // 

  return (
    <BrowserRouter>
    <GoogleOAuthProvider clientId={`${process.env.AuthGOOGLE_API_TOKEN}`}>
      <NavBar />
      <Camera />
      <Container maxwidth='xlg'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </GoogleOAuthProvider>
   </BrowserRouter>
  );
}

export default App;
