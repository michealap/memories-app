import React,  { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../constants/actionTypes';
import { Link, useHistory, useLocation } from 'react-router-dom';

import useStyles from './styles';
import { Toolbar, Avatar, Typography, Button } from '@material-ui/core';

const NavBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push('/');
    setUser(null);
  }
  useEffect(()=> {
    // const token = user?.token;
    // if(token) {
    //   if (token.exp * 1000 < new Date().getTime()) logout();
    // }
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  
  return (
    <div className={classes.top}>
      <Link to="/" className={classes.logo}>memories</Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}> 
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.image}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant='h6'>{user?.result.name}
            </Typography>
            <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
            Logout
            </Button>
          </div>
        ): (
          <Button component={Link} to='/auth' variant='contained' className={classes.signin} color='primary'>
            Sign In
          </Button>
        )}
      </Toolbar>
    </div>
  )
}
export default NavBar