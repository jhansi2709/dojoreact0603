import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/posts" activeStyle>
            Blogs
          </MenuLink>
          <MenuLink to="/myposts" activeStyle>
            MyBlogs
          </MenuLink>
          <MenuLink to="/login" activeStyle>
            Login
          </MenuLink>
          
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar