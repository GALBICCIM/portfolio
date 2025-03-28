import React from "react";
import StarCanvas from "./StarCanvas";
import * as Style from "styles/Home.styled";
import useRelativeFontSize from "hooks/useRelativeFontSize";

const Home: React.FC = () => {
	const regularSize = useRelativeFontSize(56);
	const boldSize = useRelativeFontSize(72);

	return (
		<Style.Container>
			<StarCanvas />
			<Style.TextWrapper>
				<Style.IntroText rem={regularSize} font="HSansRegular">
					앞으로 나아가는 발걸음을 멈추지 않는
				</Style.IntroText>
				<Style.IntroText rem={boldSize} font="HSansBold">
					프론트엔드 개발자 지망생, 박승원입니다.
				</Style.IntroText>
			</Style.TextWrapper>
			<Style.Earth />
		</Style.Container>
	);
};

export default Home;
