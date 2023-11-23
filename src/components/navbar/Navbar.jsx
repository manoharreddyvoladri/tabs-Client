// Navbar.js

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";
import logoImage from "./logo.png";

import Button from '@mui/material/Button';



const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate("/home"); // Use useNavigate hook

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <div className="navbar">
          <Link to="/" className="logo">
          <img src={logoImage} alt="Logo" className="logoImage" />
        </Link>
  
      <div className="navContainer">



        <div className="navItems">
          <Link to="/" className="navLink">
            Home
          </Link>
          <Link to="/blog" className="navLink">
            Blog
          </Link>
          <Link to="/team" className="navLink">
            Team
          </Link>
          <Link to="/contact" className="navLink">
            Contact
          </Link>
          {user ? (
            <div className="dropdown">
              <Button className="navButton" onClick={toggleDropdown}>
                {user.username}
                <i className="fa fa-caret-down"></i>
              </Button>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/settings">Settings</Link>
                  <Link to="/profile">Profile</Link>
                  <Button onClick={handleLogout}>Logout</Button>
                </div>
              )}
            </div>
          ) : (
            <div className="navButtons">
              <Link to="/login" className="navButton">
                Login
              </Link>
              <Link to="/register" className="navButton">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

