// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./../styles/terminal.scss"

const Shell = (props) => (
  <div className="terminal-shell shadow"
    style={{ width: props.width, height: props.height }}
    id={props.id}>
    <div className="header">
      <div className="circle-button red"></div>
      <div className="circle-button yellow"></div>
      <div className="circle-button green"></div>
      <div className="title"> {props.siteTitle} </div>
    </div>
    <div className="content">{props.children}</div>
  </div>
)

// define the type on the props
Shell.propTypes = {
  siteTitle: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

// define the default behaviour
Shell.defaultProps = {
  siteTitle: ``,
  height: `100px`
}

export default Shell
