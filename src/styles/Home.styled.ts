import styled, { keyframes } from "styled-components";
import earthImage from "../assets/earth.svg";

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
   background-color: transparent;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const IntroText = styled.p`
   font-size: 64px;
   color: white;
   white-space: pre-line;
   text-align: center;
   position: absolute;
   top: 15%;
`;

export const Earth = styled.img.attrs({ src: earthImage, alt: "Earth Image" })`
   width: 180%;
   height: 180%;
   position: relative;
   top: 85%;
   animation: ${rotaion} infinite 30s linear;
   user-select: none;
`;
