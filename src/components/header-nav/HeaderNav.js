import React from "react"
import { NavLink } from "react-router-dom"
import "./HeaderNav.scss"

const HeaderNav = (props) => (
  <nav className="header-nav">
    {props.links.map((link, i) => {
      return <NavLink key={i} to={link.path} activeClassName="selected">{link.text}</NavLink>
    })}
  </nav>
)

export default HeaderNav
