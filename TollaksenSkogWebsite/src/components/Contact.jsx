export default function Contact() {
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const payload = {
      _honey: form._honey.value,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const r = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (r.ok) {
      window.location.href = '/form-submission-success';
    } else {
      const { error } = await r.json().catch(() => ({}));
      alert(error || 'Noe gikk galt. Prøv igjen senere.');
    }
  }

  return (
    <section id="contact">
      <Helmet>
        <title>Kontakt - Tollaksen Skog</title>
        <meta name="description" content="Ta kontakt med Tollaksen Skog for skogtjenester, tømmerkjøp, eller andre henvendelser." />
        <link rel="canonical" href="https://tollaksenskog.no/kontakt" />
      </Helmet>
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

      <form onSubmit={onSubmit}>
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: 'none' }} />

        <label htmlFor="name">Navn</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">E-post</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Melding</label>
        <textarea id="message" name="message" rows="6" required></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}
