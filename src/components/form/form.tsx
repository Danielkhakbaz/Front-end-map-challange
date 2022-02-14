import { useState } from "react";
import {
  useLocationsContext,
  useLocationsActionsContext,
} from "../../provider/locations/locations-Context";
import Map from "../map/map";

const Form = () => {
  const { status, location } = useLocationsContext();
  const { closeModal, addLocation, editLocation } =
    useLocationsActionsContext();

  const [currentLocation, setCurrentLocation] = useState(
    status === "edit"
      ? location
      : { title: "", type: "Hospital", description: "" }
  );

  const handleChange = (value: string, id: string) => {
    setCurrentLocation({ ...currentLocation, [id]: value });
  };

  const handleShareButton = () => {
    status === "add"
      ? addLocation(currentLocation)
      : editLocation(currentLocation);
    closeModal();
  };

  return (
    <>
      <div className="modal__form">
        <div className="modal__form__map">
          <form>
            <label className="modal__form--title">
              Location Title:
              <input
                id="title"
                type="text"
                value={currentLocation?.title}
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
                value={currentLocation?.description}
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
            <Map lat={currentLocation?.lat} lng={currentLocation?.lng} />
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
    </>
  );
};

export default Form;
