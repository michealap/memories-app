import React, { useEffect, useState } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { getPosts, getPostsBySearch } from '../../actions/posts';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Posts/Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const query = useQuery();
  const history = useHistory();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch]= useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  const searchPost = () => {
    if(search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  }
  const handleKeyPress = (e) => {
    if(e.keyCode === 13) {
      searchPost();
    }
  }
  const handleAdd = (tag) => setTags([...tags, tag])
  const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));


  return (
      <Container maxWidth='xl' className={classes.container}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={10} sm={10} md={7} lg={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={10} sm={10} md={4} lg={4}>
            <AppBar className={classes.appBarSearch} position='static' color='inherit'>
              <TextField 
              name='search'
              variant='outlined'
              label='Search Memories'
              onKeyPress={handleKeyPress}
              fullWidth
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
              />
              <ChipInput 
              style={{ margin: '10px 0'}}
              value={tags}
              onAdd={handleAdd}
              onDelete={handleDelete}
              label='Search Tags'
              variant='outlined'

              />
              <Button onClick={searchPost} className={classes.searchButton} variant='contained' color='primary'>
                Search
              </Button>
            </AppBar>
            <Form curentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
  )
}

export default Home
