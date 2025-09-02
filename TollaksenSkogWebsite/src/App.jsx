import { Routes, Route } from 'react-router-dom'
import Forside from './components/Forside'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ComingSoon from './components/ComingSoon'
import NotFound from './components/NotFound'
import FormSubmissionSuccess from './components/FormSubmissionSuccess'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Forside />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form-submission-success" element={<FormSubmissionSuccess />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
