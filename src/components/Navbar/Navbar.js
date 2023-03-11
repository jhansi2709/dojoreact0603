import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Welcome to Blog App
          </MenuLink>
          <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>
          <MenuLink to="/posts" activeStyle>
            Blogs
          </MenuLink>
          <MenuLink to="/myposts" activeStyle>
            MyBlogs
          </MenuLink>
           {/* <MenuLink to="/comments" activeStyle>
            Comments
          </MenuLink> */}
        
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar