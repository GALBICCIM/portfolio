import React from "react";

import { useRelativeFontSize } from "hooks/useRelativeFontSize";

import { Embla, EmblaViewport, EmblaContainer, EmblaSlide } from "styles/Embla.styled";
import useEmblaCarousel from "embla-carousel-react";

import * as Style from "styles/mobile/Profile.Mobile.styled";
import { Title, Text, Card } from "styles/Global.styled";

import { GAP_LIST, TITLE_LIST, INFO_LIST, CERT_LIST, TECH_LIST } from "constants/ProfileContent";

const ProfileMobile: React.FC = () => {
	const [emblaRef] = useEmblaCarousel();
	const titleFontSize = useRelativeFontSize(160);
	const labelFontSize = useRelativeFontSize(130);
	const contentFontSize = useRelativeFontSize(110);
	const smallContentFontSize = useRelativeFontSize(80);

	return (
		<Embla>
			<EmblaViewport ref={emblaRef}>
				<EmblaContainer>
					{TITLE_LIST.map((item, index) => (
						<EmblaSlide className="embla__slide" key={index}>
							<Style.Container>
								<Card vw={90}>
									<Title rem={titleFontSize} font="NSansBold">
										{item}
									</Title>
									<Style.TextWrapper gap={GAP_LIST[index]}>
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
																	<Text rem={smallContentFontSize} font="NSansRegular" style={{ marginLeft: "12px" }}>
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
							</Style.Container>
						</EmblaSlide>
					))}
				</EmblaContainer>
			</EmblaViewport>
		</Embla>
	);
};

export default ProfileMobile;
