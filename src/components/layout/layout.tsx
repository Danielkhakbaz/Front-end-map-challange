import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import { ChildrenType } from "../../types/children-type";
import "./layout.css";

const Layout = ({ children }: ChildrenType) => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
