import * as React from "react";
import { motion, MotionProps } from "framer-motion";
import styled from "styled-components";
import css from "@styled-system/css";

const Path: React.FC<MotionProps> = props => (
	<motion.path
		fill="transparent"
		strokeWidth="2"
		stroke="#000"
		strokeLinecap="square"
		{...props}
	/>
);

const StyledBurgerButton = styled.button({
	outline: "none",
	border: "none",
	cursor: "pointer",
	padding: "16px",
	borderRadius: "50%",
	background: "transparent",
	zIndex: 10,
	position: "relative",
});

export const BurgerButton: React.FC<{
	toggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ toggle }) => (
	<StyledBurgerButton onClick={toggle}>
		<svg width="20" height="20" viewBox="0 0 20 20">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				variants={{
					closed: {
						d: "M 2 9.423 L 20 9.423",
						opacity: 1,
					},
					open: {
						d: "M 2 9.423 L 20 9.423",
						opacity: 0,
					},
				}}
				transition={{ duration: 0.2 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</StyledBurgerButton>
);

export const variants = {
	open: {
		left: 0,
	},
	closed: { left: "100vw" },
};

export const StyledMenu = styled(motion.div)(
	css({
		position: "fixed",
		height: "100%",
		width: "100vw",
		bg: "primarys.2",
		color: "black",
		zIndex: 8,
		top: 84,
	})
);

export const Drawer: React.FC<{
	toggle: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}> = ({ toggle, children }) => (
	<StyledMenu variants={variants} onClick={toggle}>
		{children}
	</StyledMenu>
);
