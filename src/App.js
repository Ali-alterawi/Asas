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
import ProfileOffice from "./pages/ProfileOffice";
import NoPage from "./pages/NoPage";
import OrderForm from "./components/ProfileUser/OrderForm";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderItems from "./components/ProfileUser/OrderItems";
import CompletedOrders from "./components/ProfileUser/CompletedOrders";
import SettingsUser from "./components/ProfileUser/SettingsUser";
import Profile from "./components/ProfileUser/Profile";
import Sidebar from "./components/ProfileUser/Sidebar";
import NavBar from "./components/NavBar";
import SidebarPro from "./components/ProfileProvider/SidebarPro";
import OrderPro from "./components/ProfileProvider/OrderPro";
import CompletedOrdersPro from "./components/ProfileProvider/CompletedOrdersPro";
import NewOrdersPro from "./components/ProfileProvider/NewOrdersPro";
import ProfilePro from "./components/ProfileProvider/ProfilePro";
import SettingsPro from "./components/ProfileProvider/SettingsPro";
import AllDetails from "./components/ProfileProvider/AllDetails";
import PaymentGate from "./components/ProfileUser/PaymentGate";
import OrderDetails from "./components/ProfileUser/OrderDetails";

function App() {
  const [hideRouterGuset, setHideRouterGuset] = useState(true);
  const [hideRouterUser, setHideRouterUser] = useState(false);
  const [hideRouterPro, setHideRouterPro] = useState(true);

  //-----------------------------User Router-------------------------------//
  const AppRouterGuset = () => {
    return (
      <Router>
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
          <Route element={<ProfileOffice />} path="ProfileOffice" />
          <Route element={<OrderForm />} path="OrderForm" />
          <Route element={<NoPage />} path="*" />
        </Routes>
        <Footer />
      </Router>
    );
  };

  //-----------------------------User Router-------------------------------//
  const AppRouterUser = () => {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-12">
              <Sidebar />
            </div>
            <div className="col-lg-8 col-md-12">
              <Routes>
                <Route element={<OrderItems />} path="/" />
                <Route element={<OrderItems />} path="OrderItems" />
                <Route element={<CompletedOrders />} path="CompletedOrders" />
                <Route element={<SettingsUser />} path="SettingsUser" />
                <Route element={<Profile />} path="Profile" />
                <Route element={<OrderForm />} path="OrderForm" />
                <Route element={<PaymentGate />} path="PaymentGate" />
                <Route element={<OrderDetails />} path="OrderDetails" />
                <Route element={<Main />} path="Main" />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  };

  //-----------------------------User Router-------------------------------//
  const AppRouterProvider = () => {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <div className="row justify-content-between">
            <div className=" col-lg-3 col-md-12 ">
              <SidebarPro />
            </div>
            <div className="col-lg-8 col-md-12">
              <Routes>
                <Route element={<OrderPro />} path="/" />
                <Route element={<OrderPro />} path="OrderPro" />
                <Route element={<CompletedOrdersPro />} path="CompletedOrdersPro" />
                <Route element={<NewOrdersPro />} path="NewOrdersPro" />
                <Route element={<ProfilePro />} path="ProfilePro" />
                <Route element={<SettingsPro />} path="SettingsPro" />
                <Route element={<AllDetails />} path="AllDetails" />
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    );
  };

  return (
    <>
      {hideRouterGuset ? null : (
        <>
          <AppRouterGuset />
        </>
      )}

      {hideRouterUser ? null : (
        <>
          <AppRouterUser />
        </>
      )}
      {hideRouterPro ? null : (
        <>
          <AppRouterProvider />
        </>
      )}
    </>
  );
}

export default App;
