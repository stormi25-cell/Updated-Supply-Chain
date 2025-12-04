import SSCL from './assets/whiteGamingLogo.mp4'
import BabyPic from './assets/baby-pic.jpg'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "./requiem.module.css";
interface RequiemProps {}

const Requiem: FC<RequiemProps> = () => (
<>
      <h1>
        <Link to='/Home'>
          <video width="400" autoPlay muted playsInline>
            <source src={SSCL} type="video/mp4" />
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

      <main>
        <h2 className="Title">Protecting the Rose That Grew From Concrete</h2>
        <p className="P2">
          "A bit of a heavy start, I know—but stick with me. I’m Stormi, and I’m on a mission to make life easier for anyone navigating challenges or disabilities, myself included. I’d love to share more about my vision soon, but for now, let’s just get to know each other."
        </p>

        <div className="Pic1">
          <img src={BabyPic} alt="Essie as a child" />
        </div>

        <p className="p3">
          Let’s start with the rebranding of Essie, the little girl pictured above. Born in humid springtime Dallas/Fort Worth, she was relocated to Brooklyn at age 4 when life overwhelmed her mother. She faced many challenges—most notably being diagnosed with Type 1 Diabetes at 7 and losing both parents during the most abusive relationship of her life. She was wholesome, goal-oriented, creative, and an avid spokesperson and these key features are the only things that are present in my current re-alignment.
        </p>

        <div className="photo-row">
          <div className="photo">
            <img src="/media/IMG_2590.JPG" alt="Photo 1" />
          </div>
          <div className="photo2">
            <img src="/media/IMG_3059.JPG" alt="Photo 2" />
          </div>
        </div>
      </main>
    </>
);

export default Requiem;
