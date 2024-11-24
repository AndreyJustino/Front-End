import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home }  from "../pages/home/home.jsx";
import { Footer } from "../components/footer/footer.jsx";
import { LoginUser } from "../pages/loginPages/loginUser.jsx";
import { LoginCompany } from "../pages/loginPages/loginCompany.jsx";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/loginCompany" element={<LoginCompany />} />
      </Routes>
      {/* <Footer />  */}
    </BrowserRouter>
  );
};



