import { useState } from "react";
import { achievements } from "../data/achievements";
import AchievementCard from "./AchievementCard";
import "./AchievementsSection.css";
import PdfModal from './PdfModal'
import '../styles/shared.css'

function AchievementsSection() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  return (
    <section id="achievements" className="achievements-section">
      <div className="section__header">
        <p className="section__label">My Journey</p>
      <h2 className="section__title">Achievements</h2>
      <p className="section__subtitle">{achievements.length} certifications & milestones earned</p>
      </div>
      
      <div className="achievements__grid">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            achievement={achievement}
            onClick={() => setSelectedAchievement(achievement)}
          />
        ))}
      </div>
      <PdfModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />
    </section>
  );
}

export default AchievementsSection;
