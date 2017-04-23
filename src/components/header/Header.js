import React from "react"
import { Link } from "react-router-dom"
import HeaderNav from "../header-nav/HeaderNav"
import "./Header.scss"

const Header = () => {
  const isLoggedIn = false;

  const headerLinks = [
    {
      text: "Create",
      path: "/sign-up"
    },
    {
      text: "Access",
      path: "/sign-in"
    }
  ]

  const headerLinksLoggedIn = [
    {
      text: "My Profile",
      path: "/profile"
    }
  ]

  return (
    <header className="header">
      <div className="col">
        <Link to="/">Home</Link>
      </div>
      <div className="col">
        {isLoggedIn
          ? <HeaderNav links={headerLinksLoggedIn} />
          : <HeaderNav links={headerLinks} />
        }
      </div>
    </header>
  )
}

export default Header
