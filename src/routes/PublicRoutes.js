//import react router dom
import { Routes, Route } from "react-router-dom";
// import MainWeb from "../Components/Web";
// import Portfolios from "../Components/Web/Portfolio/UndanganOL/Main";
import MainWeb from "../Theme-1/Main";

function PublicRoutes() {
  return (
    <Routes>
      {/* <Route path="/" exact element={<MainWeb />} />
      <Route path="/portfolio" exact element={<Portfolios />} /> */}
      <Route path="/" exact element={<MainWeb />} />
    </Routes>
  );
}
export default PublicRoutes;
