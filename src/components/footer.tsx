import React from "react";
import { MarkGithub } from "@styled-icons/octicons/MarkGithub";
import { ExternalLink } from "@styled-icons/remix-line/ExternalLink";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";
import { Twitter } from "@styled-icons/boxicons-logos/Twitter";
import { StackOverflow } from "@styled-icons/fa-brands/StackOverflow";
import Box, { Image, Container } from "./box";
import { Title } from "./text";
import { BaseALink } from "./link";
import { Button } from "./button";
import { CardSection } from "./card";
import endGif from "../images/end.gif";
export default () => (
	<Container py={6} mt="auto">
		<Title fontWeight={800} fontSize="h5">
			Let's work together
		</Title>
		<Box mb={5}>
			<BaseALink href="mailto:jrohit072@gmail.com">
				<Button>Get In Touch</Button>
			</BaseALink>
		</Box>
		<Title fontWeight={800} fontSize="h5">
			My Accounts
			<CardSection display="inline-flex" py={2}>
				<Box mr={4}>
					<BaseALink
						href="https://github.com/syntaxhacker"
						target="_blank"
					>
						<MarkGithub size="18" />
					</BaseALink>
				</Box>
				<Box mr={4}>
					<BaseALink
						href="https://twitter.com/syntaxhacker0"
						target="_blank"
					>
						<Twitter size="18" />
					</BaseALink>
				</Box>
				<Box mr={4}>
					<BaseALink
						href="https://www.linkedin.com/in/rohitjogi/"
						target="_blank"
					>
						<Linkedin size="18" />
					</BaseALink>
				</Box>
				<Box mr={4}>
					<BaseALink
						href="https://stackoverflow.com/users/10004499/syntax-hacker"
						target="_blank"
					>
						<StackOverflow size="18" />
					</BaseALink>
				</Box>
				<Box mr={4}>
					<BaseALink
						href="https://www.stopstalk.com/user/profile/syntaxhacker"
						target="_blank"
					>
						<ExternalLink size="18" />
					</BaseALink>
				</Box>
			</CardSection>
		</Title>
		<Box my={5} textAlign="center">
			<Image style={{ maxWidth: "300px" }} src={endGif}></Image>
		</Box>
	</Container>
);
