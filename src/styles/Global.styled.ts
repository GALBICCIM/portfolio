import styled from "styled-components";

interface TextType {
   size: number;
   color?: string;
}

export const Text = styled.p<TextType>`
   font-size: ${(props) => props.size}px;
   color: ${(props) => props.color || "white"};
   white-space: pre-line;
`;
