import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom';

import "../styles/Signup.css";

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userCaptcha, setUserCaptcha] = useState("");

  // Generate Captcha
  function generateCaptcha() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }

  // Handle Form Submission
  const onSubmit = async (data) => {
    if (userCaptcha !== captcha) {
      toast.error("Captcha does not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          dob: data.dob,
          gender: data.gender,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Signup Successful!");
        setTimeout(() => navigate("/login"), 1500);
      } else {
        toast.error(result.error || "Signup failed!");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-page">
      <ToastContainer />
      <div className="signup-container">
        <h2>Signup to Mentora</h2>
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <label>Username</label>
            <input type="text" {...register("username", { required: "Username is required" })} />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>

          <div className="form-group">
            <label>First Name</label>
            <input type="text" {...register("first_name", { required: "First Name is required" })} />
            {errors.first_name && <p className="error">{errors.first_name.message}</p>}
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input type="text" {...register("last_name", { required: "Last Name is required" })} />
            {errors.last_name && <p className="error">{errors.last_name.message}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" {...register("email", { required: "Email is required" })} />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="form-group">
            <label>Date of Birth</label>
            <input
              type="date"
              {...register("dob", { required: "Date of Birth is required" })}
              min="1980-01-01"
              max="2006-12-31"
            />
            {errors.dob && <p className="error">{errors.dob.message}</p>}
          </div>

          <div className="form-group">
             <label>Gender</label>
         <div className="select-wrapper">
           <select {...register("gender", { required: "Gender is required" })}>
               <option value="">Select Gender</option>
               <option value="male">Male</option>
               <option value="female">Female</option>
               <option value="prefer_not_to_say">Prefer not to say</option>
             </select>
         </div>
         {errors.gender && <p className="error">{errors.gender.message}</p>}
       </div>


          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters required" }
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === watch("password") || "Passwords do not match"
              })}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
          </div>

          <div className="form-group full-width">
            <label>Captcha Verification</label>
            <div className="captcha-container">
              <span className="captcha">{captcha}</span>
              <button type="button" onClick={() => setCaptcha(generateCaptcha())}>🔄 Refresh</button>
            </div>
            <input
              type="text"
              onChange={(e) => setUserCaptcha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-button full-width">Signup</button>
          <p className="login-redirect">
             Already have an account? <Link to="/login">Login to Mentora</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
