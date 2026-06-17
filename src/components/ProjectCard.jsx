import { useNavigate } from 'react-router-dom'
import './ProjectCard.css'

function ProjectCard({project}){
  const navigate=useNavigate()

  const handleMouseMove=(e)=>{
    const card=e.currentTarget 
    const rect=card.getBoundingClientRect()
    const x=e.clientX-rect.left
    const y=e.clientY-rect.top 
    
    const centerX=rect.width/2 
    const centerY=rect.height/2 
    const rotateX=(y-centerY)/5
    const rotateY=(centerX-x)/5

    card.style.transform=`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`

    const shine=card.querySelector('.card__shine')
    shine.style.background=`radial-gradient(circle at ${x}px ${y}px ,rgba(255,255,255,0.15) 0%, transparent 60%)`
  }

  const handleMouseLeave=(e)=>{
    const card=e.currentTarget
    card.style.transform='perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    const shine=card.querySelector('.card__shine')
    shine.style.background='transparent'
  }
  return(
    <div className="project-card" onClick={() => navigate(`/project/${project.id}`)}
     onMouseMove={handleMouseMove}
     onMouseLeave={handleMouseLeave}
    >
      <div className="card__shine"></div>
      <span className="card__badge">{project.category}</span>
      <h3 className="card__title">{project.title}</h3>
      <p className="card__description">{project.description}</p>
      <div className="card__tags">{project.tags.map((tag,index)=>(
        <span className="card__tag" key={index}>{tag}</span>
      ))}</div>
    </div>
  )
}

export default ProjectCard