import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer>
      <span>
        <Link to="/"><img src={logo} alt="Tollaksen Skogservice logo" /></Link>
      </span>
      <p>© {new Date().getFullYear()} Tollaksen Skogservice. Alle rettigheter reservert.</p>
    </footer>
  )
}
