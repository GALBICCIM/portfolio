import styled, { keyframes } from "styled-components";

import { deepPurple } from "constants/Colors";
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
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const TextWrapper = styled.div`
	background-color: ${deepPurple};
	text-align: center;
	position: absolute;
	top: 22%;
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
	height: 150%;
	position: relative;
	top: 35%;
	right: 25%;
	animation: ${rotaion} infinite 30s linear;
	user-select: none;
`;
