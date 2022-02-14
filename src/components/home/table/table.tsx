import { useState } from "react";
import {
  useLocationsContext,
  useLocationsActionsContext,
} from "../../../provider/locations/locations-Context";
import Modal from "../../modal/modal";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./table.css";

const Table = () => {
  const [item, setItem] = useState<Object>({});

  const { isOpen, data } = useLocationsContext();
  const { editLocation, removeLocation, changeStatus } =
    useLocationsActionsContext();

  const handleEditButton = (location: Object) => {
    editLocation(location);
    setItem(location);
    changeStatus("edit");
  };

  return (
    <>
      <table className="table">
        <thead className="table__thead">
          <tr>
            <th className="table__th">Title</th>
            <th className="table__th">Type</th>
            <th className="table__th">Description</th>
            <th className="table__th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((location) => (
            <tr key={location.id}>
              <td className="table__td">{location.title}</td>
              <td className="table__td">{location.type}</td>
              <td className="table__td">{location.description}</td>
              <td className="table__td">
                <button
                  className="table__button table__button--edit"
                  onClick={() => handleEditButton(location)}>
                  <FaEdit />
                </button>
                <button
                  className="table__button table__button--delete"
                  onClick={() => removeLocation(location.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isOpen && <Modal item={item} />}
    </>
  );
};

export default Table;
