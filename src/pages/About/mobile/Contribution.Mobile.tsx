import React from "react";

import { useRelativeFontSize } from "hooks";

import * as Style from "styles/mobile/Contribution.Mobile.styled";
import { Title, Text, Card } from "styles/mobile/Global.Mobile.styled";

import { CONTRIBUTION_OBJ } from "constants/ContributionContent";

const ContributionMobile: React.FC = () => {
	const titleFontSize = useRelativeFontSize(48);
	const contentFontSize = useRelativeFontSize(32);

	return (
		<Style.Container>
			<Card vw={90}>
				<Title em={1.3} font="NSansBold">
					저는 학교에 이러한 기여를 했어요.
				</Title>
				<Style.Wrapper>
					{CONTRIBUTION_OBJ.subTitle.map((item, index) => (
						<Style.TextWrapper>
							<Style.Symbol>
								<Text em={titleFontSize} font="NSansBold" color="white">
									{index + 1}
								</Text>
							</Style.Symbol>
							<div>
								<Text em={titleFontSize} font="NSansBold">
									{item}
								</Text>
								{index === 0 ? (
									<Text em={contentFontSize} font="NSansRegular">
										{CONTRIBUTION_OBJ.content[index][index]}
										{"\n"}
										{CONTRIBUTION_OBJ.content[index][index + 1]}
									</Text>
								) : (
									<Text em={contentFontSize} font="NSansRegular">
										{CONTRIBUTION_OBJ.content[index][index - 1]}
										{"\n"}
										{CONTRIBUTION_OBJ.content[index][index]}
									</Text>
								)}
							</div>
						</Style.TextWrapper>
					))}
				</Style.Wrapper>
			</Card>
		</Style.Container>
	);
};

export default ContributionMobile;
