import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/login.css";

function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("Please register first!");
      return;
    }

    if (
      savedUser.email === loginData.email &&
      savedUser.password === loginData.password
    ) {
      alert("Login Successful");

      localStorage.setItem("isLoggedIn", "true");

      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-card">

          <h1 className="login-title">
            SMS Dashboard
          </h1>

          <h2 className="login-subtitle">
            Welcome Back
          </h2>

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            <div className="login-form-group">

              <label className="login-label">
                Email
              </label>

              <input
                className="login-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={handleChange}
                required
              />

            </div>

            <div className="login-form-group">

              <label className="login-label">
                Password
              </label>

              <input
                className="login-input"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={loginData.password}
                onChange={handleChange}
                required
              />

            </div>

            <button
              type="submit"
              className="login-button"
            >
              Login
            </button>

          </form>

          <p className="login-register-text">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="login-register-link"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;