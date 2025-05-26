import styled, { keyframes } from "styled-components";

import { whiteColor } from "constants/Colors";
import GithubImage from "assets/icons/github.svg";
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
		borderRadius: "20px",
		background: "none",
		padding: "0",
		inset: "0",
	},
};

export const ModalContent = styled.div`
	width: 70vw;
	height: auto;
	padding: 0 2vw;
	background-color: ${whiteColor};
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -60%);
	border: none;
	border-radius: 20px;
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
	width: min(3.5vw, 3.5vh);
	height: min(3.5vw, 3.5vh);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	background-color: transparent;
	border: none;
	border-radius: 100px;
	transform-origin: center center;
	transition: transform 0.2s ease;
	will-change: transform;
	position: relative;
	left: 8%;
`;

export const CloseBtnIcon = styled.img.attrs({ src: CloseImage, alt: "Close Icon" })`
	width: 100%;
	height: 100%;
	opacity: 0.7;
	user-select: none;
	transform: translateZ(0);
	backface-visibility: hidden;

	&:hover {
		opacity: 1;
	}
`;

export const A = styled.a`
	text-decoration: none;
	width: min(5vw, 5vh);
	height: min(5vw, 5vh);
	cursor: pointer;
	position: relative;
	right: 4%;
`;

export const GithubIcon = styled.img.attrs({ src: GithubImage, alt: "Github" })`
	width: 100%;
	height: 100%;
	user-select: none;
	transform: translateZ(0);
	backface-visibility: hidden;
`;

export const Hr = styled.hr`
	width: 100%;
	height: 1.5px;
	margin-bottom: 5vh;
	background-color: black;
	border: none;
`;
