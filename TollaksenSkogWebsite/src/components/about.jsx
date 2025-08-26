import img2 from '../assets/img2.jpg'
import "../assets/styles/about.css"

export default function About() {
  return (
    <section>
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
        <img src={img2} alt="Herman Tollaksen" />
      </article>
    </section>
  );
}
