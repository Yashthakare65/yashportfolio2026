import {useState} from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import AchievementsSection from '../components/AchievementsSection'

function HomePage() {
  const[theme,setTheme]=useState('dark')

  const toggleTheme=()=>{
    setTheme(theme==='dark'?'light':'dark')
  }
  return (
    <div className="app" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme}/>
      <Hero/>
      <ProjectsSection/>
      <AchievementsSection/>
      <section id="contact" style={{height:'100vh',}}>
        <h1 style={{color:'white',padding:'40px'}}>Conatct Section</h1>
      </section>
    </div>
  )
}

export default HomePage