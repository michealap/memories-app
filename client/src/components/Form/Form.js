import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const post = useSelector((state) => currentId ? state.posts.find((message) => message._id === currentId): null);

  useEffect(()=> {
    if(post) setPostData(post);
  }, [post])

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    // once user submits send over a post request with all the data user entered on form
    e.preventDefault();

    if(!currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
  }

  const clear = () => {
    // clears form text fields
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}>
        <Typography variant="h6">`{currentId ? 'Editing' : 'Let we make'} a Memory`</Typography>
        <TextField name='creator' variant='outlined' 
        label='Creator'
        fullWidth
        value={postData.creator}
        onChange={(e) => 
          setPostData({ ...postData, creator: e.target.value })
        }
        />
        <TextField name='creator' variant='outlined' 
        label='Title'
        fullWidth
        value={postData.title}
        onChange={(e) => 
          setPostData({ ...postData, title: e.target.value })
        }
        />
        <TextField name='creator' variant='outlined' 
        label='<Message>'
        fullWidth
        value={postData.message}
        onChange={(e) => 
          setPostData({ ...postData, message: e.target.value })
        }
        />
        <TextField name='creator' variant='outlined' 
        label='Tags'
        fullWidth
        value={postData.tags}
        onChange={(e) => 
          setPostData({ ...postData, tags: e.target.value })
        }
        />
       <div className={classes.fileInput}>
        <FileBase 
          type='file'
          multiple={false}
          onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
        />
       </div>
       <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
       <Button variant='contained' color='default' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;