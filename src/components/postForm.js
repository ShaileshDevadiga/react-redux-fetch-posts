import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../action/postActions';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const payload = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.addPost(payload);
  }

  render() {
    return (
      <div>
        <h3>Add Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title: </label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            <br />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <textarea name="body" value={this.state.body} onChange={this.handleChange} />
            <br />
          </div>
          <button type="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.prototypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
