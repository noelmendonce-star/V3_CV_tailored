export default function Skills({ skills }) {
  return (
    <section className="cv-section" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      <div className="skill-groups">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-group">
            <span className="skill-group__label">{category}</span>
            <div className="skill-group__pills">
              {items.map(skill => (
                <span key={skill} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
