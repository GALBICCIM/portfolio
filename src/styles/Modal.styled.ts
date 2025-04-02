const ModalStyle: ReactModal.Styles = {
   overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      width: "100vw",
      height: "100vh",
   },
   content: {
      width: "360px",
      height: "180px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
   },
};

export default ModalStyle;
