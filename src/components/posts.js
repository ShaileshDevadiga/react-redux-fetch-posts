import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../action/postActions';

class Posts extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const posts = !this.props.posts.length ? <div>No Posts avialble</div>
      : this.props.posts.map(post => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ));
    return (
      <div>
        <div>
          <h3>Posts</h3>
          <div>{posts}</div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = store => ({
  posts: store.posts.posts,
  newPost: store.posts.post,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
