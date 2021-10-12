import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, lang, meta, title }: SEOProps) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						image
						siteUrl
					}
				}
			}
		`
	);

	const { siteUrl, image } = site.siteMetada;
	const metaDescription = description || site.siteMetadata.description;
	const metaImagePath = siteUrl + image;

	return (
		<Helmet
			htmlAttributes={{
				land: lang || "en",
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},

				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					property: "og:image",
					content: metaImagePath,
				},
				{
					property: "twitter:image",
					content: metaImagePath,
				},
			].concat(meta || [])}
		/>
	);
};

interface SEOProps {
	description?: string;
	lang?: string;
	meta?: [
		{
			name: string;
			content: string;
			image: string;
		}
	];
	title: string;
}

export default SEO;
