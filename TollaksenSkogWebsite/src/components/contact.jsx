import '../assets/styles/contact.css'

export default function Contact() {
  return (
    <section id="contact">
      <h2>Kontakt</h2>
      <p id='conp'>Ta kontakt på e-post, telefon eller via skjemaet under.</p>
      
      <div>
        <h3>E-post</h3>
        <a className="contact-link" href="mailto:tollaksenskogservice@gmail.com"> tollaksenskogservice@gmail.com </a>
      </div>

      <div>
        <h3>Telefon</h3>
        <a className="contact-link" href="tel:+4793604721" aria-label="Ring 936 04 721"> 936 04 721 </a>
      </div>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Melding</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  )
}

