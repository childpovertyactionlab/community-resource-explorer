import React from "react"
import Menu from "./menu"

import _ from "lodash"

class stickyHeader extends React.Component {
  constructor() {
    super()

    this.state = { active: false }

    this.updateStickiness = this.updateStickiness.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll',
      _.throttle(this.updateStickiness, 250))
  }

  updateStickiness(e) {
    const hero = document.getElementById('hero')

    // TODO: will there ever be no hero? if so: show on 100?
    let minScroll = 100;
    if (hero) {
      minScroll = hero.getBoundingClientRect().height
    }

    const scrollOffset = window.scrollY
    const active = scrollOffset > minScroll

    this.setState({ active })
  }

  render () {
    const classes = "sticky-header " + (this.state.active ? "active" : "")
    console.log(this.state.active)
    return (
      <nav className={classes}>
        <div className="content">
          <div className="branding">
            <span className="site-logo svg-base"></span>
            <span className="site-title">Community Resource Explorer</span>
          </div>
          <Menu activePageId={this.props.activePageId} />
        </div>
      </nav>
    )
  }
}

export default stickyHeader
