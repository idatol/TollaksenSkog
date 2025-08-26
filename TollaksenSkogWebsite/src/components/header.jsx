import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../assets/styles/styles.css'

export default function Header() {
  return (
    <header>
      <span id="logo">
        <Link to="/"><img src={logo} alt="Tollaksen Skogservice logo" /></Link>
      </span>
      <nav>
        <NavLink className='btn-forside' to="/about">Om meg</NavLink>
        <NavLink className='btn-forside' to="/services">Tjenester</NavLink>
        <NavLink className='btn-forside' to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  )
}
