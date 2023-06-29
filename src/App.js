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
import axios from "axios";
function App() {
  const [hideRouterGuset, setHideRouterGuset] = useState( false);
  const [hideRouterUser, setHideRouterUser] = useState(true);
  const [hideRouterPro, setHideRouterPro] = useState(true);
  const [userData, setUserData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || false);
  const [userId0 ,setUserId] = useState()

  
  const fetchProtectedData = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const response = await axios.get("http://localhost:8000/Verify_token", {
          headers: {
            Authorization: token,
          },
        });
        let x = [];
        setUserId(response.data.user.id)
        // console.log(response.data);
        // console.log(response.data.user.id);
        if (response.data.user.role === 0) {
          x = [true, false, true];
        } else if (response.data.user.role === 2) {
          x = [true, true, false];
          console.log(x);
        } else {
          x = [false, true, true];
        }
        console.log(x);
        setHideRouterUser(x[0]);
        setHideRouterPro(x[1]);
        setHideRouterGuset(x[2]);
        // updateRouts(x);
      }
    } catch (error) {
      console.error(error);
    } finally {
      console.log(false);
    }
  };

  if(localStorage.token != null){   
    fetchProtectedData()
  }

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
                <Route element={<OrderItems UserId={userId0} />} path="/" />
                <Route element={<OrderItems UserId={userId0} />} path="OrderItems" />
                <Route element={<CompletedOrders />} path="CompletedOrders" />
                <Route element={<SettingsUser />} path="SettingsUser" />
                <Route element={<Profile />} path="Profile" />
                <Route element={<OrderForm UserId={userId0} />} path="OrderForm" />
                <Route element={<PaymentGate />} path="PaymentGate" />
                <Route element={<OrderDetails UserId={userId0}/>} path="OrderDetails/:idOrder" />
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
