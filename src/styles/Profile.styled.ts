import styled from "styled-components";

interface ProfileType {
	gap?: number;
	imgPath?: string;
}

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 3vw;
`;

export const TextWrapper = styled.div<ProfileType>`
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
	gap: ${(props) => props.gap}vh;

	& > *:first-child {
		margin-top: 0;
	}
	& > *:last-child {
		margin-bottom: 0;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5vw;
`;

export const TechIcon = styled.div<ProfileType>`
	width: min(2.5vw, 2.5vh);
	height: min(2.5vw, 2.5vh);
	background-image: url(${(props) => props.imgPath});
	user-select: none;
`;
