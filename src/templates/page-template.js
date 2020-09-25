import React from "react"
import { Helmet } from "react-helmet"
// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data }) {
  const { markdownRemark: content } = data
  return (
    <div className="content-container">
      <Helmet title={`Your Blog Name - ${content.frontmatter.title}`} />
      <div className="content">
        <h1 className="content-title">{content.frontmatter.title}</h1>
        <div
          className="content-body"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`