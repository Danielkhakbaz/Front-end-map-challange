import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./404.css";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 | Map Challenge";
  });

  return (
    <>
      <h1 className="notFound__title">404</h1>
      <Link className="notFound__link" to="/">
        <button className="notFound__button">Back to Home Page</button>
      </Link>
    </>
  );
};

export default NotFound;
