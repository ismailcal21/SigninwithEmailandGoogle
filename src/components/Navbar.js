import React from "react";
import "../styles/components/Navbar.css";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase";
const Navbar = () => {
  const logoutFunc = async () => {
    toast.success("Cikis islemi gerceklestiriliyor...");
    await signOut(auth);
    window.location = "/";
  };

  return (
    <div className="navbar">
      <div className="navbar-left">FIREBASE</div>
      <div onClick={logoutFunc} className="navbar-right">
        Logout
      </div>
    </div>
  );
};

export default Navbar;
