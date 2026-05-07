export default function Summary({ summary }) {
  return (
    <section className="cv-section" aria-labelledby="summary-heading">
      <h2 id="summary-heading">Summary</h2>
      <p>{summary}</p>
    </section>
  )
}
