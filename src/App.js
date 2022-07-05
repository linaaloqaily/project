import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Profile from "./pages/ProfilePage";
import ServicePage from "./pages/ServicePage";
import Footer from "./componets/Footer";
import DetailsSP from "./pages/DetailsSP";
import MyAppoint from "./componets/MyAppoint";
import Appoint from "./componets/Appoint";



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path="/sginup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/serviceprovider" element={<ServicePage />} />
          <Route path="/details" element={<DetailsSP />} />
          <Route path="/appointment" element={<Appoint />} />
          <Route path="/my-appointment" element={<MyAppoint />} />



          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
