import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Login from '../components/Login/Login';
import LoginActions from '../actions/LoginAction';
import SessionActions from '../actions/SessionActions';


class LoginAuthentication extends React.Component {
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return (<Navigate to={from} />);
    } else {
      return (<Login username={this.props.username} onSubmit={this.props.onSubmit}/>);
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  username: state.login.username,
  isLoggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (e) => {
    
    e.target.reset();
    dispatch(LoginActions.sendLoginData(this.props.username));
    dispatch(SessionActions.saveSessionData());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginAuthentication);
