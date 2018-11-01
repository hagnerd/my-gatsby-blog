import React from "react"; 
import { Link, graphql } from "gatsby";
import Layout from "./default";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(data);

  return (
    <Layout>

      <Link to="/">Back</Link>
      <h1>{post.frontmatter.title}</h1>
      <h2>{post.frontmatter.date}</h2>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "10px",
      }}>
        <h3>Tags</h3>
        <ul 
          style={{ 
            display: "flex", 
            justifyContent: "space-around", 
            paddingLeft: "20px",
            listStyle: "none",
          }}>
          {post.frontmatter.tags.map((tag) => (
            <li style={{
              borderRadius: "5px",
              backgroundColor: "#F56400",
              padding: "5px 10px",
            }}><Link style={{ 
              color: "white",
            }} to={`tags/${tag}`}>{tag}</Link></li>
          ))}
        </ul>
      </div>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </Layout>
  );
}

export const query = graphql`
  query($path: String!){
    markdownRemark(frontmatter: { path: { eq: $path} }) {
      html
      timeToRead
      frontmatter {
        date
        tags
        title
      }
    }
  }
`
