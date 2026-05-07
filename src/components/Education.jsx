export default function Education({ education }) {
  return (
    <section className="cv-section" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      <div className="cv-item-list">
        {education.map(entry => (
          <article key={entry.id} className="cv-item">
            <div className="cv-item__header">
              <h3>{entry.degree}</h3>
              <span className="cv-item__meta">{entry.year}</span>
            </div>
            <p className="cv-item__subtitle">
              {entry.institution}{entry.note ? ` · ${entry.note}` : ''}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
