import { useState } from "react";
import {
  useLocationsContext,
  useLocationsActionsContext,
} from "../../provider/locations/locations-Context";
import Map from "../map/map";
import { RiCloseLine } from "react-icons/ri";
import { ItemType } from "../../types/data-type";
import "./modal.css";

const Modal = ({ item }: ItemType) => {
  const { status } = useLocationsContext();
  const { addLocation, closeModal, editLocation } =
    useLocationsActionsContext();

  const [location, setLocation] = useState(
    status === "edit" ? item : { title: "", type: "Hospital", description: "" }
  );

  const handleChange = (value: string, id: string) => {
    setLocation({ ...location, [id]: value });
  };

  const handleShareButton = () => {
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
          <div className="modal__form__map">
            <form>
              <label className="modal__form--title">
                Location Title:
                <input
                  id="title"
                  type="text"
                  value={location?.title}
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
                  <option value="Hospital">Hospital</option>
                  <option value="Bank">Bank</option>
                  <option value="Educational">Educational</option>
                </select>
              </label>
              <label className="modal__form--description">
                Location Description:
                <textarea
                  id="description"
                  name="location description"
                  value={location?.description}
                  onChange={(event) =>
                    handleChange(
                      event.currentTarget.value,
                      event.currentTarget.id
                    )
                  }
                />
              </label>
            </form>
            <div className="modal__map">
              <Map lat={location?.lat} lng={location?.lng} />
            </div>
          </div>
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
            onClick={() => handleShareButton()}>
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
