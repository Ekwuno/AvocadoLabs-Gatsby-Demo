import React from "react"
import { Link,graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityProject {
    edges {
      node {
        title
        description
        slug {
          current
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
}

`;

const IndexPage = ({data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi welcome to my adventures</h1>
    <ul style={{
      listStyle: 'none', 
      display:'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      alignItems:'space-between', 
      padding: '0',  }}>

      {data.allSanityProject.edges.map(({node:project})=>(
        <li 
          key = {project.slug.current } 
          style={{flex: '1 45%', maxWidth: '45%', margin: '1rem'}}
        >
            <h2 style={{fontSize: '24px'}}>
              <Link to = {project.slug.current}>{project.title}</Link>
            </h2>
            <Image fluid = {project.image.asset.fluid} alt= {project.title}/>
            <p style={{ marginTop:'1rem'}}> {project.description}</p>
            <Link to ={project.slug.current}>See photo details </Link>
        </li>
      ))}

    </ul>
  </Layout>
)

export default IndexPage
