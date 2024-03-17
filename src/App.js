import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage"
import LoginPage from "./Pages/Login"
import SignupPage from './Pages/Signup'


import "./App.css";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/Home" element={<ProfilePage/>}></Route>
          <Route path="/" element={<LoginPage/>}></Route>
          <Route path="/Signup" element={<SignupPage/>}></Route>
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
