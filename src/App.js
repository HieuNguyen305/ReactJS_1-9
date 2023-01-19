// import logo from "./logo.svg";
import "./App.css";
// import Baitap1 from "./baitap1";
import Baitap2 from "./baitap2";
import HandlingEvents from "./handling-events";
import ExampleEvent from "./handling-events/example";
import State_Lifecycle from "./state & lifecycle.js";
import RenderColorCar from "./renderColorCar";
import ListKey from "./list-keys";
import RenderingElements from "./rendering-elements";
import Communicate from "./Communicate";
import Shoes from "./shoes";
import CartDemo from "./gioHangDemo/cartDemo";
import Home from "./user-management";
import HomeRedux from "./user-management-redux";

// Cấu hình route cho các component
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import HomeTemPlates from "./templates/HomeTemPlates";
import AdminTemplates from "./templates/AdminTemPlates";
import UserPage from "./user-management-redux";
import Detail from "./pages/Details/Detail";
import FormValidation from "./pages/FormValidation";

function App() {
  return (
    <div>
      {/* <Baitap1 /> */}
      {/* <Baitap2 /> */}
      {/* <RenderingElements />
      <HandlingEvents /> */}
      {/* <ExampleEvent />
      <hr />
      <State_Lifecycle />
      <hr />
      <RenderColorCar />
      <hr />
      <ListKey />
      <hr />
      <Communicate />
      <hr />
      <Shoes /> */}
      {/* <br /> */}
      {/* <CartDemo /> */}
      {/* <Home /> */}
      {/* <HomeRedux /> */}
      <BrowserRouter>
        {/* <header>
          <NavLink to="/home" className="mx-2">
            Home page
          </NavLink>
          <NavLink to="/login" className="mx-2">
            Login
          </NavLink>
          <NavLink to="/register" className="mx-2">
            Register
          </NavLink>
        </header> */}
        <Routes>
          {/* <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
          <Route path="" element={<HomeTemPlates />}>
            <Route index element={<HomePage />}></Route>
            <Route path="home" element={<HomePage />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="user-management" element={<UserPage />}></Route>
            <Route path="detail">
              <Route path=":id" element={<Detail />}></Route>
            </Route>
            <Route path="form-validation" element={<FormValidation />}></Route>
            <Route path="*" element={<Navigate to="" />}></Route>
          </Route>
          <Route path="admin" element={<AdminTemplates />}>
            <Route index element={<div>index</div>}></Route>
            <Route path="users" element={<div>user component</div>}></Route>
            <Route
              path="products"
              element={<div>product component</div>}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
