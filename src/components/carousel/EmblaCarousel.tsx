import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Home from "../pages/Home/Home";
import Contribution from "../pages/About/Contribution";
import Profile from "../pages/About/Profile";
import Projects from "../pages/About/Projects";

type PropType = {
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const { options } = props;
	const [emblaRef] = useEmblaCarousel(options);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
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
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
