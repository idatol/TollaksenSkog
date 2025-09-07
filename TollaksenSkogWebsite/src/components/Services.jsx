import hogst from '../assets/img/hogst.png'
import hagestell from '../assets/img/hagestell.png'
import rydding from '../assets/img/rydding.png'
import '../assets/styles/styles.css'

export default function Services() {
  return (
    <section>
      <h2 id='services-h2'>Tjenester</h2>
      <div id="services">
        <article>
          <h3>Hogst</h3>
          <p>Felling av trær og rydding av skogsområder.</p>
          <img src={hogst} alt="Hogst" />
        </article>
        <article>
          <h3>Hagestell</h3>
          <p>Stell av hager, plen og hekkeklipping.</p>
          <img src={hagestell} alt="Hagestell" />
        </article>
        <article>
          <h3>Rydding</h3>
          <p>Rydding av busker, trær og annen vegetasjon.</p>
          <img src={rydding} alt="Rydding" />
        </article>
      </div>
    </section>
  )
}
