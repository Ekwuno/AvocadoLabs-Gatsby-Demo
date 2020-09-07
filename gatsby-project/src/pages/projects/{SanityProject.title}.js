import React from "react"
import {graphql,Link} from 'gatsby'
import Layout from '../../components/layout';
import Image from 'gatsby-image'

export const query = graphql `
query ($id: String = "") {
  sanityProject(id: {eq: $id}) {
    title
    description
    image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
  }
}

  
`

export default function Stuff ({data}){
  // const project = data.SanityProject;

  return (
    <Layout>
      <h2>
      <Link to = "/"> {data.sanityProject.title} </Link>
        
      </h2>
      <Image fluid = {data.sanityProject.image.asset.fluid} alt={data.sanityProject.title}/>
  <p> {data.sanityProject.description}</p>
    
        <Link to= "/" >Back to home</Link>
    </Layout>
  )
}