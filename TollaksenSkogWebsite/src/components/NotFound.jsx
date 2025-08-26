import { Link, useLocation } from 'react-router-dom'
import '../assets/styles/status.css'

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <section className="status-page">
      <div className="icon" aria-hidden>🧭</div>
      <h1>Page not found</h1>
      <p>
        We couldn’t find <code>{pathname}</code>. It may have moved or never existed.
      </p>

      <div className="actions">
        <Link className="btn" to="/">Go home</Link>
        <Link className="btn outline" to="/contact">Contact</Link>
      </div>
    </section>
  )
}
