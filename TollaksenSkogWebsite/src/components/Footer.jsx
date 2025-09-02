import { Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import '../assets/styles/styles.css'

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
