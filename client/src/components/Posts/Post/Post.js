import React from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = ({ post }) => {
  const posts = useSelector((state)=> state.posts);
  const classes = useStyles();

  console.log("Posts:", posts);
  
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size='small' style={{color:'white'}} onClick={()=> {}}>
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
        <div className={classes.details}>

        <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <CardContent>
        <Typography
        className={classes.title} variant='h6' gutterBottom>{post.message}</Typography>

        </CardContent>
        <CardActions>
        <Button size='small' style={{color:'primary'}} onClick={()=> {}}>
          <ThumbUpAltIcon fontSize='small' />
          Like
          {post.likeCount}
        </Button>
        <Button size='small' style={{color:'black'}} onClick={()=> {}}>
          <DeleteIcon fontSize='medium' />
          Delete
        </Button>
        </CardActions>
    </Card>
  )
}

export default Post;