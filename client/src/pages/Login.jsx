import React, { useState } from 'react'

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    })
  };

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
                      require
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
  )
}

export default Login
