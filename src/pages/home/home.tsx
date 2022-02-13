import {
  useLocationsContext,
  useLocationsActionsContext,
} from "./../../provider/locations/locations-Context";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/home/table/table";
import Modal from "../../components/modal/modal";
import "./home.css";

const Home = () => {
  const { isOpen } = useLocationsContext();
  const { openModal } = useLocationsActionsContext();

  return (
    <>
      <div className="info">
        <div>
          <h1>Locations List</h1>
        </div>
        <button className="info__button--add" onClick={() => openModal(true)}>
          <FaPlus />
          <span className="info__text">Add Location</span>
        </button>
      </div>
      <Table />
      {isOpen && <Modal />}
    </>
  );
};

export default Home;
