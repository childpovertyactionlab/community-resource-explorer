const HOME = {
  id: 'home',
  path: '/home',
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
  name: 'FAQ&Methods',
}
const CONTACT = {
  id: 'contact',
  path: '/contact',
  name: 'Contact us',
}

// _________ non-menu pages ___
// blog index?

const ISD = {
  id: 'isd',
  path: '/isd',
  name: 'ISD'
}

const pages = { HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT, ISD }
const menuPages = [ HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT ]

export {
  pages,
  menuPages
}