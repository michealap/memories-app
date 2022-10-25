import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import { Container, Grow, Grid } from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Camera from './components/Camera/Camera';
import Form from './components/Form/Form';
import useStyles from './styles';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <>
    <div className={classes.logo}>memories</div>
    <Camera />
   <Container maxwidth='xlg'>
    <Grow in>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={10} sm={10} md={6} lg={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={10} sm={10} md={4} lg={4}>
            <Form curentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
   </Container>
   </>
  );
}

export default App;
