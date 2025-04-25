import React, { ComponentPropsWithRef } from "react";

import { EmblaDot } from "styles/Embla.styled";

type PropType = ComponentPropsWithRef<"button">;

const DotButton: React.FC<PropType> = (props) => {
	const { children, ...restProps } = props;

	return (
		<EmblaDot type="button" {...restProps}>
			{children}
		</EmblaDot>
	);
};

export default DotButton;
