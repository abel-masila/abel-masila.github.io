import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import SEO from "../components/SEO"
import Image from "gatsby-image"

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { title, stack, info, image } = nodes[0]
  return (
    <Layout>
      <SEO title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          {/* <Image fluid={image.childImageSharp.fluid} className="about-img" /> */}
          <div className="about-img-container">
            <Image
              fluid={image.childImageSharp.fluid}
              className="about-person-img"
            />
          </div>
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        id
        title
        stack {
          title
          id
        }
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default About
