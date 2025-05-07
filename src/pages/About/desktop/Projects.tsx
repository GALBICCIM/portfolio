import React, { useState } from "react";

import { useRelativeFontSize } from "hooks";

import ProjectModal from "components/modal/ProjectModal";

import * as Style from "styles/desktop/Projects.styled";
import { Text, Title, Card } from "styles/desktop/Global.styled";

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
			<Card vw={93}>
				<Title rem={titleFontSize} font="NSansBold">
					지금껏 이런 것들을 만들었어요.
				</Title>
				<Style.Wrapper>
					{PROJECT_LIST.map((item, index) => (
						<div key={index}>
							<div>
								<Style.TitleButton>
									<Text rem={titleFontSize} font="NSansBold" style={{ transform: "translateZ(0)", WebkitFontSmoothing: "antialiased" }} onClick={() => openModal(item)}>
										{item.label}
									</Text>
								</Style.TitleButton>
								<Style.HereIcon />
							</div>
							<Text rem={contentFontSize} font="NSansRegular">
								{item.content}
							</Text>
						</div>
					))}
				</Style.Wrapper>
			</Card>
			<ProjectModal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
		</Style.Container>
	);
};

export default Projects;
