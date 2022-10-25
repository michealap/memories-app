import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import memories from './images/memories.jpg';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
   <Container maxwidth='xlg'>
      {/* <Typography className={classes.image}>memories</Typography> */}
      <img className={classes.image} src={memories} alt="memories" height={100} width={100} />
    
    <Grow in>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
   </Container>
  );
}

export default App;
