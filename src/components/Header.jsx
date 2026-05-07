export default function Header({ personal }) {
  const { name, title, email, location, linkedin, github } = personal

  return (
    <header className="cv-header">
      <h1>{name}</h1>
      <p className="cv-header__title">{title}</p>
      <div className="cv-header__contact">
        <a href={`mailto:${email}`}>{email}</a>
        <span>{location}</span>
        <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">{linkedin}</a>
        <a href={`https://${github}`} target="_blank" rel="noreferrer">{github}</a>
      </div>
    </header>
  )
}
