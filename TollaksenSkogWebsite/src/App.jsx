import { Routes, Route } from 'react-router-dom'
import Forside from './components/forside'
import Header from './components/header'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
