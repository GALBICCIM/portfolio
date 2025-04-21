import React from "react";
import { useRelativeFontSize } from "hooks/useRelativeFontSize";
import * as Style from "styles/Profile.styled";
import { Title, Text, Card } from "styles/Global.styled";
import { TITLE_LIST, INFO_LIST, CERT_LIST, TECH_LIST } from "constants/ProfileContent";

const Profile: React.FC = () => {
	const titleFontSize = useRelativeFontSize(48);
	const labelFontSize = useRelativeFontSize(38);
	const contentFontSize = useRelativeFontSize(34);
	const smallContentFontSize = useRelativeFontSize(20);

	return (
		<Style.Container>
			{TITLE_LIST.map((item, index) => {
				return (
					<Card vw={30} key={index}>
						<Title rem={titleFontSize} font="NSansBold">
							{item}
						</Title>
						<Style.TextWrapper gap={index === 0 ? 2 : index === 1 ? 8 : 1}>
							{index === 0
								? INFO_LIST.map((info, infoIndex) => (
										<div key={infoIndex}>
											<Text rem={labelFontSize} font="NSansBold">
												{info.label}
											</Text>
											{Array.isArray(info.value) ? (
												info.value.map((infoValueItem) => (
													<div>
														<Text rem={contentFontSize} font="NSansRegular">
															{infoValueItem.text}
														</Text>
														<Text rem={smallContentFontSize} font="NSansRegular" style={{ marginLeft: "16px" }}>
															{infoValueItem.date}
														</Text>
													</div>
												))
											) : (
												<Text rem={contentFontSize} font="NSansRegular">
													{info.value}
												</Text>
											)}
										</div>
								  ))
								: index === 1
								? CERT_LIST.map((cert, certIndex) => (
										<div key={certIndex}>
											<Text rem={labelFontSize} font="NSansBold">
												{cert.label}
											</Text>
											<Text rem={smallContentFontSize} font="NSansRegular" style={{ marginLeft: "16px" }}>
												{cert.date}
											</Text>
										</div>
								  ))
								: TECH_LIST.map((tech, techIndex) => (
										<div key={techIndex}>
											<Text rem={labelFontSize} font="NSansBold">
												{tech.label}
											</Text>
											{tech.value.map((techValueItem) => (
												<Style.Wrapper>
													<Style.TechIcon imgPath={require(`assets/icons/${techValueItem.path}`)} />
													<Text rem={smallContentFontSize} font="NSansRegular">
														{techValueItem.text}
													</Text>
												</Style.Wrapper>
											))}
										</div>
								  ))}
						</Style.TextWrapper>
					</Card>
				);
			})}
		</Style.Container>
	);
};

export default Profile;
