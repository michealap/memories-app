// handlers for the route - all logic
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    // res.send('This works!');
    const postMessages = await PostMessage.find();
    console.log('post messages:', postMessages);

    res.status(200).json(postMessages);
  } catch(error){
    res.status(404).json({ message: error.message })
  }
};

export const getPost = async (req, res) => { 
  const { id } = req.params;

  try {
      const post = await PostMessage.findById(id);
      
      res.status(200).json(post);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const createPost = async(req, res) => {
  // res.send('Post creation');
  const { title, message, selectedFile, creator, tags } = req.body;
  const newPost = new PostMessage({ title, message, selectedFile, creator, tags });
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
};


export const updatePost = async(req, res) => {
  const { id } = req.params;
  const { post } = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) 
  return res.status(404).send('No post with this id');

  // const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
  // const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

  res.json(updatedPost);
}

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
  
  const post = await PostMessage.findById(id);

  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
  
  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
}