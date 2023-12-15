import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth';

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const {storeTokenInLS} = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name !== undefined && value !== undefined) {
      setUser({
        ...user,
        [name]: value,
      });
    } else {
      console.error('Name or value is undefined:', name, value);
    }
  };
  const handleSubmit =  async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json" 
        },
        body: JSON.stringify(user)
      });
      if (response.ok) {
        const res_data = await response.json();
      console.log(res_data);
      // store token in localStorage
      storeTokenInLS(res_data.token);
        alert("Log in Successfull");
        setUser({
          email: "",
          password: ""
        });
        navigate("/");
        console.log(response);
      }else{
        alert("Invalid Credentials");
        const errorData = await response.json();
        console.log("Login Error", errorData);
      }


    } catch (error) {
      console.log("Log in Error ", error);
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
                  src="images\login.png"
                  alt="Login Image "
                  width="500"
                  height="auto"
                />
              </div>
              {/* form  section */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login </h1>
                <br />
                {/* form  */}
                <form onSubmit={handleSubmit}>
                 
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
                 
                  {/* password  */}
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="enter your password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  {/* button  */}
                  <br />
                  <button type="submit" className="btn btn-submit">Login  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Login
