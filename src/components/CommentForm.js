import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createComment } from '../actions/CommentAction';
import Button from 'react-bootstrap/Button';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const comment = {
      
      name: this.state.name,
      body: this.state.body,
      postId: 1
    };

    this.props.createComment(comment);
  }

  render() {
    return (
      <div>
        <h1>Add Comment</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Name: </label>
            <br />
            <input
              type="text"
              name="name"
              onChange={this.onChange}
              value={this.state.name}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <Button type="submit" >Submit</Button>{' '}
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
    createComment: PropTypes.func.isRequired
};

export default connect(null, { createComment })(CommentForm);