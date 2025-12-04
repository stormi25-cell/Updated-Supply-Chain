import React , {FC } from 'react';
import styles from './Vision.module.css';
import { Link, NavLink } from "react-router-dom";
import SSCL from './assets/whiteGamingLogo.mp4'
import CH from './assets/what-is-community-health-illustration.jpg'
import ED from './assets/ED.mp4'
import BLCK from './assets/BLCK.mp4'

interface VisionProps {}

const Vision: FC<VisionProps> = () => (
  <>
      <h1>
        <Link to="/">
          <video width="400" autoPlay muted playsInline>
            <source src= {SSCL} type="video/mp4" />
          </video>
        </Link>
      </h1>

      <nav className="navBar">
        <ul>
          <li><NavLink to="/About">Essie's Requiem</NavLink></li>
          <li><NavLink to="/Vision">Stormi's Vision</NavLink></li>
          <li><NavLink to="/Contacts">Connect with me?</NavLink></li>
        </ul>
      </nav>

      <section className="vision-content">
        <div className="CH">
          <img src= {CH} alt="Goal" />
        </div>

        <p className="blurb">
          My goal is to create sustainable solutions that empower and improve the lives of people navigating illness or chronic conditions. My projects—ED and The Black Bakery—are born from challenges I’ve personally faced, and I hope they can help others going through similar experiences.
        </p>

        <div className="CardContainer">
          <div className="Card1">
            <video width="320" height="425" autoPlay muted loop playsInline>
              <source src={ED} type="video/mp4" />
            </video>
          </div>

          <div className="Card2">
            <video width="200" height="350" autoPlay muted loop playsInline>
              <source src= {BLCK} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="Desc-Container">
          <div className="Container1">
            <h2><b>Easy To Disclose</b></h2>
          </div>
          <div className="Container2">
            <b>The BLCK Bakery</b>
          </div>
        </div>
      </section>
    </>
);

export default Vision;
