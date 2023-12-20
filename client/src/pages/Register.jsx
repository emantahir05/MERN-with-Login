import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/auth/register";
const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password:"",
  });

  const navigate = useNavigate();

  const {storeTokenInLS} = useAuth();


  // handling the inputs
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,

    })
 }
//  handle submit 
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user);

  // connecting with backend
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
  
    const res_data = await response.json();
    console.log(res_data.extraDetails);
    if (response.ok) {
      // store token in localStorage
      storeTokenInLS(res_data.token);
      // Handle successful registration, e.g., redirect to login page
      setUser({
        username: "",
        email: "",
        phone: "",
        password:"",
      })
      toast.success("Registration Successful");
      // console.log("Registration successful!");
      navigate("/")
    } else {
      toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      const errorData = await response.json();
      console.error("Registration error:", errorData);
    }
  
  } catch (error) {
    console.error("Registration error:", error);
  }
 

}
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                {/* image  */}
                <img
                  src="\images\register.png"
                  alt="Registration Image "
                  width="500"
                  height="auto"
                />
              </div>
              {/* form  section */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">registration Form </h1>
                <br />
                {/* form  */}
                <form onSubmit={handleSubmit}>
                  {/* username  */}
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  {/* email  */}
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      
                    />
                  </div>
                  {/* phone  */}
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="enter your phone"
                      id="phone"
                      require
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  {/* password  */}
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      require
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  {/* button  */}
                  <br />
                  <button type="submit" className="btn btn-submit">Register Now  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
