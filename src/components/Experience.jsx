export default function Experience({ experience }) {
  return (
    <section className="cv-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading">Experience</h2>
      <div className="cv-item-list">
        {experience.map(job => (
          <article key={job.id} className="cv-item">
            <div className="cv-item__header">
              <h3>{job.role}</h3>
              <span className="cv-item__meta">{job.start} – {job.end}</span>
            </div>
            <p className="cv-item__subtitle">{job.company} · {job.location}</p>
            <ul className="cv-item__bullets">
              {job.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
