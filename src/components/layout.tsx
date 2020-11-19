import React from "react";
import { ThemeProvider } from "styled-components";
import Box from "../components/box";
import theme from "../data/theme";

import GlobalStyles from "./global-styles";
import Footer from "./footer";
import Header from "../components/header";

const Layout = ({ children }: LayoutProps) => (
	<ThemeProvider theme={theme}>
		<Box minHeight="100vh" display="flex" flexDirection="column">
			<GlobalStyles />
			<Header />
			{children}
			<Footer />
		</Box>
	</ThemeProvider>
);

interface LayoutProps {
	children: React.ReactNode;
}

export default Layout;
