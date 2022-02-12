import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./layout.css";

export interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
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
