import styled from "styled-components";

import { lightPurple } from "constants/Colors";

interface GlobalType {
	rem?: number;
	font?: string;
	color?: string;
	vw?: number;
}

export const Text = styled.p<GlobalType>`
	font-size: ${(props) => props.rem}rem;
	font-family: ${(props) => props.font};
	color: ${(props) => props.color || "black"};
	white-space: pre-line;
	user-select: none;
	margin: 0;
`;

export const Title = styled.p<GlobalType>`
	font-size: ${(props) => props.rem}rem;
	font-family: ${(props) => props.font};
	display: flex;
	justify-content: center;
	color: black;
	margin: 4vh 0;
	user-select: none;
`;

export const Card = styled.div<GlobalType>`
	width: ${(props) => props.vw}vw;
	height: 85vh;
	background-color: ${lightPurple};
	border-radius: 30px;
`;
