import React from "react";
import Modal from "react-modal";

import { useRelativeFontSize } from "hooks";

import * as Style from "styles/desktop/Modal.styled";
import { Text, Title } from "styles/desktop/Global.styled";

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

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
	const titleFontSize = useRelativeFontSize(48);
	const descFontSize = useRelativeFontSize(32);

	return (
		<Modal isOpen={isOpen} onRequestClose={onClose} style={Style.ModalStyle}>
			{project && (
				<Style.ModalContent>
					<Style.Header>
						<Style.A href={`https://github.com/GALBICCIM/${project.link}`} target="_blank">
							<Style.GithubIcon />
						</Style.A>
						<Title rem={titleFontSize} font="NSansBold" style={{ margin: "3vh 0" }}>
							{project.label}
						</Title>
						<Style.CloseButton onClick={onClose}>
							<Style.CloseBtnIcon />
						</Style.CloseButton>
					</Style.Header>
					<Text color="gray" font="NSansRegular">
						{project.tag}
					</Text>
					<Style.Hr />
					<Style.TextWrapper>
						{project.description.map((item, index) => (
							<Style.Li>
								<Text rem={descFontSize} font="NSansRegular" key={index} style={{ wordBreak: "break-all" }}>
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

export default ProjectModal;
