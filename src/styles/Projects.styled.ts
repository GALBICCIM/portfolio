import styled from "styled-components";

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
