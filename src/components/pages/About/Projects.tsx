import React, { use, useState } from "react";
import { useRelativeFontSize } from "hooks/useRelativeFontSize";
import * as Style from "styles/Projects.styled";
import { Text, Title, Card } from "styles/Global.styled";
import { PROJECT_LIST } from "constants/ProjectContent";
import ProjectModal from "components/modal/ProjectModal";

interface ProjectType {
   label: string;
   content: string;
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
                     <Text rem={titleFontSize} font="NSansBold" onClick={() => openModal(item)}>
                        {item.label}
                     </Text>
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
