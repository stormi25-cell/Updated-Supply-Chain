import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Home.module.css';
// adjust these asset paths to match your project
import SSCL from '../../assets/SSCL.mp4';
import HeadShot from '../../assets/headshot.png';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <h1>
        <Link to="/Home">
          <video width={400} autoPlay muted playsInline>
            <source src={SSCL} type="video/mp4" />
          </video>
          {/* video tag requires both open and closing tags if passing in a source. */}
        </Link>
      </h1>

      <nav className="navBar">
        <ul>
          <li><NavLink to="/About">Essie's Requiem</NavLink></li>
          <li><NavLink to="/Vision">Stormi's Vision</NavLink></li>
          <li><NavLink to="/Contacts">Connect with me?</NavLink></li>
        </ul>
      </nav>

      <div className="Hero">
        <img src={HeadShot} alt="Stormi" />
      </div>

      <p>
        " 'So what are you going to do at my funeral now that you've killed me?'
        ...
        'Here lies the mother of my children, both living and dead.'
        ...
        'Rest in peace, my true love, who I took for granted.' 
        - Beyonce Knowles "
      </p>
    </div>
  );
};

export default Home;
