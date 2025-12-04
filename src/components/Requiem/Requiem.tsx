import SSCL from '../../assets/whiteGamingLogo.mp4';
import BabyPic from '../../assets/baby-pic.jpg'; 
import Photo1 from '../../assets/IMG_2590.jpg';
import Photo2 from '../../assets/IMG_3059.jpg';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from "./requiem.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface RequiemProps {}

const Requiem: FC<RequiemProps> = () => (
  <>
    <h1 className={styles.h1}>
      <Link to='/Home'>
        <video width="400" autoPlay muted playsInline>
          <source src={SSCL} type="video/mp4" />
        </video>
      </Link>
    </h1>

    <nav className={styles.navBar}>
      <ul>
        <li><NavLink to="/About">Essie's Requiem</NavLink></li>
        <li><NavLink to="/Vision">Stormi's Vision</NavLink></li>
        <li><NavLink to="/Contacts">Connect with me?</NavLink></li>
      </ul>
    </nav>

    {/* ⭐ Centered Page Container ⭐ */}
    <div className={styles.pageContainer}>

      <main>
        <h2 className={styles.Title}>Protecting the Rose That Grew From Concrete</h2>

        <p className={styles.P2}>
          "A bit of a heavy start, I know—but stick with me. I’m Stormi, and I’m on a mission to make life easier for anyone navigating challenges or disabilities, myself included..."
        </p>

        {/* ⭐ Slideshow ⭐ */}
        <div 
          style={{
            width: '100%',
            maxWidth: '650px',
            margin: '40px auto',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow:
              '0 10px 25px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04)',
            background: 'white',
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            style={{ borderRadius: '20px' }}
          >
            <SwiperSlide>
              <img
                src={BabyPic}
                alt="Baby Essie"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={Photo1}
                alt="Slide One"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={Photo2}
                alt="Slide Two"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <p className={styles.p3}>
          Let’s start with the rebranding of Essie, the little girl pictured above...
        </p>
      </main>

    </div>
  </>
);

export default Requiem;


