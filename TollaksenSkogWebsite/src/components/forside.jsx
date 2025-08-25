import img1 from '../assets/img1.jpg'
import '../assets/styles/forside.css'

export default function Forside() {
  return (
    <section id="forside">
      <h1>Tollaksen Skogservice</h1>
      <figure>
        <img src={img1} alt="Skogsarbeid i felt" />
      </figure>
      <p>Hjelper deg med alt innen skogbruk i Rogaland.</p>
    </section>
  )
}
