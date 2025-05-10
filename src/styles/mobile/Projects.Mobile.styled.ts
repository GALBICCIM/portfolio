import styled from "styled-components";

import { whiteColor } from "constants/Colors";

export const Container = styled.div`
	width: 100vw;
`;

export const ProjectDiv = styled.div`
	width: 70vw;
	height: auto;
	background-color: ${whiteColor};
	border-radius: 20px;
	padding: 20px 30px;
	cursor: pointer;
`;

export const Wrapper = styled.div`
	display: grid;
	justify-content: center;
	grid-template-columns: repeat(1, auto);
	row-gap: 6vh;
	margin: 10vh 0;
`;

export const TextWrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	row-gap: 20px;
`;
