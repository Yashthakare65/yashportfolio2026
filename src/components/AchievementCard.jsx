import './AchievementCard.css'

function AchievementCard({ achievement, onClick }) {
  return (
    <div className="achievement-card" onClick={onClick}>
      <span
        className="achievement-card__badge"
        style={{ color: achievement.color, borderColor: achievement.color }}
      >
        {achievement.category}
      </span>

      <h3 className="achievement-card__title">{achievement.title}</h3>
      <p className="achievement-card__org" >{achievement.organization}</p>
      <p className="achievement-card__description">{achievement.description}</p>

      <div className="achievement-card__footer">
        <span className="achievement-card__date">{achievement.date}</span>
        <span className="achievement-card__view">View Certificate →</span>
      </div>
    </div>
  )
}

export default AchievementCard