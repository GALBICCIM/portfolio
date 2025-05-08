import React, { useCallback, useEffect, useState } from "react";

import { usePrevNextButtons, useMediaQuery } from "hooks";
import useEmblaCarousel from "embla-carousel-react";

import { EmblaOptionsType } from "embla-carousel";

import { Embla, EmblaViewport, EmblaContainer, EmblaSlide, EmblaButtons } from "styles/Embla.styled";
import { DesktopPrevButton, DesktopNextButton, MobilePrevButton, MobileNextButton } from "./EmblaButtons";
import { Home, HomeMobile } from "pages/Home";
import { Profile, ProfileMobile, Projects, ProjectsMobile } from "pages/About";

type PropType = {
	options: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
	const isMobile = useMediaQuery("(max-width: 768px)");

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSelect);
		onSelect();
	}, [emblaApi, onSelect]);

	return (
		<Embla>
			<EmblaViewport ref={emblaRef}>
				<EmblaContainer>
					<EmblaSlide className="embla__slide">
						{isMobile ? <HomeMobile selectedIndex={selectedIndex} /> : <Home selectedIndex={selectedIndex} />}
					</EmblaSlide>
					<EmblaSlide className="embla__slide">{isMobile ? <ProfileMobile /> : <Profile />}</EmblaSlide>
					<EmblaSlide className="embla__slide">{isMobile ? <ProjectsMobile /> : <Projects />}</EmblaSlide>
				</EmblaContainer>
			</EmblaViewport>
			<EmblaButtons>
				{isMobile ? (
					<MobilePrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				) : (
					<DesktopPrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
				)}
				{isMobile ? (
					<MobileNextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				) : (
					<DesktopNextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				)}
			</EmblaButtons>
		</Embla>
	);
};

export default EmblaCarousel;
