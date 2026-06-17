import {useState,useEffect} from 'react'
import {FiSun,FiMoon} from 'react-icons/fi'
import './Navbar.css'

function Navbar({theme,toggleTheme}){
  const[scrolled,setScrolled]=useState(false)

  //Detect when user scrolls down
  useEffect(()=>{
    const handleScroll=()=>{
    setScrolled(window.scrollY>50)
    }
    window.addEventListener('scroll',handleScroll)
    return()=>window.removeEventListener('scroll',handleScroll)
  },[])

  //Smooth scroll to section
  const scrollToSection=(id)=>{
    const section=document.getElementById(id)
    if(section){
      section.scrollIntoView({behavior:'smooth'})
    }
  }

  return(
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__logo">YT</div>

      <ul className="navbar__links">
        <li onClick={()=>scrollToSection('home')}>Home</li>
        <li onClick={()=>scrollToSection('projects')}>projects</li>
        <li onClick={()=>scrollToSection('achievements')}>Achievements</li>
      </ul>

         {/* Right Side */}
         <div className="navbar__right">
          <button className="btn btn--ghost" onClick={()=>scrollToSection('contact')}>
            Contact Me
          </button>
          <button className="btn btn--purple">Resume</button>
          <button className="theme-toggle" onClick={toggleTheme}>{theme==='dark' ? <FiSun/> : <FiMoon/>}</button>
         </div>
    </nav>
  )
}

export default Navbar