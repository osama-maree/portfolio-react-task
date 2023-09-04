import React from "react";
import "../style/home.css";
const Home = () => {
  return (
    <div className="home bg-first-color" id="home">
      <div className="container">
        <section className="leftSide">
          <div className="topPart">
            <h3 style={{ marginBottom: "1rem" }}>Hello! 🙂</h3>
            <h1>I'm a Fullstack Developer</h1>
            <p>
              My name is Osama Maree, A web developer, building a fullstack
              responsive websites
            </p>
          </div>
          <div className="content">
            <h3>
              <a className="email" href="mailto:osamamarei2001@gmail.com">
                Contact Me
              </a>
            </h3>
            <div className="rh">
              <span>More</span>
            </div>
            <div className="lineWidth">
              <hr />
            </div>
            <h3>
              <a className="downlod" href="/assets/Osama-Maree-CV.pdf" download>
                Resume
              </a>
            </h3>
          </div>
        </section>
        <section className="rightSide">
          <div className="box">
            <div className="dot" />
          </div>
          <img className="shadow" src="/assets/home.png" alt="" />
          <div className="box">
            <div className="dot" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
