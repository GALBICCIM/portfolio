import React from "react";
import Modal from "react-modal";
import ModalStyle from "styles/Modal.styled";

Modal.setAppElement("#root");

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
   project: { label: string; content: string } | null;
}

const ProjectModal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
   return (
      <Modal isOpen={isOpen} onRequestClose={onClose} style={ModalStyle}>
         {project && (
            <>
               <h2>{project.label}</h2>
               <p>{project.content}</p>
               <button onClick={onClose} style={{ marginTop: "10px", padding: "8px 16px" }}>
                  닫기
               </button>
            </>
         )}
      </Modal>
   );
};

export default ProjectModal;
