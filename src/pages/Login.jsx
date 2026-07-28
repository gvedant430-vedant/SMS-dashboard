import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import"../css/login.css";
function Login(){
    // const[email,setEmail]=useState("");
    // const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const[loginData,setLoginData]=useState({email:" ",password:" "});
    const handleChange=(e)=>{
        setLoginData({
            ...loginData,
            [e.target.name]:e.target.value,
        });
    };

    const handleLogin=(e)=>{
        e.preventDefault();
        const savedUser=JSON.parse(localStorage.getItem("user"));
        if(!savedUser){
            alert("Please register first!");
            return;
        }

        if(savedUser.email===loginData.email && savedUser.password===loginData.password)
            {
            alert("Login Successful");
            localStorage.setItem("isLoggedIn","true");
            navigate("/dashboard");
        }else{
            alert("Invalid Email or Passord");
        }
    };
    return(
        <>
       
        <div className="login-container">
            <div className="login-card">
                <h1>SMS Dashboard</h1>
                <h2>Welcome Back</h2>
                <form onSubmit={handleLogin}>
                    <label> Email</label>
                     <input 
                     type="email"
                     name="email"
                      placeholder="Enter your email" 
                      value={loginData.email} 
                      onChange={handleChange}
                      required/>

                    <br/>

                    <label> Password</label>
                    < input 
                    type="password" 
                    name="password"
                    placeholder="Enter your password"
                     value={loginData.password} 
                     onChange={handleChange}
                     required/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account?
                    <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    </>
    );
}

export default Login;