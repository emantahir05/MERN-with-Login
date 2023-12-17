import React from 'react'
import {useAuth} from "../store/auth";

const About = () => {

  const {user} = useAuth();

  return (
    <>

<main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
            <p>Welcome { user ? `${user.username} to About Page` : `to About Page`
              }</p>
            <h1>I am Eman Tahir</h1>
            <p>Learning MERN stack developement practicing this project <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae quam at consequuntur perferendis nam praesentium, velit libero ut optio molestiae quod numquam delectus porro aut minus modi atque repudiandae sapiente placeat, voluptas sed? Earum ratione maiores error explicabo dignissimos, deserunt aliquam repellendus officiis nobis nostrum, in dolorum velit sapiente!
            </p>
            <div className="btn btn-group">
              <a href="/contact"><button className='btn '>Connect Now</button></a>
              <a href="/service"><button className='btn secondary-btn'>Our Services </button></a>
            </div>
            </div>
              {/* img  */}
              <div className="hero-image">
                <img src="/images/about.png" alt="Home Image" width="400" height="500" />
              </div>
          </div>
        </section>
      </main>
      
    </>
  )
}

export default About
