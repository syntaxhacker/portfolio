import React from "react";
// import Layout from "../components/layout";
// import SEO from "../components/seo";
import styled from "styled-components";
import Box, { GlobalProps, BoxStyleCompose } from "../components/box";
import css from "@styled-system/css";
import { Timelinedata } from "../data/timeline";

export const TimeLine = styled("div")<GlobalProps>(
	BoxStyleCompose,
	css({
		position: "relative",
		width: ["100%", "1000px"],
		zIndex: -1,
		margin: "50px auto",
		// padding: "40px 0",
		p: ["40px 0 0 0", "40px 0 40px 0"],
		// width: "1000px",
		boxSizing: "border-box",
		":before": {
			content: '""',
			height: "100%",
			position: "absolute",
			left: ["20px", "50%"],
			width: "2px",
			// height: "100%",
			background: "#c5c5c5",
		},
	})
);

export const TimelineListType = styled("li")<GlobalProps>(
	css({
		listStyle: "none",
		position: "relative",
		width: ["100%", "50%"],
		p: ["40px 0 50px 50px", "20px 40px 20px 40px"],
		boxSizing: "border-box",
		":nth-child(odd)": {
			float: "left",
			textAlign: ["left", "right"],
			clear: "both",
			"  :before": {
				content: '""',
				position: "absolute",
				top: ["-18px", "24px"],
				left: ["16px", "auto"],
				right: ["auto", "-6px"],
				width: "10px",
				height: "10px",
				background: "rgba(0, 0, 0, 1)",
				borderRadius: "50%",
				boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.2)",
			},
			".time": {
				position: "absolute",
				top: ["-30px", "12px"],
				left: ["50px", "auto"],
				right: ["inherit", "-165px"],
				margin: "0",
				padding: "8px 16px",
				background: "rgba(0, 0, 0, 1)",
				color: "#fff",
				borderRadius: "18px",
				boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.2)",
			},
		},
		":nth-child(even)": {
			float: "right",
			textAlign: "left",
			clear: "both",

			":before": {
				content: '""',
				position: "absolute",
				top: ["-18px", "24px"],
				left: ["16px", "-4px"],
				// left: "-4px",
				width: "10px",
				height: "10px",
				background: "rgba(0, 0, 0, 1)",
				borderRadius: "50%",
				boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.2)",
			},
			".time": {
				position: "absolute",
				top: ["-30px", "12px"],
				left: ["50px", "-165px"],
				right: ["inherit", "auto"],
				margin: "0",
				padding: "8px 16px",
				background: "rgba(0, 0, 0, 1)",
				color: "#fff",
				borderRadius: "18px",
				boxShadow: "0 0 0 3px rgba(0, 0, 0, 0.2)",
			},
		},
	})
);

export const H3 = styled("h3")(
	css({
		margin: "0",
		padding: "0",
		fontWeight: "600",
		color: "primary",
	})
);
export const H4 = styled("h4")(
	css({
		margin: 0,
		padding: 0,
		fontSize: "14px",
	})
);
export const Timeline = () => (
	<TimeLine>
		<ul
			style={{
				margin: "0",
				padding: "0",
			}}
		>
			{Timelinedata.map((item, index) => (
				<TimelineListType key={`t_li_${index}`}>
					<Box>
						<H3>{item.Timeline_heading}</H3>
						<p
							style={{
								margin: "10px 0 0",
								padding: "0",
							}}
						>
							{item.Timeline_description}
						</p>
					</Box>
					<div className="time">
						<H4>{item.Timeline_time}</H4>
					</div>
				</TimelineListType>
			))}

			<div style={{ clear: "both" }}></div>
		</ul>
	</TimeLine>
);
