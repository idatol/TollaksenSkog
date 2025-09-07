import { useLocation } from 'react-router-dom'
import '../assets/styles/styles.css'

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <section className="status-page">
      <div className="icon" aria-hidden>🧭</div>
      <h1>Fant ikke side</h1>
      <p>
        Vi kunne ikke finne siden <code>{pathname}</code>. <br /> Vennligst sjekk URLen og prøv igjen.
      </p>
    </section>
  )
}
