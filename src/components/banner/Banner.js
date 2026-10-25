import React from 'react'
import Link from 'next/link'

const Banner = () => {
  return (
    <>
      <div
        className='main-banner'>
        <div className="overlay-banner" ></div>
        <video
          autoPlay
          muted
          loop
          src="assets/images/hero/videoBg.mp4"
          type="video/mp4"
          playsInline
        />
        <div className="content-banner">
          <h3
            className='text-white'
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            Safra Provides Better Solutions
          </h3>
          <div
            className="hero-btns"
            data-aos="fade-up"
            data-aos-delay={400}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <Link href="/about" legacyBehavior>
              <a className="theme-btn">
                Read More <i className="far fa-arrow-right" />
              </a>
            </Link>
            <Link href="contact" legacyBehavior>
              <a className="theme-btn style-two">
                Contact Us <i className="far fa-arrow-right" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner

