import React, { ComponentPropsWithRef } from "react";

import { useRelativeFontSize } from "hooks/useRelativeFontSize";

import { Text } from "styles/desktop/Global.styled";
import { EmblaButton, BtnArrow } from "styles/Embla.styled";

type PropType = ComponentPropsWithRef<"button">;

export const DesktopPrevButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;
	const btnTextSize = useRelativeFontSize(24);

	return (
		<EmblaButton className="embla__button--prev" {...restProps}>
			<BtnArrow style={{ transform: "scaleX(-1)" }} />
			<Text rem={btnTextSize} font="NSansBold">
				Prev
			</Text>
			{children}
		</EmblaButton>
	);
};

export const DesktopNextButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;
	const btnTextSize = useRelativeFontSize(24);

	return (
		<EmblaButton className="embla__button--next" {...restProps}>
			<Text rem={btnTextSize} font="NSansBold">
				Next
			</Text>
			<BtnArrow />
			{children}
		</EmblaButton>
	);
};

export const MobilePrevButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<EmblaButton className="embla__button--prev" {...restProps}>
			<BtnArrow style={{ transform: "scaleX(-1)" }} />
			{children}
		</EmblaButton>
	);
};

export const MobileNextButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<EmblaButton className="embla__button--next" {...restProps}>
			<BtnArrow />
			{children}
		</EmblaButton>
	);
};
