import axios from 'axios';
import { FETCH_POSTS, ADD_POST } from './actionTypes';

export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts.data,
    }))
    .catch(e => dispatch({
      type: FETCH_POSTS,
      payload: e,
    }));
};

export const addPost = postData => dispatch => {
  axios({
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/posts',
    headers: {
      'content-type': 'application/json',
    },
    data: postData,
  })
    .then(post => dispatch({
      type: ADD_POST,
      payload: post.data,
    }));
};
