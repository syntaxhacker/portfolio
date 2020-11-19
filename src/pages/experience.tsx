import React from "react";
import Box, { Container } from "../components/box";
import Text, { Title } from "../components/text";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Card, CardSection } from "../components/card";
import { ALink } from "../components/link";
import { FileDownload } from "styled-icons/fa-solid/FileDownload";
import { Timeline } from "../components/timeline";
import { GetSvg } from "../components/getLogos";
import { languages, tools, platforms, databases } from "../data/skills";
const portfolioPDF = require("../../static/portfolio.pdf");
export default () => (
	<Layout>
		<SEO title="Experience" />
		<Container py={3}>
			<Box m="auto" maxWidth={680} justifyContent="center">
				<Box mb={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900} mb={6}>
						Experience
					</Title>
					<Text>Download a copy of my CV below.</Text>
					<ALink href={portfolioPDF} download>
						Download Resume <FileDownload size={18} />
					</ALink>
				</Box>
				<hr />
			</Box>

			<Box m="auto" maxWidth={680} justifyContent="center">
				<Title mb="0" fontSize={["h4", "h3"]} fontWeight={900}>
					Timeline
				</Title>
			</Box>
			<Timeline />
			<Box mt={5}>
				<Box m={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900}>
						Skills
					</Title>
					<hr />
					<Box display="flex" flexWrap="wrap" alignItems="center">
						{languages.map((tag, tIndex) => (
							<Card
								key={`card_${tIndex}`}
								justifyContent="center"
								display="flex"
								height="7em"
								flexDirection="column"
							>
								<CardSection>
									{GetSvg(tag, tIndex, "4em")}
								</CardSection>
							</Card>
						))}
					</Box>
				</Box>
				<Box m={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900}>
						Databases
					</Title>
					<hr />
					<Box display="flex" flexWrap="wrap" alignItems="center">
						{databases.map((tag, tIndex) => (
							<Box my={1} mx={3} key={`dbbox_${tIndex}`}>
								<Card
									justifyContent="center"
									display="flex"
									height="7em"
									flexDirection="column"
								>
									<CardSection>
										{GetSvg(tag, tIndex, "4em")}
									</CardSection>
								</Card>
							</Box>
						))}
					</Box>
				</Box>
				<Box m={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900}>
						Platforms
					</Title>
					<hr />
					<Box display="flex" flexWrap="wrap" alignItems="center">
						{platforms.map((tag, tIndex) => (
							<Box my={1} mx={3} key={`dbbox_${tIndex}`}>
								<Card
									justifyContent="center"
									display="flex"
									height="7em"
									flexDirection="column"
								>
									<CardSection>
										{GetSvg(tag, tIndex, "4em")}
									</CardSection>
								</Card>
							</Box>
						))}
					</Box>
				</Box>
				<Box m={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900}>
						Tools
					</Title>
					<hr />
					<Box display="flex" flexWrap="wrap" alignItems="center">
						{tools.map((tag, tIndex) => (
							<Box my={1} mx={3} key={`dbbox_${tIndex}`}>
								<Card
									justifyContent="center"
									display="flex"
									height="7em"
									flexDirection="column"
								>
									<CardSection>
										{GetSvg(tag, tIndex, "4em")}
									</CardSection>
								</Card>
							</Box>
						))}
					</Box>
				</Box>
			</Box>
		</Container>
	</Layout>
);
