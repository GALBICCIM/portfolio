import React, { ComponentPropsWithRef } from "react";
import { EmblaButton } from "styles/Embla.styled";

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<EmblaButton className="embla__button--prev" type="button" {...restProps}>
			Prev{children}
		</EmblaButton>
	);
};

export const NextButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<EmblaButton className="embla__button embla__button--next" type="button" {...restProps}>
			Next{children}
		</EmblaButton>
	);
};
