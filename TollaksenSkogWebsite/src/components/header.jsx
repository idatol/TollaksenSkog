import { NavLink, Link } from 'react-router-dom'
import '../assets/styles/header.css'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header>
      <span id="logo">
        <Link to="/"><img src={logo} alt="Tollaksen Skogservice logo" /></Link>
      </span>
      <nav>
        <NavLink to="/about">Om meg</NavLink>
        <NavLink to="/services">Tjenester</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  )
}
