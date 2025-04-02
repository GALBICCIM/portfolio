import React from "react";
import { useRelativeFontSize } from "hooks/useRelativeFontSize";
import * as Style from "styles/Projects.styled";
import { Text, Title, Card } from "styles/Global.styled";
import { PROJECT_LIST } from "constants/ProjectContent";

const Projects: React.FC = () => {
	const titleFontSize = useRelativeFontSize(48);
	const contentFontSize = useRelativeFontSize(26);

	return (
		<Style.Container>
			<Card vw={93}>
				<Title rem={titleFontSize} font="NSansBold">
					지금껏 이런 것들을 만들었어요.
				</Title>
				<Style.Wrapper>
					{PROJECT_LIST.map((item, index) => (
						<div key={index}>
							<Text rem={titleFontSize} font="NSansBold">
								{item.label}
							</Text>
							<Text rem={contentFontSize} font="NSansRegular">
								{item.content}
							</Text>
						</div>
					))}
				</Style.Wrapper>
			</Card>
		</Style.Container>
	);
};

export default Projects;
