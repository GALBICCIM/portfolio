import styled, { keyframes } from "styled-components";
import CloseImage from "assets/close.svg";

const fadeIn = keyframes`
	from {
    opacity: 0;
    transform: translate(-50%, -70%);
  	}
  	to {
   	opacity: 1;
   	transform: translate(-50%, -60%);
  	}
`;

export const ModalStyle: ReactModal.Styles = {
   overlay: {
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
   },
   content: {
      border: "none",
      background: "none",
   },
};

export const ModalContent = styled.div`
   width: 70vw;
   height: 65vh;
   padding: 0 2vw;
   background-color: #e6c7ff;
   position: absolute;
   top: 60%;
   left: 50%;
   transform: translate(-50%, -60%);
   border: none;
   border-radius: 2vh;
   box-shadow: 2px 2px 9.25vh rgba(0, 0, 0, 0.25);
   overflow: hidden;
   opacity: 0;
   animation: ${fadeIn} 0.3s ease-out forwards;
`;

export const Header = styled.header`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const TextWrapper = styled.ul`
   padding: 0;
`;

export const Li = styled.li`
   list-style: none;
`;

export const CloseButton = styled.button`
   width: min(3vw, 3vh);
   height: min(3vw, 3vh);
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0;
   background-color: transparent;
   border: none;
   border-radius: 100px;
   transform-origin: center center;
   transition: all 0.2s ease;
   cursor: pointer;
   position: relative;
   right: -30%;

   &:hover {
      transform: scale(1.1);
   }
`;

export const CloseBtnIcon = styled.img.attrs({ src: CloseImage, alt: "Close Icon" })`
   width: 100%;
   height: 100%;
   opacity: 0.7;
   user-select: none;
   position: absolute;

   &:hover {
      opacity: 1;
   }
`;

export const Hr = styled.hr`
   width: 100%;
   height: 1.5px;
   margin-bottom: 5vh;
   background-color: black;
   border: none;
`;
