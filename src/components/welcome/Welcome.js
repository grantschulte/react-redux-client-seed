import React from "react"
import { Link } from "react-router-dom"
import PageHeading from "../../components/page-heading/PageHeading"
import "./Welcome.scss"

const Welcome = () => (
  <div className="welcome">
    <PageHeading text="Welcome" />
    <p><Link to="/sign-up">Create a username</Link> to access private pages.</p>
  </div>
)

export default Welcome
