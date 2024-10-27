import React from'react';
import './styles.scss'


const Home = () => {
    return (
      <section id="home" className='home'>
        <div className="home__text-wrapper">
            <h1>
                Hello, I'm Abhinav Sharma
                <br/>
                Software/Web Developer
            </h1>
        </div>
        <div className="home__contact-me">
          <button>Hire Me</button>
        </div>
      
      </section>
    )
}

export default Home;
