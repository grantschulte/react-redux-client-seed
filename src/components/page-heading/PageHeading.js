import React from "react"
import "./PageHeading.scss"

const PageHeading = (props) => (
  <div className="page-heading">
    {props.icon
      ? <h1><span className={props.icon}></span></h1>
      : <h1>{ props.text }</h1> }
  </div>
)

export default PageHeading
