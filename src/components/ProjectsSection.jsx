import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import FilterBar from './FilterBar'
import './ProjectsSection.css'
import EmptyState from './EmptyState'

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

      {sortedProjects.length===0?<EmptyState onReset={() => {
    setActiveCategory('All')
    setActiveTech([])
  }}/>
      :(
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