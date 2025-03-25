import styled from "styled-components";

interface TextType {
	rem: number;
	color?: string;
}

export const Text = styled.p<TextType>`
	font-size: ${(props) => props.rem}rem;
	color: ${(props) => props.color || "white"};
	white-space: pre-line;
`;
