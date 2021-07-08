import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="main">
      <Head>
        <title>Fine Line Construction</title>
        <meta name="description" content="A Fine Line Construction Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="top-section-logo">
          <h1>Fine Line</h1>
          <h2>constructions</h2>
      </div>
      <div className="top-section">
        <div className="top-section-text">
          <h1>Build with <br />excellence</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
        </div>
      </div>
      <div className="who-are-we">
        <div className="who-are-we-left">
          <img src="who-are-we-image.webp" alt="Who are we" />
        </div>
        <div className="who-are-we-right">
          <h2>WHO ARE WE</h2>
          <h1>We Specialise in bringing your vision to life.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div> 
      </div>
      <div className="what-we-do">
        <div className="what-we-do-left">
          <h2>WHO ARE WE</h2>
          <h1>We Specialise in bringing your vision to life.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className="what-we-do-right">
          <img src="what-we-do.webp" alt="What is do" />
        </div>
      </div>
      <div className="what-we-do-full">
        <div className="what-we-do-top">
         <h2>what we do</h2>
         <h1>Lorem ipsum dolor sit <br />amet, consectetur adipiscing elit.</h1>
        </div>
         <div className="services">
          <div className="services-ind">
              <div className="circles">
                <div className="circles2">
                    Icon
                </div>
              </div>
              <p>Renovations</p>
            </div>
            <div className="services-ind">
              <div className="circles">
                <div className="circles2">
                    Icon
                </div>
              </div>
              <p>Renovations</p>
            </div>
            <div className="services-ind">
              <div className="circles">
                <div className="circles2">
                    Icon
                </div>
              </div>
              <p>Renovations</p>
            </div>
            <div className="services-ind">
              <div className="circles">
                <div className="circles2">
                    Icon
                </div>
              </div>
              <p>Renovations</p>
            </div>
            <div className="services-ind">
              <div className="circles">
                <div className="circles2">
                    Icon
                </div>
              </div>
              <p>Renovations</p>
            </div>
        </div>
    </div>
    <div className="case-study">
        <div className="case-study-left">
          <img src="case-study.webp" alt="Case Study" />
        </div>
        <div className="case-study-right">
          <h2>WHO ARE WE</h2>
          <h1>We Specialise in bringing your vision to life.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div> 
      </div>
      <div className="contact-us">
        <div className="contact-us-top">
          <h2>contact us</h2>
          <h1>We&#39;re Ready To Bring Your<br />Vision To Life</h1>
        </div>
        <form>          
          <p>Full Name<br />
          <input type="text" placeholder="" className="fep" /></p>
          <p>Email<br />
          <input type="text" placeholder="" className="fep" /></p>
          <p>Phone Number<br />
          <input type="text" placeholder="" className="fep" /></p>
          <p className="message">Message<br />
          <input type="text" placeholder="" className="fep1" /></p>
        </form>
      </div>
      <footer>
        <div className="social">
          <div className="white-box"></div>
          <div className="contact-info">
            Name<br />
            Role<br />
            1234567<br />
            Email<br />
          </div>
          <div className="contact-info-right">
            101 Example Drive<br />
            Exampleville, State, 0000<br />
            <p> F | T | I </p>
          </div>
        </div>
      </footer>
  </div>
  )
}
