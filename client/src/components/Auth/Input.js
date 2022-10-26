import React from 'react';
import { TextField, InputAdornment, Grid, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ name, handleChange, label, handleShowPassword, half, autoFocus, type }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12} md={12}>
        <TextField name={name}
          label={label}
          onChange={handleChange}
          variant='outlined'
          type={type}
          required 
          fullWidth
          autoFocus={autoFocus}
          InputProps={name === 'password' ? { 
            endAdornment : (
              <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                  {type === 'password' ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              )
            } : null }>
            
          </TextField>      
    </Grid>
  )
}

export default Input
