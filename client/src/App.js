import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Container } from '@material-ui/core';
import NavBar from './components/NavBar/NavBar';
import Camera from './components/Camera/Camera';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {

  return (
    <BrowserRouter>
    <GoogleOAuthProvider clientId='257770897933-59hdspr2tkh80i499a77tkmm0qn5rjf1.apps.googleusercontent.com'>
      <Camera />
      <Container maxwidth='xl'>
      <NavBar />
        <Switch>
          <Route path='/' exact component={()=> <Redirect to='/posts' />} />
          <Route path='/posts' exact component={Home} />
          <Route path='/posts/search' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      </Container>
    </GoogleOAuthProvider>
   </BrowserRouter>
  );
}

export default App;
