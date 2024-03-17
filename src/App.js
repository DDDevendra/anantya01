import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage"
import LoginPage from "./Pages/Login"
import SignupPage from './Pages/Signup'


import "./App.css";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/Home" element={<ProfilePage/>}></Route>
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/Signup" element={<SignupPage/>}></Route>
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
