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
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Wrapper = styled.div`
   display: grid;
   justify-content: center;
   grid-template-columns: repeat(2, 31.25vw);
   column-gap: 18vw;
   row-gap: 12vh;
   margin-top: 10vh;
`;

export const TitleButton = styled.button`
   background-color: transparent;
   border: none;
   transition: all 0.3s ease;
   cursor: pointer;

   &:hover {
      transform: scale(1.05);
   }
`;

export const HereIcon = styled.img.attrs({ src: ArrowImage, alt: "Arrow Icon" })`
   width: min(3vw, 3vh);
   height: min(3vw, 3vh);
   position: relative;
   left: 10%;
   animation: ${swing} ease-in-out 1s infinite;
   user-select: none;
`;
