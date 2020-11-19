import styled from "styled-components";
import css from "@styled-system/css";
import Box, { GlobalProps, BoxStyleCompose } from "./box";
import { variant } from "styled-system";

interface CardProps extends GlobalProps {
	variant?: "vertical" | "horizontal" | "text";
}

export const BasicCard = styled(Box)<CardProps>(BoxStyleCompose);

export const Card = styled(BasicCard)<CardProps>(
	css({
		boxShadow: "card",
		borderRadius: "default",
		overflow: "hidden",
	}),
	variant({
		variants: {},
	})
);

Card.defaultProps = {
	pt: 4,
};

export const CardSection = styled(Box)(
	css({
		px: 5,
		mb: 4,
		P: {
			m: 0,
		},
		h1: {
			lineHeight: 2,
			m: 0,
		},
	})
);
