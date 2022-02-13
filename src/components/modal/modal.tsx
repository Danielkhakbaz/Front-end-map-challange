import { useState } from "react";
import {
  useLocationsContext,
  useLocationsActionsContext,
} from "../../provider/locations/locations-Context";
import { RiCloseLine } from "react-icons/ri";
import "./modal.css";

type ModalProps = {
  item?: any;
};

const Modal = ({ item }: ModalProps) => {
  const options = [
    { value: "Hospital" },
    { value: "Bank" },
    { value: "Educational" },
  ];
  const { status } = useLocationsContext();

  const [location, setLocation] = useState(
    status === "edit" ? item : { title: "", type: "Hospital", description: "" }
  );

  const { addLocation, closeModal, editLocation } =
    useLocationsActionsContext();

  const handleChange = (value: string, id: string) => {
    setLocation({ ...location, [id]: value });
  };

  const handleClick = () => {
    status === "add" ? addLocation(location) : editLocation(location);
    closeModal();
  };

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
        <div className="modal__form">
          <form>
            <label className="modal__form--title">
              Location Title:
              <input
                id="title"
                type="text"
                value={location.title}
                onChange={(event) =>
                  handleChange(
                    event.currentTarget.value,
                    event.currentTarget.id
                  )
                }
              />
            </label>
            <label className="modal__form--type">
              Location Type:
              <select
                id="type"
                onChange={(event) =>
                  handleChange(
                    event.currentTarget.value,
                    event.currentTarget.id
                  )
                }>
                {options.map((option) => (
                  <option value={option.value} key={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
            </label>
            <label className="modal__form--description">
              Location Description:
              <textarea
                id="description"
                name="location description"
                value={location.description}
                onChange={(event) =>
                  handleChange(
                    event.currentTarget.value,
                    event.currentTarget.id
                  )
                }
              />
            </label>
          </form>
          <div className="modal__map">Map</div>
        </div>
        <hr />
        <div className="modal__actions">
          <button
            className="modal__button modal__button--cancel"
            onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button
            className="modal__button modal__button--share"
            onClick={() => handleClick()}>
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
