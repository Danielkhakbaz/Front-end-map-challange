import { useLocationsActionsContext } from "../../provider/locations/locations-Context";
import { RiCloseLine } from "react-icons/ri";
import "./modal.css";

const Modal = () => {
  const { closeModal } = useLocationsActionsContext();

  return (
    <>
      <div className="darkBG" onClick={() => closeModal(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div>
          <button className="closeBtn" onClick={() => closeModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            Are you sure you want to delete the item?
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="deleteBtn" onClick={() => closeModal(false)}>
                Delete
              </button>
              <button className="cancelBtn" onClick={() => closeModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
