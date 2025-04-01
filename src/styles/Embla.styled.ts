import styled from "styled-components";
import ArrowImage from "assets/arrow.svg";

export const EmblaViewport = styled.div`
   pointer-events: none;
   overflow: hidden;
`;

export const EmblaContainer = styled.div`
   display: flex;
`;

export const EmblaSlide = styled.div`
   transform: translate3d(0, 0, 0);
`;

export const EmblaButtons = styled.div`
   width: 97vw;
   display: flex;
   justify-content: space-between;
   position: absolute;
   left: 1.5vw;
   bottom: 1%;
`;

export const EmblaButton = styled.button`
   width: min(14.5vw, 14.5vh);
   height: min(5.5vw, 5.5vh);
   opacity: 0.6;
   display: flex;
   align-items: center;
   justify-content: space-around;
   cursor: pointer;
   user-select: none;
   border: 3px solid #c3c3c3;
   border-radius: 100px;
   background-color: white;
   box-shadow: inset 0 0 7px;

   &:disabled {
      opacity: 0;
      cursor: default;
   }
`;

export const BtnArrow = styled.img.attrs({ src: ArrowImage, alt: "Arrow Icon" })`
   width: min(3vw, 3vh);
   height: min(3vw, 3vh);
   user-select: none;
`;
