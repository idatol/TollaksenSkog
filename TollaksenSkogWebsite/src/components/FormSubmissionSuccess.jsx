import '../assets/styles/styles.css'

export default function FormSubmissionSuccess() {
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

      <p>Takk for din henvendelse! Jeg svarer deg så snart som mulig.</p>
    </section>
  )
}
