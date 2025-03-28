import React from "react";
import useRelativeFontSize from "hooks/useRelativeFontSize";
import * as Style from "styles/Profile.styled";
import { Title } from "styles/Global.styled";
import { TITLE_LIST } from "constants/CardContent";

const Profile: React.FC = () => {
	const titleSize = useRelativeFontSize(48);

	return (
		<Style.Container>
			{TITLE_LIST.map((item, index) => {
				return (
					<Style.Card>
						<Title rem={titleSize} font="NSansBold">
							{item}
						</Title>
					</Style.Card>
				);
			})}
		</Style.Container>
	);
};

export default Profile;
