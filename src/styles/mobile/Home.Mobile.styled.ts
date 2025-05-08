import styled, { keyframes } from "styled-components";

import { deepGrayColor } from "constants/Colors";
import earthImage from "assets/earth.svg";

interface IntroTextType {
	em: number;
	font: string;
}

const rotaion = keyframes`
   from {
      transform: rotate(0deg);
   }
   to {
      transform: rotate(360deg);
   }
`;

export const Container = styled.div`
	width: 100vw;
	height: 100dvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

export const TextWrapper = styled.div`
	background-color: ${deepGrayColor};
	display: flex;
	flex-direction: column;
	gap: 1.5vh;
	text-align: left;
	position: absolute;
	top: 15%;
	left: 10px;
`;

export const IntroText = styled.p<IntroTextType>`
	font-size: ${(props) => props.em}em;
	font-family: ${(props) => props.font};
	user-select: none;
	color: white;
	margin: 0;
`;

export const Earth = styled.img.attrs({ src: earthImage, alt: "Earth Image" })`
	width: 150%;
	max-width: 800px;
	height: 150%;
	position: absolute;
	top: 20%;
	right: 5%;
	animation: ${rotaion} infinite 30s linear;
	user-select: none;
`;
