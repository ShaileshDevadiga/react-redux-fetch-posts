import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import PostForm from './components/postForm';
import Posts from './components/posts';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
