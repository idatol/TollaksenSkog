import { Routes, Route } from 'react-router-dom'
import Forside from './components/forside'
import Header from './components/header'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'
import Footer from './components/footer'
import ComingSoon from './components/ComingSoon'
import NotFound from './components/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Forside />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Example route for your future pages */}
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Catch-all 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
