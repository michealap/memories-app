import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Icon from './Icon';
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import useStyles from './styles';

const Auth = () => {
  const GOOGLE_ID = process.env.GOOGLE_ID;
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChange = () => {

  }
  const handleSubmit = () => {

  }
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    handleShowPassword(false);
  }

  const googleSuccess = async (res) => {
    console.log(res);
  }

  const googleFailure = () => {
    console.log('Google Sign In was unsuccessful. Try again later')
  }
  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar} > 
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? `Sign Up` : `Sign In`}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
              <>
                <Input name='firstName' label='First Name' handleChange={handleChange} half />
                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
              </>
            )}
            <Input type='email' name='email' label='Email Address' handleChange={handleChange} />
            <Input type={showPassword ? 'text' : 'password'} name='password' label='Password' handleShowPassword={handleShowPassword}  />
            { isSignup && <Input type='password' name='confirmPassword' label='Repeat Password' handleChange={handleChange} />}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            { isSignup ? 'Sign Up': 'Sign In'}
          </Button>
            <GoogleLogin clientId={GOOGLE_ID} render={(renderProps)=> (
              <Button className={classes.googleButton} variant='contained' color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
            />
          <Grid containe justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in': 'Dont have an account? Sign Up'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    
    </Container>
  )
}

export default Auth
