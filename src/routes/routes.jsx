import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home }  from "../pages/home/home.jsx";
import { LoginUser } from "../pages/loginPages/loginUser.jsx";
import { LoginCompany } from "../pages/loginPages/loginCompany.jsx";
import { RegisterCompany } from "../pages/registerPages/registerCompany.jsx";
import { RegisterUser } from "../pages/registerPages/registerUser.jsx";
import { AboutHosting } from "../pages/aboutHosting/aboutHosting.jsx";
import BasicSpeedDial from "../components/I.A onfly/iaOnfly.jsx";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginUser" element={<LoginUser />} />
        <Route path="/loginCompany" element={<LoginCompany />} />
        <Route path="/registerCompany" element={<RegisterCompany />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/aboutHosting" element={<AboutHosting />} />
      </Routes>
      <BasicSpeedDial />
    </BrowserRouter>
  );
};
