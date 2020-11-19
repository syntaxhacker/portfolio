import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

interface ImageProps {
	fileName: string;
	alt?: string;
	style?: object;
}
const FluidImage = ({ fileName, alt, style }: ImageProps) => {
	const { allImageSharp } = useStaticQuery(graphql`
		query {
			allImageSharp {
				nodes {
					fluid(maxWidth: 800, quality: 100) {
						originalName
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const fluid = allImageSharp.nodes.find(
		(n: { fluid: { originalName: string } }) =>
			n.fluid.originalName === fileName
	).fluid;

	return <Img fluid={fluid} alt={alt} style={style} />;
};

export default FluidImage;
