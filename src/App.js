import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

import ProductsContainer from "./components/ProductsContainer";

import Generique from "./components/Generique";

import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="">
      <Navigation />

      <Routes>
        <Route path="/" element={<ProductsContainer />} />
        <Route path="femmes" element={<Generique categorie="Femmes" />} />
        <Route path="ados" element={<Generique categorie="Ados" />} />
        <Route path="hommes" element={<Generique categorie="Hommes" />} />
        <Route path="enfants" element={<Generique categorie="Enfants" />} />
        <Route path="bébés" element={<Generique categorie="Bébés" />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
