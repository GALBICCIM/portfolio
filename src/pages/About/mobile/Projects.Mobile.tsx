import React, { useState } from "react";

import * as Style from "styles/mobile/Projects.Mobile.styled";
import { Text, Title } from "styles/mobile/Global.Mobile.styled";
import ProjectModalMobile from "components/modal/mobile/ProjectModal.Mobile";

import { PROJECT_LIST } from "constants/ProjectContent";

interface ProjectType {
	label: string;
	content: string;
	link: string;
	tag: string;
	description: string[];
}

const ProjectsMobile: React.FC = () => {
	const [isOpen, setOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

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
			<Title em={1.5} font="NSansBold" color="white">
				지금껏 이런 것들을 만들었어요.
			</Title>
			<Style.Wrapper>
				{PROJECT_LIST.map((item, index) => (
					<div>
						<Style.ProjectDiv key={index} onClick={() => openModal(item)}>
							<Style.TextWrapper>
								<Text em={1.4} font="NSansBold">
									{item.label}
								</Text>
								<Text em={1.2} font="NSansRegular">
									{item.content}
								</Text>
							</Style.TextWrapper>
						</Style.ProjectDiv>
						<Text em={1} font="NSansRegular" color="gray">
							Click to desc
						</Text>
					</div>
				))}
			</Style.Wrapper>
			<ProjectModalMobile isOpen={isOpen} onClose={closeModal} project={selectedProject} />
		</Style.Container>
	);
};

export default ProjectsMobile;
