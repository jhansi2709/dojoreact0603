import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Navbar(props){
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Welcome to Blog App
          </MenuLink>
          {props.userd  &&  !props.userd.length>0 &&
          <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>}
          {!props.userd  &&  
          <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>}
          <MenuLink to="/posts" activeStyle>
            Blogs
          </MenuLink>
          <MenuLink to="/myposts" activeStyle>
            MyBlogs
          </MenuLink>
          {props.userd && props.userd.length>0 &&
          <MenuLink to="/logout" activeStyle>
            Logout
          </MenuLink>}
           {/* <MenuLink to="/comments" activeStyle>
            Comments
          </MenuLink> */}
        
        </Menu>
      </PrimaryNav>
    </>
  )
}


Navbar.propTypes = {
  userd: PropTypes.array.isRequired
};


const mapStateToProps = state => ({
  userd: state.login.user
  
});


export default connect(mapStateToProps, {  })(Navbar);

