import React from "react";
import StarCanvas from "./StarCanvas";
import * as Style from "../../../styles/Home.styled";

const Home: React.FC = () => (
	<Style.Container>
		<StarCanvas />
		<Style.IntroText>
			앞으로 나아가는 발걸음을 멈추지 않는{"\n"}
			프론트엔드 개발자 지망생, 박승원입니다.
		</Style.IntroText>
		<Style.Earth />
	</Style.Container>
);

export default Home;
