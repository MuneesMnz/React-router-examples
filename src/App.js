import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
// import About from "./Component/About";

import Navbar from "./Component/Navbar";
import OrderSummery from "./Component/OrderSummery";
import Nomatch from "./Component/Nomatch";
import Products from "./Component/Products";
import Featured from "./Component/featured";
import New from "./Component/new";
import Users from "./Component/Users";
import UserDetailes from "./Component/UserDetailes";
import Admin from "./Component/Admin";
import React from "react";
import Profile from "./Component/Profile";
import { AuthProvider } from "./Component/auth";
import Login from "./Component/Login";
import RequireAuth from "./Component/RequireAuth";
const LazyAbout=React.lazy(()=>import('./Component/About'))

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<React.Suspense fallback="loading..."><LazyAbout /></React.Suspense>} />
        <Route path="order" element={<OrderSummery />} />
        <Route path="product" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":id" element={<UserDetailes />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
