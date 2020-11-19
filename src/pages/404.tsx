import React from "react";
import { Link } from "../components/link";
import Layout from "../components/layout";
import { Container } from "../components/box";
import Text, { Title } from "../components/text";
import SEO from "../components/seo";

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Container my="auto">
			<Title fontSize="h1" fontWeight={900}>
				404
			</Title>
			<Text>The page you were looking for was not found.</Text>
			<br />
			<Link to="/">Return Home</Link>
		</Container>
	</Layout>
);

export default NotFoundPage;
