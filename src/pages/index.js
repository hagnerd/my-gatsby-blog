import React from "react";
import { Link, graphql } from "gatsby";
import styled from "react-emotion";
import Layout from "../templates/default";

const H2 = styled.h2`
text-align: center;
`

const Card = styled.div`
width: 700px;
margin: 0 auto;
padding: 15px;
`

const BlogTitle = styled.h3`
  margin-bottom: 10px;
`
const BlogInfo = styled.h4`
  margin: 10px 0;
`

const BlogExcerpt = ({ title, date, excerpt, slug }) => (
  <Card>
    <BlogTitle><Link to={slug}>{title}</Link></BlogTitle>
    <BlogInfo>{date}</BlogInfo>
    <p>{excerpt}</p>
    <Link to={slug}>Read more -></Link>
  </Card>
)

export default ({ data }) => (
  <Layout>

    <div>

      <H2>Latest Posts</H2>

      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogExcerpt 
            key={node.id}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            slug={node.fields.slug}
          />
        ))}
      </div>

    </div>

  </Layout>
);


export const query = graphql`
query {
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    totalCount
    edges {
      node {
        id
        excerpt
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        fields {
          slug
        }
      }
    }
  }
}
`;

