import styled, { keyframes } from "styled-components";

import { whiteColor } from "constants/Colors";
// import ArrowImage from "assets/arrow.svg";

// const swing = keyframes`
// 	0% {
// 		transform: scaleX(-1) translate(0);
// 	}
// 	50% {
// 		transform: scaleX(-1) translate(-15px);
// 	}
// 	100% {
// 		transform: scaleX(-1) translate(0);
// 	}
// `;

export const Container = styled.div`
	width: 100vw;
`;

export const ProjectDiv = styled.div`
	width: 38vw;
	height: 22vh;
	background-color: ${whiteColor};
	border-radius: 20px;
	transition: transform 0.3s ease;
	will-change: transform;
	backface-visibility: hidden;
	padding: 0 30px;

	&:hover {
		transform: scale(1.03);
	}
`;

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, auto);
	column-gap: 6vw;
	row-gap: 12vh;
	margin-top: 10vh;
`;

export const TextWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

// export const TitleButton = styled.button`
// 	background-color: transparent;
// 	border: none;
// 	transition: transform 0.3s ease;
// 	will-change: transform;
// 	backface-visibility: hidden;
// 	cursor: pointer;

// 	&:hover {
// 		transform: scale(1.05);
// 	}
// `;

// export const HereIcon = styled.img.attrs({ src: ArrowImage, alt: "Arrow Icon" })`
// 	width: min(3vw, 3vh);
// 	height: min(3vw, 3vh);
// 	position: relative;
// 	left: 5%;
// 	animation: ${swing} ease-in-out 1s infinite;
// 	user-select: none;
// `;
