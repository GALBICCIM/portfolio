import styled from "styled-components";

import { whiteColor } from "constants/Colors";

interface GlobalType {
	em?: number;
	font?: string;
	color?: string;
	vw?: number;
}

export const Text = styled.p<GlobalType>`
	font-size: ${(props) => props.em}em;
	font-family: ${(props) => props.font};
	color: ${(props) => props.color || "black"};
	white-space: pre-line;
	user-select: none;
	margin: 0;
`;

export const Title = styled.p<GlobalType>`
	font-size: ${(props) => props.em}em;
	font-family: ${(props) => props.font};
	display: flex;
	justify-content: center;
	color: ${(props) => props.color || "black"};
	margin: 3vh 0;
	user-select: none;
`;

export const Card = styled.div<GlobalType>`
	width: ${(props) => props.vw}vw;
	height: 80dvh;
	background-color: ${whiteColor};
	border-radius: 30px;
`;
