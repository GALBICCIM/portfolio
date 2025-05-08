import React from "react";

import { useDotButton } from "hooks";
import useEmblaCarousel from "embla-carousel-react";

import * as Style from "styles/mobile/Profile.Mobile.styled";
import { Embla, EmblaViewport, EmblaContainer, EmblaSlide, EmblaDots } from "styles/Embla.styled";
import DotButton from "components/carousel/EmblaDotButtons";
import { Title, Text, Card } from "styles/mobile/Global.Mobile.styled";

import { GAP_LIST_MOBILE, TITLE_LIST, INFO_LIST, CERT_LIST, TECH_LIST } from "constants/ProfileContent";

const ProfileMobile: React.FC = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

	return (
		<Embla>
			<EmblaDots>
				{scrollSnaps.map((_, index) => (
					<DotButton
						key={index}
						onClick={() => onDotButtonClick(index)}
						className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
					/>
				))}
			</EmblaDots>
			<EmblaViewport ref={emblaRef}>
				<EmblaContainer>
					{TITLE_LIST.map((item, index) => (
						<EmblaSlide className="embla__slide" key={index}>
							<Style.Container>
								<Card vw={90}>
									<Title em={2} font="NSansBold">
										{item}
									</Title>
									<Style.TextWrapper gap={GAP_LIST_MOBILE[index]}>
										{index === 0
											? INFO_LIST.map((info, infoIndex) => (
													<div key={infoIndex}>
														<Text em={1.3} font="NSansBold">
															{info.label}
														</Text>
														{Array.isArray(info.value) ? (
															info.value.map((infoValueItem) => (
																<div>
																	<Text em={1.2} font="NSansRegular">
																		{infoValueItem.text}
																	</Text>
																	<Text em={1} font="NSansRegular" style={{ marginLeft: "12px" }}>
																		{infoValueItem.date}
																	</Text>
																</div>
															))
														) : (
															<Text em={1.2} font="NSansRegular">
																{info.value}
															</Text>
														)}
													</div>
											  ))
											: index === 1
											? CERT_LIST.map((cert, certIndex) => (
													<div key={certIndex}>
														<Text em={1.3} font="NSansBold">
															{cert.label}
														</Text>
														<Text em={1} font="NSansRegular" style={{ marginLeft: "16px" }}>
															{cert.date}
														</Text>
													</div>
											  ))
											: TECH_LIST.map((tech, techIndex) => (
													<div key={techIndex}>
														<Text em={1.3} font="NSansBold">
															{tech.label}
														</Text>
														{tech.value.map((techValueItem) => (
															<Style.Wrapper>
																<Style.TechIcon imgPath={require(`assets/icons/${techValueItem.path}`)} />
																<Text em={0.8} font="NSansRegular">
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
