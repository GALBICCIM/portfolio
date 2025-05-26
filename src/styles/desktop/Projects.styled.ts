import styled from "styled-components";

import { whiteColor } from "constants/Colors";

export const Container = styled.div`
	width: 100vw;
`;

export const ProjectDiv = styled.div`
	width: 38vw;
	height: 25vh;
	background-color: ${whiteColor};
	border-radius: 20px;
	transition: transform 0.3s ease;
	will-change: transform;
	backface-visibility: hidden;
	padding: 0 30px;

	&:hover {
		transform: scale(1.03);
	}
`;

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(2, auto);
	column-gap: 6vw;
	row-gap: 12vh;
	margin: 10vh 0;
`;

export const TextWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;
