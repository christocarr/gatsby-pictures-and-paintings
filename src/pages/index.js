import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import About from "../components/About"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { Link } from "gatsby"

export default ({ data }) => (
	<Layout>
		<SEO title="home" desc="The homepage of pictures and paintings." />
		<Hero home="true" img={data.defaultBcg.childImageSharp.fluid}>
			<Banner title="Pictures and Paintings" />
			{/* <AniLink fade to="/gallery" className="link"><button className="btn-primary">Gallery</button></AniLink> */}
			<Link to="/gallery" className="link">
				<button className="btn-primary">Gallery</button>
			</Link>
		</Hero>
		<About />
	</Layout>
)

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "default.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 4160, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`
