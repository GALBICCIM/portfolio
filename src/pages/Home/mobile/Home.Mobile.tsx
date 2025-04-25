import React, { useState, useEffect } from "react";

import StarCanvas from "components/StarCanvas";

import * as Style from "styles/mobile/Home.Mobile.styled";

import { INTRO_MOBILE } from "constants/HomeContent";

const HomeMobile: React.FC<{ selectedIndex: number }> = ({ selectedIndex }) => {
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
				{INTRO_MOBILE.map(({ text, font, em }) => {
					return (
						<Style.IntroText em={em} font={font}>
							{text}
						</Style.IntroText>
					);
				})}
			</Style.TextWrapper>
			{showEarth && <Style.Earth />}
		</Style.Container>
	);
};

export default HomeMobile;
