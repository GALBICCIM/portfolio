import styled from "styled-components";

import { deepGrayColor, whiteColor } from "constants/Colors";
import ArrowImage from "assets/arrow.svg";

export const Embla = styled.div`
	height: 100dvh;
	background-color: ${deepGrayColor};
`;

export const EmblaViewport = styled.div`
	height: 100%;
	overflow: hidden;
`;

export const EmblaContainer = styled.div`
	height: 100%;
	display: flex;
`;

export const EmblaSlide = styled.div`
	flex: 0 0 100%;
	min-width: 100%;
	transform: translate3d(0, 0, 0);
`;

export const EmblaButtons = styled.div`
	width: 97vw;
	display: flex;
	justify-content: space-between;
	position: absolute;
	left: 1.5vw;
	bottom: 1%;
`;

export const EmblaButton = styled.button`
	width: min(14.5vw, 14.5vh);
	height: min(5.5vw, 5.5vh);
	opacity: 0.6;
	display: flex;
	align-items: center;
	justify-content: space-around;
	cursor: pointer;
	user-select: none;
	border: 3px solid #c3c3c3;
	border-radius: 20px;
	outline: none;
	background-color: white;
	box-shadow: inset 0 0 7px;
	transition: all 0.5s ease-in-out;

	&:hover {
		opacity: 1;
	}
	&:disabled {
		opacity: 0;
		cursor: default;
	}
	@media (max-width: 768px) {
		width: min(60px, 60px);
		height: min(40px, 40px);
	}
`;

export const EmblaDots = styled.div`
	display: flex;
	justify-content: space-evenly;
	position: relative;
	top: 4%;
	z-index: 1;
`;

export const EmblaDot = styled.button`
	background-color: ${deepGrayColor};
	text-decoration: none;
	border: 3px solid ${whiteColor};
	border-radius: 50%;
	padding: 0;
	width: 1.5rem;
	height: 1.5rem;

	&.embla__dot--selected {
		background-color: ${whiteColor};
	}
`;

export const BtnArrow = styled.img.attrs({ src: ArrowImage, alt: "Arrow Icon" })`
	width: min(3vw, 3vh);
	height: min(3vw, 3vh);
	user-select: none;

	@media (max-width: 768px) {
		width: min(20px, 20px);
		height: min(20px, 20px);
	}
`;
