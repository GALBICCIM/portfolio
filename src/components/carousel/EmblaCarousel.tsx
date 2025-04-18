import React, { useCallback, useEffect, useState } from "react";
import { usePrevNextButtons } from "hooks/usePrevNextButtons";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { Embla, EmblaViewport, EmblaContainer, EmblaSlide, EmblaButtons } from "styles/Embla.styled";
import { PrevButton, NextButton } from "./EmblaButtons";
import Home from "pages/Home/Home";
import Contribution from "pages/About/Contribution";
import Profile from "pages/About/Profile";
import Projects from "pages/About/Projects";

type PropType = {
   options: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
   const { options } = props;
   const [emblaRef, emblaApi] = useEmblaCarousel(options);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

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
                  <Home selectedIndex={selectedIndex} />
               </EmblaSlide>
               <EmblaSlide className="embla__slide">
                  <Profile />
               </EmblaSlide>
               <EmblaSlide className="embla__slide">
                  <Contribution />
               </EmblaSlide>
               <EmblaSlide className="embla__slide">
                  <Projects />
               </EmblaSlide>
            </EmblaContainer>
         </EmblaViewport>
         <EmblaButtons>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
         </EmblaButtons>
      </Embla>
   );
};

export default EmblaCarousel;
