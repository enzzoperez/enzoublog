import React from "react"
import { Link, graphql } from "gatsby"
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

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  background: #e815bde3;
  line-height: 30px;
`

const StyledLinkContainer = styled(Link)`
  margin: 0 20px 20px 0;
  @media (max-width: 620px) {
    margin: 0 0px 20px 0;
  }
`

const PostContainer = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: 1px solid #444242;
  padding: 0 0 10px 20px;
  background-image: url(${props => props.imgBackgorund});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
`

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <ListPostContainer name="CONTAINER-POSTS">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <StyledLinkContainer to={`blog${node.fields.slug}`} >
              <PostContainer
                name="POST-INDV"
                key={node.fields.slug}
                imgBackgorund={
                  node.frontmatter.thumbnail &&
                  node.frontmatter.thumbnail.childImageSharp.fluid.src
                }
              >
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                    maxWidth: 250
                  }}
                >
                  <StyledLink
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </StyledLink>
                </h3>
                <small>{node.frontmatter.date}</small>
              </PostContainer>
            
              
              </StyledLinkContainer>
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
