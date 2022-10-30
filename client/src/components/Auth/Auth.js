import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants/actionTypes';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/auth';
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';


import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import useStyles from './styles';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};

const Auth = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(isSignup) {
      dispatch(signup(formData, history))
    } else {
      dispatch(signin(formData, history))
    }
  }
  
  const googleSuccess = async (res) => {
    const decoded = jwt_decode(res.credential);
    const token = decoded?.sub;
    const { given_name, family_name, email, picture, sub } = decoded;
    const result = { 
      _id: sub,
      name: given_name,
      lastName: family_name,
      email: email,
      image: picture
    }
    
    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch {
      console.log(res.error)
    }
  }
  
  const googleFailure = () => console.log('Google Sign In was unsuccessful. Try again later');
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
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
                <Input name='firstName' label='First Name' handleChange={handleChange} half autoFocus />
                <Input name='lastName' label='Last Name' handleChange={handleChange} half />
              </>
            )}
            <Input type='email' name='email' label='Email Address' handleChange={handleChange} />
            <Input type={showPassword ? 'text' : 'password'} name='password' label='Password' handleShowPassword={handleShowPassword} handleChange={handleChange}  />
            { isSignup && <Input type='password' name='confirmPassword' label='Repeat Password' handleChange={handleChange} />}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            { isSignup ? 'Sign Up': 'Sign In'}
          </Button>
            <GoogleLogin 
            onSuccess={googleSuccess}
            onError={googleFailure}
            cookiePolicy='single_host_origin'
            />
          <Grid container justifyContent='flex-end'>
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
