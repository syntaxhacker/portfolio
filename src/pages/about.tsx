import React from "react";
import Box, { Container, Row, Col } from "../components/box";
import Text, { Title } from "../components/text";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { ALink } from "../components/link";

interface bookListTypes
	extends Array<{
		title: string;
		author: string;
		category: string;
		status?: boolean | 0 | 1;
	}> {}

const bookList: bookListTypes = [
	{
		title: "FFMPEG processing",
		author: "sameer borate",
		category: "video and audio processing",
		status: false,
	},
	{
		title: "Introduction to Algorithms",
		author: "Thomas H. Cormen",
		category: "algorithms",
		status: true,
	},
	{
		title: "Guide to Competitive Programming",
		author: "Antti Laaksonen",
		category: "Competitive Programming",
		status: true,
	},
];

export default () => (
	<Layout>
		<SEO title="About" />
		<Container py={3}>
			<Box m="auto" maxWidth={680} justifyContent="center">
				<Box mb={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900} mb={3}>
						About
					</Title>
					<Text>
						I am a self-taught Full Stack JavaScript Developer . I
						have been programming for 2+ years with experience in
						developing and Learning Javascript, Typescript and React
						apps. im A Big Space Fan too .
					</Text>
					<Text>
						My time is spent coding and looking at stars{" "}
						<ALink
							href="https://www.nasa.gov/multimedia/imagegallery/index.html"
							target="_blank"
						>
							Here
						</ALink>
						{" 😝 "}
						and{" "}
						surf websites, explore trending open source projects ,
						learning new technologies.
					</Text>
					<Text>
						Other than that, I spend my time watching youtube, cleaning my room, help with household work or just go for a long walk
					</Text>
				</Box>
				<hr />
				<Box>
					<Title fontSize="h6" mb={5}>
						Books
					</Title>
					<Box display={["none", "block"]}>
						<Row color="grey" fontSize="caption">
							<Col width={1 / 2}>
								<Text>BOOK</Text>
							</Col>
							<Col width={1 / 4}>
								<Text>Category</Text>
							</Col>
							<Col width={1 / 4}>
								<Text>STATUS</Text>
							</Col>
						</Row>
					</Box>
					{bookList.map((book, index: number) => (
						<Row
							bg={index % 2 == 0 ? "primarys.0" : "white"}
							py={4}
							key={`book_${index}`}
						>
							<Col width={[null, 1 / 2]}>
								<Text fontWeight={500} mb={2}>
									{book.title}
								</Text>
								<Text mb={0} fontSize="caption">
									{book.author}
								</Text>
							</Col>
							<Col width={[null, 1 / 4]}>
								<Text mb={0}>{book.category}</Text>
							</Col>
							<Col width={[null, 1 / 4]}>
								<Text>{book.status ? "done" : "reading"}</Text>
							</Col>
						</Row>
					))}
				</Box>
			</Box>
		</Container>
	</Layout>
);
