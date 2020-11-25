import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ filename, alt, loading, styling, noBlur }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile (filter: {extension: { regex: "/png|jpg/"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 920, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        noBlurImages: allFile (filter: {extension: { regex: "/png|jpg/"}}) {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 920, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    `}
    
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      const noBlurImage = data.noBlurImages.edges.find(n => {
        return n.node.relativePath.includes(filename)
      })

      if (!image && !noBlurImage) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
      const imageFluidNoBlur = noBlurImage.node.childImageSharp.fluid
      return <Img alt={alt} fluid={noBlur ? imageFluidNoBlur : imageFluid} loading={loading} style={styling} />
    }}
  />
)

export default Image
