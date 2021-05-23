import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ViewRulesModal(modalData: {
  modalIsOpen: boolean;
  content: string;
  closeModal: () => void;
}) {
  return (
    <div>
      <Modal
        isOpen={modalData.modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="modal-content">
          <h2>Hello</h2>
          <div>{modalData.content}</div>
          <button onClick={modalData.closeModal}>close</button>
        </div>
      </Modal>
    </div>
  );
}
