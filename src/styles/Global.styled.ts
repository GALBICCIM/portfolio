import styled from "styled-components";

interface TextType {
   rem: number;
   font: string;
}

export const Text = styled.p<TextType>`
   font-size: ${(props) => props.rem}rem;
   font-family: ${(props) => props.font};
   color: black;
   white-space: pre-line;
   margin: 0;
`;

export const Title = styled.p<TextType>`
   font-size: ${(props) => props.rem}rem;
   font-family: ${(props) => props.font};
   display: flex;
   justify-content: center;
   color: black;
   margin: 4vh 0;
`;
