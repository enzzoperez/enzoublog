import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import styled from "styled-components"

const ListPostContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0 40px;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`

const PostContainer = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 20px 20px 0;
  border: 1px solid #444242;
  padding: 0 0 10px 20px;
  background-image: url(${props => props.imgBackgorund});
  background-size: 100%;
  background-repeat: no-repeat;
  @media (max-width: 620px) {
    margin: 0 0px 20px 0;
  }
`

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    console.log("LA DATA", data)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <ListPostContainer name="CONTAINER-POSTS">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <PostContainer
                name="POST-INDV"
                key={node.fields.slug}
                imgBackgorund={
                  node.frontmatter.thumbnail &&
                  node.frontmatter.thumbnail.childImageSharp.fluid.src
                }
              >
                {/* {node.frontmatter.thumbnail && (
                  <Img
                    style={{ height: 300, widht: 300 }}
                    fluid={node.frontmatter.thumbnail.childImageSharp.fluid.src}
                  />
                )} */}
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </PostContainer>
            )
          })}
        </ListPostContainer>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
