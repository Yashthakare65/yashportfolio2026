import { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import './FilterBar.css'

const CATEGORY_PILLS=['All','Major','Intermediate','Minor']
const TECH_OPTIONS=['React','Node.js','MongoDB','SQL','Java','HTML','CSS','JavaScript','Figma']

function FilterBar({activeCategory,setActiveCategory,activeTech,setActiveTech}){
  const[panelOpen,setPanelOpen]=useState(false)
  const[tempTech,setTempTech]=useState([])

  const toggleTech=(tech)=>{
    setTempTech(prev=>
      prev.includes(tech)?prev.filter(t=>t!== tech)
      :[...prev,tech]
    )
  }

  const applyFilter=()=>{
    setTempTech(tempTech)
    setPanelOpen(false)
  }

  const clearFilter=()=>{
    setTempTech([])
    setActiveTech([])
  }

  return(
    <div className="filterbar">
      {/* pills row */}
      <div className="filterbar__top">
          {CATEGORY_PILLS.map((pill)=>(
            <button
            key={pill}
            className={activeCategory===pill?'pill pill--active':'pill'}
            onClick={()=>setActiveCategory(pill)}>
              {pill}
            </button>
          ))}

          {/* filter button */}
          <button
          className={`filter-btn ${panelOpen?'filter-btn--active':''}`}
          onClick={()=>setPanelOpen(!panelOpen)}>
            <FiFilter/>
            Filter
          </button>
      </div>
      {/* panel only shows when panelOpen is true */}
      {panelOpen &&(
        <div className="filterbar__panel">

          <div className="panel__header">
            <span>Filter by Technology</span>
            <button onClick={()=>setPanelOpen(false)}>
              <FiX/>
            </button>
          </div>

          <div className="panel__options">
            {TECH_OPTIONS.map((tech)=>(
              <label key={tech} className="panel__option">
                <input
                type="checkbox"
                checked={tempTech.includes(tech)}
                onChange={()=>toggleTech(tech)}/>
                <span>{tech}</span>
              </label>
            ))}
        </div>

        <div className="panel__actons">
          <button className="btn btn--ghost" onClick={clearFilter}>Clear</button>
          <button className="btn btn--purple" onClick={applyFilter}>Apply</button>
        </div>
        </div>
      )}
    </div>
  )
}

export default FilterBar