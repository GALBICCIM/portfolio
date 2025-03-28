import { useState, useEffect } from "react";

const useRelativeFontSize = (baseSize: number, baseWidth: number = 1920) => {
	const [fontSize, setFontSize] = useState(baseSize);

	useEffect(() => {
		const updateFontSize = () => {
			const currentWidth = window.innerWidth;
			const newFontSize = (currentWidth / baseWidth) * baseSize;
			setFontSize(newFontSize / 16); // rem
		};

		updateFontSize();
		window.addEventListener("resize", updateFontSize);

		return () => {
			window.removeEventListener("resize", updateFontSize);
		};
	}, [baseSize, baseWidth]);

	return fontSize;
};

export default useRelativeFontSize;
