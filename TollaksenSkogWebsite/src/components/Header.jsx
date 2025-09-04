import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { useState } from 'react'
import '../assets/styles/styles.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <span id="logo">
        <Link to="/"><img src={logo} alt="Tollaksen Skogservice logo" /></Link>
      </span>

      {/* Hamburger button */}
      <button 
        className="hamburger" 
        onClick={() => setMenuOpen(!menuOpen)} 
        aria-label="Meny"
      >
        ☰
      </button>

      <nav className={menuOpen ? 'open' : ''}>
        <NavLink className='btn-forside' to="/about" onClick={() => setMenuOpen(false)}>Om meg</NavLink>
        <NavLink className='btn-forside' to="/services" onClick={() => setMenuOpen(false)}>Tjenester</NavLink>
        <NavLink className='btn-forside' to="/projects" onClick={() => setMenuOpen(false)}>Innlegg</NavLink>
        <NavLink className='btn-forside' to="/contact" onClick={() => setMenuOpen(false)}>Kontakt</NavLink>
      </nav>
    </header>
  )
}
