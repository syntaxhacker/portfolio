import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";
import css from "@styled-system/css";
import { BoxStyleCompose, GlobalProps } from "./box";

const linkStyle = css({
	color: "text",
	p: 0,
	textDecoration: "none",
	backgroundImage: `linear-gradient(
        transparent 0%,
        transparent calc(50% - 8px),
        #bac8ff99 calc(50% - 8px),
        #bac8ff99 100%
      )`,
	backgroundSize: "100% 200%",
	backgroundPosition: "0 0",
	transition:
		"background-position 120ms ease-in-out, padding 120ms ease-in-out",
	"&:hover": {
		py: 2,
		backgroundImage: `linear-gradient(
            transparent 0%,
            transparent calc(50% - 8px),
            #bac8ff99 calc(50% - 8px),
            #bac8ff99 100%
          )`,
		backgroundPosition: "0 100%",
	},
});

export interface LinkProps extends GlobalProps {}

export interface LinkAProps extends GlobalProps {
	href: string;
}

export const BaseALink = styled("a")<LinkAProps>(
	BoxStyleCompose,
	css({
		textDecoration: "none",
	})
);

export const ALink = styled(BaseALink)<LinkAProps>(linkStyle);

export const BaseLink = styled(GatsbyLink)<LinkProps>(
	BoxStyleCompose,
	css({
		textDecoration: "none",
	})
);

export const Link = styled(BaseLink)<LinkProps>(linkStyle);
