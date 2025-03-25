import React from "react";
import * as Style from "styles/Profile.styled";
import { Text } from "styles/Global.styled";

const Profile: React.FC = () => (
	<Style.Container>
		<Style.Card>
			<Text rem={3} color="black">
				인적 사항
			</Text>
		</Style.Card>
		<Style.Card>
			<Text rem={3} color="black">
				자격증 취득 내역
			</Text>
		</Style.Card>
		<Style.Card>
			<Text rem={3} color="black">
				기술 스택
			</Text>
		</Style.Card>
	</Style.Container>
);

export default Profile;
