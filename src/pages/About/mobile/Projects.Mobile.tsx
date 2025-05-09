import React, { useState } from "react";

import * as Style from "styles/mobile/Projects.Mobile.styled";
import { Text, Title, Card } from "styles/mobile/Global.Mobile.styled";
import ProjectModal from "components/modal/ProjectModal";

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
			<Card vw={90} style={{ top: "10.2%", position: "absolute" }}>
				<Title em={1.5} font="NSansBold">
					지금껏 이런 것들을 만들었어요.
				</Title>
				<Style.Wrapper>
					{PROJECT_LIST.map((item, index) => (
						<div key={index}>
							<div>
								<Style.TitleButton>
									<Text
										em={1.4}
										font="NSansBold"
										style={{ transform: "translateZ(0)", WebkitFontSmoothing: "antialiased" }}
										onClick={() => openModal(item)}
									>
										{item.label}
									</Text>
								</Style.TitleButton>
								<Style.HereIcon />
							</div>
							<Text em={1.2} font="NSansRegular">
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

export default ProjectsMobile;
