import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home }  from "../pages/home/home.jsx";
import { Footer } from "../components/footer/footer.jsx";
import { LoginUser } from "../pages/loginUser/loginUser.jsx";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginUser" element={<LoginUser />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
};



