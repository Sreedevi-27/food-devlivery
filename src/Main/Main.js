import { Route, Routes } from "react-router-dom";
import American from "../view/CuisineType/American";
import Chinese from "../view/CuisineType/Chinese";
import Indian from "../view/CuisineType/Indian/Indian";
import Italian from "../view/CuisineType/Italian";
import Japanese from "../view/CuisineType/Japanese";
import Home from "../view/HomePage/Home/Home";
import SpecialFood from "../view/HomePage/SpecialOffer/SpecialFood";
import NoMatch from "../view/NoMatch/NoMatch";
import Briyani from "../view/CuisineType/Indian/Briyani/Briyani";

function Main() {
  return (
    <div className="main">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Indian" element={<Indian />} />
        <Route path="/Italian" element={<Italian />} />
        <Route path="/American" element={<American />} />
        <Route path="/Chinese" element={<Chinese />} />
        <Route path="/Japanese" element={<Japanese />} />
        <Route path="/Indian/Briyani" element={<Briyani />} />
        <Route path="/special-offer" element={<SpecialFood />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default Main;
