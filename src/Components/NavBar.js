import React from "react";
import { Link } from "react-router-dom";

function NavBar({ isLogin, setIsLogin }) {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/users">
        <h3>Users</h3>
      </Link>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default NavBar;
