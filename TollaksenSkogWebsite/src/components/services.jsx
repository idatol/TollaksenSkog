import _400x400 from '../assets/_400x400.png'
import '../assets/styles/styles.css'

export default function Services() {
  return (
    <section>
      <h2>Tjenester</h2>
      <div id="services">
        <article>
          <h3>Hogst</h3>
          <p>Felling av trær og rydding av skogsområder.</p>
          <img src={_400x400} alt="placeholder" />
        </article>
        <article>
          <h3>Hagestell</h3>
          <p>Stell av hager, plen og hekkeklipping.</p>
          <img src={_400x400} alt="placeholder" />
        </article>
        <article>
          <h3>Rydding</h3>
          <p>Rydding av busker, trær og annen vegetasjon.</p>
          <img src={_400x400} alt="placeholder" />
        </article>
      </div>
    </section>
  )
}
