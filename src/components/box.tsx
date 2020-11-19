import styled from "styled-components";
import css from "@styled-system/css";
import {
	color,
	ColorProps,
	space,
	SpaceProps,
	layout,
	LayoutProps,
	flexbox,
	FlexboxProps,
	border,
	BorderProps,
	typography,
	TypographyProps,
	position,
	PositionProps,
	compose,
} from "styled-system";

export interface GlobalProps
	extends LayoutProps,
		SpaceProps,
		ColorProps,
		FlexboxProps,
		BorderProps,
		TypographyProps,
		PositionProps {}

export const BoxStyleCompose = compose(
	space,
	color,
	layout,
	flexbox,
	border,
	typography,
	position
);

const Box = styled("div")<GlobalProps>(
	css({
		boxSizing: "border-box",
	}),
	BoxStyleCompose
);

export default Box;

export const Container = styled(Box)<GlobalProps>(
	css({
		maxWidth: ["90%", "80%", "70%", 960],
		px: 2,
		mx: "auto",
		width: "100%",
	})
);

export const Row = styled(Box)<GlobalProps>(
	css({
		display: ["block", "flex"],
		flexWrap: "wrap",
		flexFlow: ["row-reverse", "row"],
		mx: -4,
	})
);

export const HeroRow = styled(Row)<GlobalProps>(
	css({
		display: "flex",
		flexFlow: ["column-reverse", "row"],
		// mx: -4,
		my: [0, 5],
	})
);

export const Col = styled(Box)<GlobalProps>(
	css({
		display: "block",
		px: 4,
	})
);
export const Image = styled("img")(
	css({
		width: "100%",
		height: "auto",
		maxWidth: "500px",
		boxShadow: "card",
		borderRadius: "5px",
	})
);
