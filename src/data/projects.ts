interface workListTypes
	extends Array<{
		name: string;
		description: string;
		tags: Array<string>;
		links: Array<any>;
		image: string;
	}> {}

const data: workListTypes = [
	{
		name: "StayHut",
		description: "Hotel Booking & Reservation Application",

		tags: [
			"svgreact",
			"TypeScript",
			"Apollo",
			"Docker",
			"Graphql",
			"Nodejs",
			"heroku",
		],
		links: [
			{
				name: "Github",
				url: "https://github.com/syntaxhacker/stayhut",
			},
			{
				name: "Website",
				url: "https://stayhut.herokuapp.com/",
			},
		],
		image: "stayhut.png",
	},
	{
		name: "syntaxhacker",
		description: "Personal Website",
		tags: ["Gatsby", "TypeScript"],
		links: [
			{
				name: "Github",
				url: "https://github.com/syntaxhacker/portfolio/",
			},
			{
				name: "Website",
				url: "https://festive-mclean-8b23b3.netlify.app/",
			},
		],
		image: "portfolio.png",
	},
];

export { data };
