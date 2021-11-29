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
		name: "Google Meet Media Blocker (Extension)",
		description:
			"This Extension helps to prevent toggling video/audio everytime while joining Gmeet.",
		tags: [],
		links: [
			{
				name: "Add to Chrome",
				url:
					"https://chrome.google.com/webstore/detail/media-blocker-for-meeting/mgnnpillnbncjnckiladliiijioehobh",
			},
		],
		image: "gmeet-blocker.png",
	},
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
