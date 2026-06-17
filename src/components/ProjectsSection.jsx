import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import FilterBar from './FilterBar'
import './ProjectsSection.css'

function ProjectsSection() {
  const[activeCategory,setActiveCategory]=useState('All');
  const[activeTech,setActiveTech]=useState([])
  return (
    <section id="projects" className="projects-section">
      <div className="section__header">
        <p className="section__label">My Work</p>
        <h2 className="section__title">Projects</h2>
      </div>

      <FilterBar
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      activeTech={activeTech}
      setActiveTech={setActiveTech}/>
      
      <div className="projects__grid">
      {projects.map((project)=>(
        <ProjectCard key={project.id} project={project}/>
      ))}
      </div>
    </section>
  )
}

export default ProjectsSection 