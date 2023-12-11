import React, { useState } from "react";

const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password:"",
  });


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
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(user);
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
                      require
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
                      require
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
