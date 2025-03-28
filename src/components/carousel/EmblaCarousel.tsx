import React, { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Embla, EmblaViewport, EmblaContainer } from "components/carousel/embla.styled";
import Home from "components/pages/Home/Home";
import Contribution from "components/pages/About/Contribution";
import Profile from "components/pages/About/Profile";
import Projects from "components/pages/About/Projects";

type PropType = {
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const [selectedIndex, setSelectedIndex] = useState(0);

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
					<div className="embla__slide">
						<Home />
					</div>
					<div className="embla__slide">
						<Profile />
					</div>
					<div className="embla__slide">
						<Contribution />
					</div>
					<div className="embla__slide">
						<Projects />
					</div>
				</EmblaContainer>
			</EmblaViewport>
		</Embla>
	);
};

export default EmblaCarousel;
