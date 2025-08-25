import { Link } from 'react-router-dom'
import '../assets/styles/header.css'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <span id="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </span>
      <nav>
        <Link to="/about">Om meg</Link>
        <Link to="/services">Tjenester</Link>
        <Link to="/contact">Kontakt</Link>
      </nav>
    </header>
  )
}
