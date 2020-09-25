/**
 * Do not inline all of the CSS, instead create file that can be cached
 * See: https://github.com/gatsbyjs/gatsby/issues/1526
 */

export const onPreRenderHTML = ({ getHeadComponents }) => {
  if (process.env.NODE_ENV !== "production") return

  getHeadComponents().forEach(el => {
    if (el.type === "style" && el.props["data-href"]) {
      // <- this was the issue
      el.type = "link"
      el.props["href"] = el.props["data-href"]
      el.props["rel"] = "stylesheet"
      el.props["type"] = "text/css"

      delete el.props["data-href"]
      delete el.props["dangerouslySetInnerHTML"]
    }
  })
}
