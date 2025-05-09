import React, { useState } from "react";

import { useRelativeFontSize } from "hooks";

import * as Style from "styles/desktop/Projects.styled";
import { Text, Title } from "styles/desktop/Global.styled";
import ProjectModal from "components/modal/desktop/ProjectModal";

import { PROJECT_LIST } from "constants/ProjectContent";

interface ProjectType {
	label: string;
	content: string;
	link: string;
	tag: string;
	description: string[];
}

const Projects: React.FC = () => {
	const [isOpen, setOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
	const titleFontSize = useRelativeFontSize(48);
	const contentFontSize = useRelativeFontSize(26);
	const guideFontSize = useRelativeFontSize(18);

	const openModal = (project: ProjectType) => {
		setSelectedProject(project);
		setOpen(true);
	};

	const closeModal = () => {
		setOpen(false);
		setSelectedProject(null);
	};

	return (
		<Style.Container>
			<Title rem={titleFontSize} font="NSansBold" color="white">
				지금껏 이런 것들을 만들었어요.
			</Title>
			<Style.Wrapper>
				{PROJECT_LIST.map((item, index) => (
					<div>
						<Style.ProjectDiv key={index} onClick={() => openModal(item)}>
							<Style.TextWrapper>
								<Text rem={titleFontSize} font="NSansBold">
									{item.label}
								</Text>
								<Text rem={contentFontSize} font="NSansRegular">
									{item.content}
								</Text>
							</Style.TextWrapper>
						</Style.ProjectDiv>
						<Text rem={guideFontSize} font="NSansRegular" color="gray">
							Click to desc
						</Text>
					</div>
				))}
			</Style.Wrapper>
			<ProjectModal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
		</Style.Container>
	);
};

export default Projects;
