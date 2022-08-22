import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Add from "./Components/AddOrEdit";
import Adminprofile from "./Components/AdminProfilePage";
import Login from "./Components/LoginUserPage";
import Register from "./Components/RegisterUserPage";
import Update from "./Components/Update";
import UserProfilePage from "./Components/UserProfilePage";
import MyProfile from "./Components/MyProfile";


function App() {
  return (
    <div>
     <BrowserRouter>
    <Routes>
       <Route exact path="/register" element={<Register />}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/admin" element={<Adminprofile />}></Route>
      <Route exact path="/addbook" element={<Add />}></Route>
      <Route exact path="/update" element={<Update />}></Route>
      <Route exact path="/user" element={<UserProfilePage />}></Route>
      <Route exact path="/profile" element={<MyProfile />}></Route>
      

       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
