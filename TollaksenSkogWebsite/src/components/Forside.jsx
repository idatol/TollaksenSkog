import { Link } from 'react-router-dom'
import img_1 from '../assets/img/img_1.png'
import '../assets/styles/styles.css'

export default function Forside() {
  return (
    <section id="forside">
      <h1>Tollaksen Skogservice</h1>
      <figure>
        <img src={img_1} alt="Skogsarbeid i felt" />
      </figure>

      <p>
        Tollaksen Skogservice tilbyr profesjonelle tjenester innen hogst, rydding, 
        hagestell og vedlikehold av uteområder i hele Rogaland. 
        Jeg legger stor vekt på grundighet, sikkerhet og skreddersydde løsninger, 
        enten du trenger hjelp i hagen, på gården eller i større skogsområder.
      </p>
      <p>
        Med over 20 års erfaring i bransjen kan du være trygg på at arbeidet blir 
        utført effektivt og med respekt for både naturen og eiendommen din.
      </p>

      <div id="buttons-forside">
        <Link className='btn-forside' to="/services">Tjenester</Link>
        <Link className='btn-forside' to="/contact">Kontakt meg</Link>
      </div>
    </section>
  )
}
