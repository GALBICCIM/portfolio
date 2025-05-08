import styled, { keyframes } from "styled-components";

import ArrowImage from "assets/arrow.svg";

const swing = keyframes`
	0% {
		transform: scaleX(-1) translate(0);
	}
	50% {
		transform: scaleX(-1) translate(-15px);
	}
	100% {
		transform: scaleX(-1) translate(0);
	}
`;

export const Container = styled.div`
	width: 100vw;
	height: 95dvh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(1, 300px);
	row-gap: 40px;
	margin-top: 50px;
`;

export const TitleButton = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

export const HereIcon = styled.img.attrs({ src: ArrowImage, alt: "Arrow Icon" })`
	width: min(3vw, 3vh);
	height: min(3vw, 3vh);
	position: relative;
	left: 5%;
	animation: ${swing} ease-in-out 1s infinite;
	user-select: none;
`;
