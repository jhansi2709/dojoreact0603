import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

class App extends React.Component {
 
  
  render() {
    return (
      <main role="main" className="container">
        <AppRoutes session={this.props.session} path="hi"/>
      </main>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  session: state.session,
});

export default (connect(mapStateToProps)(App));

