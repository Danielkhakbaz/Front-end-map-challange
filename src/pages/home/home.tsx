import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Table from "../../components/home/table/table";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="info">
        <div>
          <h1>Locations List</h1>
        </div>
        <div>
          <button className="info__button--add">
            <Link className="info__link" to="/new">
              <FaPlus />
              <span className="info__text">Add Location</span>
            </Link>
          </button>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Home;
