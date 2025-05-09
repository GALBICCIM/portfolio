import React from "react";
import Modal from "react-modal";

import * as Style from "styles/mobile/Modal.Mobile";
import { Text, Title } from "styles/mobile/Global.Mobile.styled";

Modal.setAppElement("#root");

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: {
		label: string;
		content: string;
		link: string;
		tag: string;
		description: string[];
	} | null;
}

const ProjectModalMobile: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
	return (
		<Modal isOpen={isOpen} onRequestClose={onClose} style={Style.ModalStyle}>
			{project && (
				<Style.ModalContent>
					<Style.Header>
						<Style.A href={`https://github.com/GALBICCIM/${project.link}`} target="_blank">
							<Style.GithubIcon />
						</Style.A>
						<Title em={1.2} font="NSansBold">
							{project.label}
						</Title>
						<Style.CloseButton onClick={onClose}>
							<Style.CloseBtnIcon />
						</Style.CloseButton>
					</Style.Header>
					<Text em={0.6} font="NSansRegular" color="gray">
						{project.tag}
					</Text>
					<Style.Hr />
					<Style.TextWrapper>
						{project.description.map((item, index) => (
							<Style.Li>
								<Text em={0.8} font="NSansRegular" key={index} style={{ wordBreak: "break-all" }}>
									- {item}
								</Text>
							</Style.Li>
						))}
					</Style.TextWrapper>
				</Style.ModalContent>
			)}
		</Modal>
	);
};

export default ProjectModalMobile;
