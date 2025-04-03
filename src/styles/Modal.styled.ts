import styled from "styled-components";
import CloseImage from "assets/close.svg";

export const ModalStyle: ReactModal.Styles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		width: "100vw",
		height: "100vh"
	},
	content: {
		width: "70vw",
		height: "65vh",
		padding: "0 2vw",
		backgroundColor: "#e6c7ff",
		position: "absolute",
		top: "60%",
		left: "50%",
		transform: "translate(-50%, -60%)",
		border: "none",
		borderRadius: "2vh",
		boxShadow: "2px 2px 9.25vh rgba(0, 0, 0, 0.25)",
		overflow: "hidden"
	}
};

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const TextWrapper = styled.div``;

export const CloseButton = styled.button`
	width: min(5vw, 5vh);
	height: min(5vw, 5vh);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	background-color: transparent;
	border: none;
	border-radius: 100px;
	transition: all 0.5s ease;
	cursor: pointer;
	position: relative;
	right: -30%;

	&:hover {
		transform: scale(1.1);
	}
`;

export const closeBtnIcon = styled.img.attrs({ src: CloseImage, alt: "Close Icon" })`
	width: min(3vw, 3vh);
	height: min(3vw, 3vh);
	opacity: 0.7;
	user-select: none;

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
