import React from 'react'

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
            <p>I am Eman Tahir Learning MERN Stack</p>
            <h1>Welcome to my new Project</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique cum reiciendis cumque? Omnis, amet sit voluptatem vel placeat rem fuga debitis delectus voluptatum rerum eveniet, ab est sapiente ipsam consectetur!</p>
            <div className="btn btn-group">
              <a href="/contact"><button className='btn '>Connect Now</button></a>
              <a href="/service"><button className='btn secondary-btn'>Our Services </button></a>
            </div>
            </div>
              {/* img  */}
              <div className="hero-image">
                <img src="/images/home.png" alt="Home Image" width="400" height="500" />
              </div>
          </div>
        </section>
      </main>
      {/* second section  */}
      <section className='section-analytics'>
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>MongoDb</h2>
            <p>Database</p>
          </div>
          <div className="div1">
            <h2>Express</h2>
            <p>Node Liberary </p>
          </div>
          <div className="div1">
            <h2>React</h2>
            <p>Frontend </p>
          </div>
          <div className="div1">
            <h2>Node</h2>
            <p>Backend  </p>
          </div>
        </div>

      </section>
      {/* 3rd sectionsection */}
      <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* img  */}
            <div className="hero-image">
                <img src="/images/design.png" alt="Home Image" width="400" height="500" />
              </div>
            <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get stated today</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique cum reiciendis cumque? Omnis, amet sit voluptatem vel placeat rem fuga debitis delectus voluptatum rerum eveniet, ab est sapiente ipsam consectetur!</p>
            <div className="btn btn-group">
              <a href="/contact"><button className='btn '>Connect Now</button></a>
              <a href="/service"><button className='btn secondary-btn'>Our Services </button></a>
            </div>
            </div>
              
          </div>
        </section>
    </>
  )
}

export default Home
