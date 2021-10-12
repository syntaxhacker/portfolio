import React from "react";
import Box, { Col, Container, HeroRow, Row } from "../components/box";
import Text, { Title } from "../components/text";
import Layout from "../components/layout";
import { data } from "../data/projects";
import SEO from "../components/seo";
import { Button } from "../components/button";
import { GetSvg } from "../components/getLogos";
import FluidImage from "../components/fluidImage";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<HeroRow>
				<Col py={["4", "6"]}>
					<Title fontSize={["h4", "h3"]} fontWeight={900} mb={0}>
						Hello, I'm Rohit Jogi.
					</Title>
					<Title
						fontSize={["h4", "h3"]}
						color="primary"
						fontWeight={900}
					>
						I build beautiful web applications.
					</Title>
					<Text>
						I am a Full Stack Web Developer from India.
						<br /> I like to mesh with various frontend and backend
						technologies to learn, read technical articles, or watch
						youtube.
					</Text>
				</Col>
				<Col width="70%">
					<FluidImage
						style={{
							width: ["100%"],
							zIndex: -1,
							height: "auto",
							maxWidth: "500px",
							borderRadius: "5px",
						}}
						fileName="me.jpg"
						alt="me"
					/>
				</Col>
			</HeroRow>
			<Box mb={5}>
				<Title fontSize={["h4", "h3"]} fontWeight={900} mb={6}>
					Some Things I have built
				</Title>
			</Box>
			<Box>
				{data.map((project, pIndex) => (
					<Box key={`Box_${pIndex}`} mb={5}>
						<Row>
							<Col
								key={`project_img_${pIndex}`}
								width={["100%", "50%"]}
								mb={5}
							>
								<FluidImage
									style={{ margin: "auto", zIndex: "-1" }}
									fileName={project.image}
								/>
							</Col>
							<Col
								key={`project_info_${pIndex}`}
								width={["100%", "50%"]}
								mb={5}
							>
								<Title fontSize="h6">{project.name}</Title>
								<Text>{project.description}</Text>
								<Box
									display="flex"
									flexWrap="wrap"
									alignItems="center"
								>
									{project.tags.map((tag, tIndex) => (
										<Box
											key={`t_${tIndex}`}
											my={[2, 4]}
											mx={[3, 5]}
											maxWidth="50px"
										>
											{GetSvg(tag, tIndex, "100%")}
										</Box>
									))}
								</Box>
								{project.links.map((link, lIndex) => (
									<Button
										mt={5}
										mr={2}
										key={lIndex}
										variant="outline"
										onClick={() =>
											window.open(link.url, "_blank")
										}
									>
										{link.name}
									</Button>
								))}
							</Col>
						</Row>
					</Box>
				))}
				
			</Box>
		</Container>
	</Layout>
);

export default IndexPage;
