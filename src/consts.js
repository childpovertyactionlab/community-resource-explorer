const HOME = {
  id: 'home',
  path: '/',
  name: 'Home',
}
const EXPLORER = {
  id: 'explorer',
  path: 'https://hyperobjekt.github.io/cpal-components/demo/dist/',
  name: 'Explorer',
}
const ABOUT = {
  id: 'about',
  path: '/about',
  name: 'About',
}
const ACTION = {
  id: 'action',
  path: '/in-action',
  name: 'Explorer in Action',
}
const FAQ = {
  id: 'faq',
  path: '/faqs',
  name: 'FAQ & Methods',
}
const CONTACT = {
  id: 'contact',
  path: '/contact',
  name: 'Contact us',
}

// _________ non-menu pages ___

const ISD = {
  id: 'isd',
  path: '/isd',
  name: 'ISD'
}

const DATA = {
  id: 'data',
  path: '/get-the-data',
  name: 'Get the data'
}

const pages = { HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT, ISD, DATA }
const menuPages = [ HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT ]

// keep in sync with $sticky-header-height in _variables.scss
const stickyHeaderHeight = 64;

export {
  pages,
  menuPages,
  stickyHeaderHeight
}