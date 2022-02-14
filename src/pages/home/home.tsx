import { useEffect } from "react";
import { useLocationsActionsContext } from "./../../provider/locations/locations-Context";
import Table from "../../components/home/table/table";
import { FaPlus } from "react-icons/fa";
import "./home.css";

const Home = () => {
  const { openModal, changeStatus } = useLocationsActionsContext();

  const handleClick = () => {
    openModal(true);
    changeStatus("add");
  };

  useEffect(() => {
    document.title = "Home | Challenge";
  });

  return (
    <>
      <div className="info">
        <h1>Locations List</h1>
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
