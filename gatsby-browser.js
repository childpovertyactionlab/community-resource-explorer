/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// load styles
require("./src/styles/style.scss");
// load instersection observer polyfill
require("intersection-observer");

exports.onClientEntry = () => {
  // Don't need to do anything here, but if you don't 
  // export something, the import won't work.
  // See: https://github.com/gatsbyjs/gatsby/issues/2177#issuecomment-382280801
}