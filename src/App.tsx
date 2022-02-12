import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LocationsProvider from "./provider/locations/locations-Provider";
import Compose from "./components/compose/compose";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import NotFound from "./pages/404/404";

const App = () => {
  const Providers = [LocationsProvider, BrowserRouter];

  return (
    <>
      <Compose components={Providers}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Layout>
      </Compose>
    </>
  );
};

export default App;
