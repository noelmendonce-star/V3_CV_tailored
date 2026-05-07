export default function Projects({ projects }) {
  return (
    <section className="cv-section" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <article key={project.id} className="project-card">
            <div className="project-card__header">
              <h3>{project.title}</h3>
              {project.url && (
                <a
                  href={project.url}
                  className="project-card__link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  GitHub ↗
                </a>
              )}
            </div>
            <p className="project-card__desc">{project.description}</p>
            <div className="project-card__stack">
              {project.stack.map(tech => (
                <span key={tech} className="project-card__tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
