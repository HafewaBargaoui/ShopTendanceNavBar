import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import ProductsContainer from "./components/ProductsContainer";

import Femmes from "./components/Femmes";
import Ados from "./components/Ados";
import Hommes from "./components/Hommes";
import Enfants from "./components/Enfants";
import Bébés from "./components/Bébés";

import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="">
      <Navigation />

      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="femmes" element={<Femmes />} />
        <Route path="ados" element={<Ados />} />
        <Route path="hommes" element={<Hommes />} />
        <Route path="enfants" element={<Enfants />} />
        <Route path="bébés" element={<Bébés />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
