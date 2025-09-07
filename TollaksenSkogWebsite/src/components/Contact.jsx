import '../assets/styles/styles.css'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Kontakt</h2>
      <p id='conp'>Ta kontakt på e-post, telefon eller via skjemaet under.</p>
      
      <div>
        <h3>E-post</h3>
        <a className="contact-link" href="mailto:tollaksen.skog@gmail.com"> tollaksen.skog@gmail.com </a>
      </div>

      <div>
        <h3>Telefon</h3>
        <a className="contact-link" href="tel:+4793604721" aria-label="Ring 936 04 721"> 936 04 721 </a>
      </div>

      <form action="https://formsubmit.co/7b8eeda4cb57a9b09d60552fecb83a11" method="POST">
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: 'none' }} />

        {/* Disable captcha (NB: underscore) */}
        <input type="hidden" name="_captcha" value="false" />

        {/* Redirect etter suksess */}
        <input type="hidden" name="_next" value={`${window.location.origin}/form-submission-success`} />

        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="Navn" required />

        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="E-post" required />

        <label htmlFor="message">Melding</label>
        <textarea id="message" name="Melding" rows="6" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  )
}
