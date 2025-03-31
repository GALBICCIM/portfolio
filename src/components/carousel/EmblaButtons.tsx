import React, { ComponentPropsWithRef } from "react";
import { Text } from "styles/Global.styled";
import { EmblaButton, BtnIcon } from "styles/Embla.styled";
import { useRelativeFontSize } from "hooks/useRelativeFontSize";

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;
	const btnTextSize = useRelativeFontSize(24);

	return (
		<EmblaButton className="embla__button--prev" type="button" {...restProps}>
			<BtnIcon />
			<Text rem={btnTextSize} font="NSansBold" color="white">
				Prev
			</Text>
			{children}
		</EmblaButton>
	);
};

export const NextButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;
	const btnTextSize = useRelativeFontSize(24);

	return (
		<EmblaButton className="embla__button embla__button--next" type="button" {...restProps}>
			<Text rem={btnTextSize} font="NSansBold" color="white">
				Next
			</Text>
			<BtnIcon />
			{children}
		</EmblaButton>
	);
};
