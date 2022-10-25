import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import useStyles from './styles';
import { CircularProgress, ImageList, ImageListItem } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  
  return (
    
    !posts.length ? <CircularProgress /> : (
      <ImageList className={classes.list} sx={{ width: 'auto', height: 'auto' }}
      variant="masonry"
      cols={3}
      rowHeight={300}>
        {posts.map((post) => (
          <ImageListItem key={post._id} cols={post.cols || 1} rows={post.rows || 1} > 
            <Post post={post} setCurrentId={setCurrentId} />
          </ImageListItem>
        ))}

      </ImageList>
    )
  )
}

export default Posts;