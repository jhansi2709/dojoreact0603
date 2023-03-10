import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/CommentAction';

class Comments extends Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newComment) {
      this.props.comments.unshift(nextProps.newComment);
    }
  }

  render() {
    const commentItems = this.props.comments.map(c => (
      <div key={c.id}>
        <h3>{c.name}</h3>
        <p>{c.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Comments</h1>
        {commentItems}
      </div>
    );
  }
}

Comments.propTypes = {
    fetchComments: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired,
  newComment: PropTypes.object
};

const mapStateToProps = state => ({
  comments: state.posts.comments,
  newComment: state.posts.comment
});

export default connect(mapStateToProps, { fetchComments })(Comments);