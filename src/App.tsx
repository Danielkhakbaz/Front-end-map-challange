import { BrowserRouter, Routes, Route } from "react-router-dom";
import LocationsProvider from "./provider/locations/locations-Provider";
import Compose from "./components/compose/compose";
import Layout from "./components/layout/layout";
import Home from "./pages/home/home";

const App = () => {
  const Providers = [LocationsProvider, BrowserRouter];

  return (
    <>
      <Compose components={Providers}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </Compose>
    </>
  );
};

export default App;
