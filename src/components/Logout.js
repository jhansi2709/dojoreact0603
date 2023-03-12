import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {sessionOut} from '../actions/LoginAction';
import {useEffect} from 'react'
import Login from '../components/Login/Login';

function Logout(props){
    
    useEffect(()=>{
        props.sessionOut();

    },[])
return(
<>
<h3 style={{textAlign: "center"}}> Logged out Successfully! Please Login</h3>
<Login />
</>
);

}



Logout.propTypes = {
    sessionOut: PropTypes.func.isRequired,
    userd: PropTypes.array.isRequired
  };
  
  
  const mapStateToProps = state => ({
    userd: state.login.user
    
  });
  
  
  export default connect(mapStateToProps, {sessionOut})(Logout);
