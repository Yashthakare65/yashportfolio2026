import { FiX } from "react-icons/fi"
import './PdfModal.css'

function PdfModal ({achievement,onClose}){
  if(!achievement) return null

  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-header">
          <h3>{achievement.title}</h3>
          <button className="modal-close" onClick={onClose} >
            <FiX/>
          </button>
        </div>

        <iframe
        src={achievement.pdf}
        title={achievement.title}
        className="modal-pdf"></iframe>
        
      </div>
    </div>
  )
}

export default PdfModal