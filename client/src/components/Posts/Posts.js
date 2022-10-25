import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
import { Grid, CircularProgress, ImageList, ImageListItem } from '@material-ui/core';

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  return (
    
    !posts.length ? <CircularProgress /> : (
      <ImageList rowHeight={500} className={classes.mainContainer} variant="masonry" rows={1} cols={3} gap={8}>
        {posts.map((post) => (
          <ImageListItem key={post._id}  > 
            <Post post={post} />
          </ImageListItem>
        ))}

      </ImageList>
    )
  )
}

export default Posts;