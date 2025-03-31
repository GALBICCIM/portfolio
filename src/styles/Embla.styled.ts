import styled from "styled-components";

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
	width: min(6.5vw, 6.5vh);
	height: min(6.5vw, 6.5vh);
	cursor: pointer;
	user-select: none;
	border: 4px solid #585858;
	border-radius: 100px;
	background-color: #241b32;
	color: white;

	&:disabled {
		opacity: 0;
		cursor: default;
	}
`;
