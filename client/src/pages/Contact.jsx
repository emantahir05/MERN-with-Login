import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";


const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {

  const [data, setData] = useState(defaultContactFormData);

  
  const { user } = useAuth();

  console.log("Frontend user ", user.email);
  const [userData, setUserData] = useState(true);

  useEffect(() => {
    if (userData && user && Object.keys(data).every(key => data[key] === "")) {
      setData({
        username: user.username,
        email: user.email,
        message: "",
      });
      setUserData(false);
    }
  }, [userData, user, data]);




  // handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const URL = "http://localhost:5000/api/form/contact";
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json "
        },
        body: JSON.stringify(data)
       } );
       if (response.ok) {
        setData((prevData) => ({
          ...prevData,
          message: ""
        }));
        const res_data = await response.json();
        console.log(res_data);
        alert("Message sent");
        
       }
    } catch (error) {
      console.error(`Error from sending the contact data to db ${error}`);
      
    }
    console.log(data);
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/support.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              {/* username  */}
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={data.username}
                  onChange={handleInput}
                  required
                />
              </div>
                {/* email  */}
              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={data.email}
                  onChange={handleInput}
                  required
                />
              </div>
                {/* message  */}
              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={data.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contact;
