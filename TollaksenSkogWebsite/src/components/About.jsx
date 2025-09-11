import img_2 from '../assets/img/img_2.png'
import '../assets/styles/styles.css'

export default function About() {
  return (
    <section id='about'>
      <Helmet>
        <title>Om meg - Tollaksen Skog</title>
        <meta name="description" content="Lær mer om Herman Tollaksen og hans erfaring innen skogsarbeid, rydding og hagestell i Rogaland." />
        <link rel="canonical" href="https://tollaksenskog.no/about" />
      </Helmet>
      <h2>Om meg</h2>
      <article>
        <p>
            Jeg heter Herman Tollaksen og driver enkeltmannsforetaket mitt i Rogaland. 
            Med over 20 års erfaring som skogsarbeider har jeg opparbeidet meg bred kunnskap innen skogbruk, 
            rydding og stell av uteområder. <br /><br />

            Jeg tilbyr tjenester innen skogsarbeid, hogst, rydding og hagestell. Jeg har alltid fokus på grundighet, 
            sikkerhet og gode løsninger for kundene mine. 
            Som enmannsbedrift er jeg tett på hele prosessen, fra planlegging til utført arbeid. <br /><br />

            Jeg er veldig glad i jobben min, og brenner for å gjøre naturen og eiendommene til folk ryddigere, 
            tryggere og mer brukervennlige.
        </p>
        <img src={img_2} alt="Bilde av Herman Tollaksen" />
      </article>
    </section>
  );
}
