import { createGlobalStyle } from "styled-components";
import css from "@styled-system/css";

const GlobalStyles = createGlobalStyle(
	css({
		"*": {
			boxSizing: "border-box",
		},
		html: {
			fontSize: "body",
			fontFamily: "body",
			color: "text",
			backgroundColor: "white",
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
			textRendering: "optimizeLegibility",
		},
		body: {
			margin: 0,
		},
		"input, button, select, textarea": {
			fontFamily: "inherit",
			fontSize: "inherit",
			fontWeight: "normal",
			color: "inherit",
		},
		svg: {
			verticalAlign: "middle",
			display: "block",
		},
		hr: {
			mb: 5,
			borderColor: "black",
		},
		a: {
			color: "unset",
		},
		"::selection": {
			bg: "primarys.1",
		},
		"body.noScroll": {
			overflow: ["hidden", "visible"],
		},
	})
);

export default GlobalStyles;
