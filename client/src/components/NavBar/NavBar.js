import React from 'react'
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Toolbar, Avatar, Typography, Button } from '@material-ui/core';

export default function NavBar() {
  const classes = useStyles();
  const user = null;
  return (
    <div>
      <Link to="/" className={classes.logo}>memories</Link>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}> 
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant='h6'>{user.result.name}
            </Typography>
            <Button variant='contained' className={classes.logout} color='secondary'>
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
