import styled from "styled-components";
import ArrowImage from "assets/arrow.svg";

export const EmblaViewport = styled.div`
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
   bottom: 0.5%;
`;

export const EmblaButton = styled.button`
   width: min(16.5vw, 16.5vh);
   height: min(6.5vw, 6.5vh);
   opacity: 0.8;
   display: flex;
   align-items: center;
   justify-content: space-around;
   cursor: pointer;
   user-select: none;
   border: 3px solid #cab0df;
   border-radius: 100px;
   background-color: #e6c7ff;
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
