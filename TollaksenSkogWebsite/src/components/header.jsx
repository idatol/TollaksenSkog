import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <span>Logo</span>
      <nav>
        <ul>
          <li><Link to="/about">Om meg</Link></li>
          <li><Link to="/services">Tjenester</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  )
}
