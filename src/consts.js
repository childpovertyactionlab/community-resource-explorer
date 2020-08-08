const HOME = {
  id: "home",
  path: "/",
  name: "Home",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}
const EXPLORER = {
  id: "explorer",
  path: "/explorer/",
  name: "Explorer",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}
const ABOUT = {
  id: "about",
  path: "/about",
  name: "About",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}
const ACTION = {
  id: "action",
  path: "/in-action/",
  name: "Explorer in Action",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}
const FAQ = {
  id: "faq",
  path: "/faq",
  name: "FAQ & Methods",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const DATA = {
  id: "data",
  path: "/get-the-data",
  name: "Get the data",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
  footerOnly: true,
}

const CONTACT = {
  id: "contact",
  path: "/contact",
  name: "Contact us",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

// _________ non-menu pages ___

// TODOcms
const ISD = {
  id: "isd",
  path: ACTION.path + "dallas-isd",
  name: "Dallas ISD",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const OPERATION = {
  id: "operation",
  path: ACTION.path + "operation-connectivity",
  name: "Operation Connectivity",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const SIGNUP = {
  id: "signup",
  path: "/signup",
  name: "Sign up",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const THANKS = {
  id: "thanks",
  path: "/thank-you",
  name: "Thank you",
  meta: {
    description: '',
    image: '',
    keywords: [],
  },
}

const pages = { HOME, EXPLORER, ABOUT, ACTION, FAQ, CONTACT, OPERATION, ISD, DATA, SIGNUP, THANKS }
const menuPages = [HOME, EXPLORER, ABOUT, ACTION, FAQ, DATA, CONTACT]

// keep in sync with $sticky-header-height in _variables.scss
const stickyHeaderHeight = 64

export { pages, menuPages, stickyHeaderHeight }
