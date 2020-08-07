const HOME = {
  id: "home",
  path: "/",
  name: "Home",
}
const EXPLORER = {
  id: "explorer",
  path: "/explorer/",
  name: "Explorer",
}
const ABOUT = {
  id: "about",
  path: "/about",
  name: "About",
}
const ACTION = {
  id: "action",
  path: "/in-action/",
  name: "Explorer in Action",
}
const FAQ = {
  id: "faq",
  path: "/faq",
  name: "FAQ & Methods",
}
const CONTACT = {
  id: "contact",
  path: "/contact",
  name: "Contact us",
}

// _________ non-menu pages ___

const ISD = {
  id: "isd",
  path: "/dallas-isd",
  name: "Dallas ISD",
}

const DATA = {
  id: "data",
  path: "/get-the-data",
  name: "Get the data",
}

const SIGNUP = {
  id: "signup",
  path: "/signup",
  name: "Sign up",
}

const pages = { HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT, ISD, DATA, SIGNUP }
const menuPages = [HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT]

// keep in sync with $sticky-header-height in _variables.scss
const stickyHeaderHeight = 64

export { pages, menuPages, stickyHeaderHeight }
