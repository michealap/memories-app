import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import {ImageListItemBar, IconButton, Box } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = ({ post }) => {
  const posts = useSelector((state)=> state.posts);
  const classes = useStyles();
  
  return (
    <>
      <img
        src={`${post.selectedFile}`}
        srcSet={`${post.selectedFile}`}
        
        alt={post.title}
        loading="lazy"
      />
      <div className={classes.overlay}>
       <IconButton
            style={{ color: 'white' }}
            aria-label={`like ${post.title}`}
          >
            <ThumbUpAltIcon fontSize='small' />
              
            {post.likeCount}
          </IconButton>
          </div>
       <div className={classes.overlay2}>
           <IconButton
            style={{ color: 'white' }}
            aria-label={`more ${post.title}`}
          >
           <MoreHorizIcon fontSize='medium' />
            
          </IconButton>
        </div>
      <ImageListItemBar position="bottom" title={`${post.tags.map((tag) => `#${tag} `)}  ${moment(post.createdAt).fromNow()} `}
      subtitle={`${post.message} ${post.creator}`}
      actionIcon={
        <Box>
         
          <IconButton
            style={{ color: 'white' }}
            aria-label={`delete ${post.title}`}
          >
            <DeleteIcon fontSize='small' />
            
          </IconButton>
        </Box>
      }
      actionPosition="left"
      
      />
  </>
  )
}

export default Post;