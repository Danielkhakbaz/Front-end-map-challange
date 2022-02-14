import { useLocationsActionsContext } from "../../provider/locations/locations-Context";
import Form from "../form/form";
import { RiCloseLine } from "react-icons/ri";
import "./modal.css";

const Modal = () => {
  const { closeModal } = useLocationsActionsContext();

  return (
    <>
      <div className="modal--background" onClick={() => closeModal(false)} />
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__heading">Share Location</h2>
          <button
            className="modal__button--close"
            onClick={() => closeModal(false)}>
            <RiCloseLine />
          </button>
        </div>
        <Form />
      </div>
    </>
  );
};

export default Modal;
