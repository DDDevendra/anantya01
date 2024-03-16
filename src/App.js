import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage"
import "./App.css";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<ProfilePage/>}></Route>
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
