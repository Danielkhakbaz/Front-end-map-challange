import {
  useLocationsContext,
  useLocationsActionsContext,
} from "../../../provider/locations/locations-Context";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import "./table.css";

const Table = () => {
  const { data } = useLocationsContext();
  const { removeLocation } = useLocationsActionsContext();

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
          {data.map((item) => (
            <tr key={item.id}>
              <td className="table__td">{item.title}</td>
              <td className="table__td">{item.type}</td>
              <td className="table__td">{item.description}</td>
              <td className="table__td">
                <button className="table__button table__button--edit">
                  <FaEdit />
                </button>
                <button
                  className="table__button table__button--delete"
                  onClick={() => removeLocation(item.id)}>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
