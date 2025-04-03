import React from "react";
import Modal from "react-modal";
import { useRelativeFontSize } from "hooks/useRelativeFontSize";
import * as Style from "styles/Modal.styled";
import { Text, Title } from "styles/Global.styled";

Modal.setAppElement("#root");

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	project: {
		label: string;
		content: string;
		description: string[];
	} | null;
}

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
	const titleFontSize = useRelativeFontSize(48);
	const descFontSize = useRelativeFontSize(32);

	return (
		<Modal isOpen={isOpen} onRequestClose={onClose} style={Style.ModalStyle}>
			{project && (
				<div>
					<Style.Header>
						<Title rem={titleFontSize} font="NSansBold">
							{project.label}
						</Title>
						<Style.CloseButton onClick={onClose}>
							<Style.closeBtnIcon />
						</Style.CloseButton>
					</Style.Header>
					<Style.Hr />
					<Style.TextWrapper>
						{project.description.map((item, index) => (
							<Text rem={descFontSize} font="NSansRegular" key={index}>
								{item}
							</Text>
						))}
					</Style.TextWrapper>
				</div>
			)}
		</Modal>
	);
};

export default ProjectModal;
