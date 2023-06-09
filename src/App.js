import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Gallary from "./pages/Gallary";
import Services from "./pages/Services";
import Main from "./pages/Main";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Restore from "./pages/Restore";
import PartnerPage from "./pages/PartnerPage";
import ProfileCustomer from "./pages/ProfileCustomer";
import NoPage from "./pages/NoPage";
import OrderForm from "./components/ProfileUser/OrderForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Contact />} path="Contact" />
          <Route element={<AboutUs />} path="AboutUs" />
          <Route element={<Gallary />} path="Gallary" />
          <Route element={<Services />} path="Services" />
          <Route element={<LogIn />} path="LogIn" />
          <Route element={<SignUp />} path="SignUp" />
          <Route element={<Restore />} path="Restore" />
          <Route element={<PartnerPage />} path="PartnerPage" />
          <Route element={<ProfileCustomer />} path="ProfileCustomer" />
          <Route element={<OrderForm />} path="OrderForm" />
          <Route element={<NoPage />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
