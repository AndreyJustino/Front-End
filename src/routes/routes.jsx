import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home }  from "../pages/home/home.jsx";
import { Footer } from "../components/footer/footer.jsx";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
};



