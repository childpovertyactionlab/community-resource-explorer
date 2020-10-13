import React from "react"
import Menu from "./menu"
import { stickyHeaderHeight } from "../consts"

import _ from "lodash"

class stickyHeader extends React.Component {
  constructor() {
    super()

    this.state = { active: false }

    this.unthrottledUpdateStickiness = this.unthrottledUpdateStickiness.bind(
      this
    )
    this.updateStickiness = _.throttle(this.unthrottledUpdateStickiness, 250)
  }

  componentDidMount() {
    const hero = document.getElementById("hero")

    if (!hero) {
      // pages w/o hero (e.g. "get-the-data") have header fixed to page-top & don't listen to scroll
      this.setState({ active: true })
      return
    }

    // limit firing to every .25s to avoid perf hit
    window.addEventListener("scroll", this.updateStickiness)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateStickiness)
  }

  unthrottledUpdateStickiness(e) {
    const hero = document.getElementById("hero")
    let heroHeight = hero.getBoundingClientRect().height

    // TODO: simplify by removing appendage from hero
    const heroAppendage = document.getElementById("hero-appendage")
    // console.log(heroHeight)
    if (heroAppendage) {
      const appendageHeight = heroAppendage.getBoundingClientRect().height
      heroHeight -= appendageHeight
      // console.log(heroHeight)
    }

    const minScroll = heroHeight - stickyHeaderHeight

    const scrollOffset = window.scrollY
    const active = scrollOffset >= minScroll

    this.setState({ active })
  }

  render() {
    const classes = "sticky-header " + (this.state.active ? "active" : "")
    return (
      <nav className={classes}>
        <div className="content">
          <div className="branding">
            <a className="logo-link" aria-label="Go home" href="/">
              <span className="site-logo svg-base"></span>
              <span className="site-title">Community Resource Explorer</span>
            </a>
          </div>
          <Menu activePageId={this.props.activePageId} />
        </div>
      </nav>
    )
  }
}

export default stickyHeader
