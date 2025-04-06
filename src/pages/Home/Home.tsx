import React, { useState, useEffect } from "react";
import { useRelativeFontSize } from "hooks/useRelativeFontSize";
import StarCanvas from "components/StarCanvas";
import * as Style from "styles/Home.styled";
import { INTRO } from "constants/HomeContent";

type HomeProps = {
   selectedIndex: number;
};

const Home: React.FC<HomeProps> = ({ selectedIndex }) => {
   const regularFontSize = useRelativeFontSize(56);
   const boldFontSize = useRelativeFontSize(72);
   const SIZE_LIST = [regularFontSize, boldFontSize];
   const [showEarth, setShowEarth] = useState(true);

   useEffect(() => {
      if (selectedIndex === 0) {
         setShowEarth(true);
      } else {
         const timer = setTimeout(() => {
            setShowEarth(false);
         }, 1000);

         return () => clearTimeout(timer);
      }
   }, [selectedIndex]);

   return (
      <Style.Container>
         <StarCanvas />
         <Style.TextWrapper>
            {INTRO.text.map((item, index) => {
               return (
                  <Style.IntroText rem={SIZE_LIST[index]} font={INTRO.font[index]}>
                     {item}
                  </Style.IntroText>
               );
            })}
         </Style.TextWrapper>
         {showEarth && <Style.Earth />}
      </Style.Container>
   );
};

export default Home;
