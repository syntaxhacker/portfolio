module.exports = {
	siteMetadata: {
		title: `Rohit Jogi`,
		description: `Rohit Jogi's Portfolio Website`,
		author: `@rohitj`,
		siteUrl: `https://festive-mclean-8b23b3.netlify.app`,
		image: "/images/portfolio-seo-image.jpeg", // Path to your image you placed in the 'static' folder

	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static`,
			},
		},

		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Rohit Jogi`,
				short_name: `porfolio`,
				start_url: `/`,
				background_color: `#132365`,
				theme_color: `#132365`,
				display: `minimal-ui`,
				icon: `src/images/rocketlogo.png`,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /svg/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				excludes: [ "/404/*" ]
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "XXXXXXXX",
				head: false,
				respectDNT: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Space Mono\:400,400i,700,700i`,
					`Nunito Sans\:300,300i,400,400i,600,600i,700,700i,800,800i,900,900i`,
				],
				display: "swap",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
