import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import './Hero.css'

function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Aspiring Computer Programmer',
        'Passionate About Coding & Technology',
        'Seeking Opportunities to Grow',
        'Building Cool Projects 🚀',
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    })

    // Cleanup when component unmounts
    return () => typed.destroy()
  }, [])

  return (
    <section id="home" className="hero">

      {/* Background Orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      {/* Content */}
      <div className="hero__content">

        {/* Greeting */}
        <p className="hero__greeting">Hi there, I'm</p>

        {/* Name */}
        <h1 className="hero__name">Yash Thakare</h1>

        {/* Typing Animation */}
        <div className="hero__tagline">
          <span ref={typedRef}></span>
        </div>

        {/* Buttons */}
        <div className="hero__buttons">
          <button className="btn btn--purple">View Resume</button>
          <button
            className="btn btn--ghost"
            onClick={() => {
              document.getElementById('projects')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            See My Work ↓
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero