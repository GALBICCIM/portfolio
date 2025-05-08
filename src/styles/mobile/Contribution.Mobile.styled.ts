import styled from "styled-components";

import { deepPurple } from "constants/Colors";

export const Container = styled.div`
	width: 100vw;
	height: 95dvh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10vh;
	gap: 15vh;
`;

export const TextWrapper = styled.div`
	display: flex;
	gap: 1.5vw;
`;

export const Symbol = styled.div`
	width: min(10vw, 10vh);
	height: min(10vw, 10vh);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	background-color: ${deepPurple};
	margin-left: 2rem;
	user-select: none;
`;
