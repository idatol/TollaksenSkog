import { Link } from 'react-router-dom'
import '../assets/styles/status.css'

export default function ComingSoon() {
  return (
    <section className="status-page">
      <div className="icon" aria-hidden>🌲</div>
      <h1>Kommer snart </h1>
      <p>
        Denne siden er under utvikling. <br /> Kommer snart!
      </p>
    </section>
  )
}
