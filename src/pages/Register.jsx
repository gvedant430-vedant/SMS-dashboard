import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../css/register.css";
function Register(){
    // const[name,setName]=useState("");
    // const[email,setEmail]=useState("");
    // const[mobile,setMobile]=useState("");
    // const[password,setPassword]=useState("");
    // const[ConfirmPassword,setConfirmPassword]=useState("");
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        name:"", email:"",password:"",phone:"",confirmpassword:""});
   
        const handleChange=(e)=>{
            setFormData({
                ...formData,
                [e.target.name]:e.target.value,
            });
        };

        const handleRegister=(e)=>{
        e.preventDefault();

        //Check if user already exists
        const existingUser =JSON.parse(localStorage.getItem("user"));

        if(existingUser&& existingUser.email===formData.email){
            alert("User already registered!");
            return;
        }

        // if(formData.password!==formData.ConfirmPassword){
        //     alert("Passwords do not match");
        //     return;
        // }

        //Save User
        localStorage.setItem("user",JSON.stringify(formData));
        console.log(formData);
        alert("Registration Successfully");

        //Clear Form
        setFormData({
            name:" ",
            email:" ",
            phone:" ",
            password:" ",
            confirmpassword:"",
        });
        navigate("/login");
    };
    
    return(
        <>
     
        <div className="register-container">
            <div className="register-card">
                <h1>SMS Dashboard</h1>
                <h2>Create New Account</h2>
                <form onSubmit={handleRegister}>

                    <label>Name:</label>
                    <input 
                    type="text" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name} 
                    onChange={handleChange}
                    required
                    />

                    <label>Email:</label>
                    <input 
                    type="email"
                    name="email"
                     placeholder="Enter your email" 
                     value={formData.email} 
                     onChange={handleChange}
                     required/>

                    <label>Mobile Number:</label>
                    <input 
                    type="phone" 
                    name="phone"
                    placeholder="Enter your mobile number" 
                    value={formData.phone} 
                    onChange={handleChange}/>

                    <label>Password:</label>
                    <input 
                    type="password" 
                    name="password"
                    placeholder="Enter your password" 
                    value={formData.password} 
                    onChange={handleChange}/>

                    <label>Confirm Password:</label>
                    <input 
                    type="password" name="confirmpassword"

                    placeholder="Confirm your password" 
                    value={formData.ConfirmPassword} 
                    onChange={handleChange}/>
                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account?{" "}
                    <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
        </>
    );
}

export default Register;