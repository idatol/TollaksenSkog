import img1 from '../assets/img1.jpg'
import '../assets/styles/forside.css'

export default function Forside() {
  return (
    <section id='forside'>
      <h1>Tollaksen Skogsservice</h1>
      <figure>
          <img src={img1} alt="Skogsarbeider" />
      </figure>
      <p>Tollaksen skog hjelper deg med alt innenfor skogbruk i Rogaland.</p>
    </section>
  );
}
