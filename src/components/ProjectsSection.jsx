import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import FilterBar from './FilterBar'
import './ProjectsSection.css'

function ProjectsSection() {
  const[activeCategory,setActiveCategory]=useState('All');
  const[activeTech,setActiveTech]=useState([])

  const filteredProjects=projects.filter((project)=>{
    const categoryMatch=
    activeCategory==='All' || project.category === activeCategory.toLowerCase()

    const techMatch=
    activeTech.length===0 || activeTech.some(tech=>project.tags.includes(tech))

    return categoryMatch && techMatch
  })

  const CATEGORY_ORDER={major:1,intermediate:2,minor:3}

  const sortedProjects=[...filteredProjects].sort(
    (a,b)=>CATEGORY_ORDER[a.category]-CATEGORY_ORDER[b.category]
  )
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

      {sortedProjects.length===0?(
        <div className="projects__empty">
          <svg viewBox="0 0 200 200" className="empty__svg">
            <circle cx="100" cy="90" r="35" fill="rgba(124,58,237,0.15)"/>
            <rect x="85" y="60" width="30" height="40" rx="8" fill="rgba(255,255,255,0.08)" stroke="rgba(124,58,237,0.5)" strokeWidth="2"/>
            <line x1="100" y1="60" x2="100" y2="35" stroke="rgba(124,58,237,0.5)" strokeWidth="2"/>
            <circle cx="100" cy="30" r="6" fill="#7C3AED"/>
          <line x1="95" y1="100" x2="85" y2="115" stroke="rgba(225,225,225,0.2)" strokeWidth="2"/>
          <line x1="105" y1="100" x2="115" y2="115" stroke="rgba(225,225,225,0.2)" strokeWidth="2"/>
          <circle cx="40" cy="40" r="2" fill="white" opacity="0.4"/>
          <circle cx="160" cy="60" r="2" fill="white" opacity="0.5"/>
          <circle cx="50" cy="140" r="2" fill="white" opacity="0.3"/>
          <circle cx="150" cy="150" r="2" fill="white" opacity="0.4"/>
          <path d="M 60 90 Q 40 90 30 70" stroke="rgba(124,58,237,0.4)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          <path d="M 140 90 Q 160 90 170 70" stroke="rgba(124,58,237,0.4)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
          </svg>

          <h3 className="empty__title">No Signal Found</h3>
          <p className="empty__text">Looks like there's nothing out here matching your filters.</p>

          <button
          className="btn btn--purple"
          onClick={()=>{
            setActiveCategory('All')
            setActiveTech([])
          }}
          >Bring Me Back</button>
        </div>
      ):(
      <div className="projects__grid">
      {sortedProjects.map((project)=>(
        <ProjectCard key={project.id} project={project}/>
      ))}
      </div>
      )}
    </section>
  )
}

export default ProjectsSection 