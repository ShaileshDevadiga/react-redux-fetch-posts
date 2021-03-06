import { FETCH_POSTS, ADD_POST } from '../action/actionTypes';

const initialState = {
  posts: [],
  post: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        post: action.payload,
      };
    default: return state;
  }
};
