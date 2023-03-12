import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchPostsSelf } from '../../actions/PostAction';
import Postform from '../Postform';
import Comments from '../Comments';
import {useEffect,useRef} from 'react';


class MyPosts extends Component {
  componentDidMount() {
    const u=this.props.userd.map(user=>(
      
      
      this.props.fetchPostsSelf(user.id)
    ));
    
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

render(){
  const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link to={"/comments/" +post.id} >View Comments</Link>
        
      </div>
    ));
    return (
      
      <div>
        
        <h1>Posts</h1>
        {postItems}
        
      </div>
    );
  }
}

MyPosts.propTypes = {
  fetchPostsSelf: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
  userd: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.myps,
  newPost: state.posts.item,
  userd: state.login.user
});

export default connect(mapStateToProps, { fetchPostsSelf })(MyPosts);