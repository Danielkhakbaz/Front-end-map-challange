import { useLocationsActionsContext } from "./../../provider/locations/locations-Context";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/home/table/table";
import "./home.css";

const Home = () => {
  const { openModal, changeStatus } = useLocationsActionsContext();

  const handleClick = () => {
    changeStatus("add");
    openModal(true);
  };

  return (
    <>
      <div className="info">
        <div>
          <h1>Locations List</h1>
        </div>
        <button className="info__button--add" onClick={() => handleClick()}>
          <FaPlus />
          <span className="info__text">Add Location</span>
        </button>
      </div>
      <Table />
    </>
  );
};

export default Home;
