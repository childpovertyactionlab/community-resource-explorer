import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { Col, Row } from "react-bootstrap"

import Layout from "./../components/layout"
import SEO from "./../components/seo"
import Hero from "./../components/hero-no-img"
import CustomCarousel from "./../components/customCarousel"
import { pages } from "./../consts"
import MdxQuote from "./../components/MdxQuote"
import MdxBlogSection from "./../components/MdxBlogSection"

const PostTemplate = ({ data, ...props }) => {
  // console.log("PostTemplate, ", props)

  const shortcodes = { MdxQuote, MdxBlogSection }

  // Shorten reference to page node.
  const post = props.pageContext.post
  const { keywords, image, description } = pages.ISD.meta
  const { name } = pages.ISD

  return (
    <Layout id="isd-page" activePageId={pages.ISD.id}>
      <SEO
        url={props.location.href}
        title={name}
        keywords={keywords}
        image={image}
        description={description}
      />
      <Hero
        wide={true}
        activePageId={pages.ISD.id}
        gatsbyImgSrc={
          post.frontmatter.showCaroItems ? false : post.frontmatter.heroImage
        }
        heroImageAlt={
          post.frontmatter.showCaroItems ? false : post.frontmatter.heroImageAlt
        }
      >
        <div className="page-title-section">
          <div className="subtitle px-0">{post.frontmatter.title}</div>
        </div>
      </Hero>
      <Row id="page">
        {!!post.frontmatter.showCaroItems && (
          <Col className="carousel-section p-0" xs={{ offset: 0, span: 12 }}>
            <CustomCarousel items={post.frontmatter.caroItems} />
          </Col>
        )}
        <MDXProvider components={{ ...shortcodes }}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </MDXProvider>
      </Row>
    </Layout>
  )
}

export default PostTemplate
