import React from "react"
import Menu from "./menu"

class stickyHeader extends React.Component {
  constructor() {
    super()

    // Always show the sticky header (active by default)
    this.state = { active: true }
  }

  componentDidMount() {
    // Sticky header is now always visible, no need for scroll listener
    // Keeping the scroll logic commented out in case we want to restore it later
    // const hero = document.getElementById("hero")
    // if (!hero) {
    //   this.setState({ active: true })
    //   return
    // }
    // window.addEventListener("scroll", this.updateStickiness)
  }

  // Removed scroll listener logic since header is now always visible
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.updateStickiness)
  // }

  render() {
    const classes = "sticky-header " + (this.state.active ? "active" : "")
    return (
      <div className={classes}>
        <div className="content">
          <div className="branding">
            <a className="logo-link" aria-label="Go home" href="/">
              <span className="site-logo svg-base"></span>
              <span className="site-title">Community Resource Explorer</span>
            </a>
          </div>
          <Menu activePageId={this.props.activePageId} />
        </div>
      </div>
    )
  }
}

export default stickyHeader
