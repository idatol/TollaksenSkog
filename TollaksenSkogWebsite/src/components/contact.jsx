export default function Contact() {
  return (
    <>
      <h2>Kontakt</h2>
      <p>Ta kontakt på e-post, telefon eller via skjemaet under.</p>

      <div>
        <h3>E-post</h3>
        <p>tollaksenskogservice@gmail.com</p>
      </div>

      <div>
        <h3>Telefon</h3>
        <p>936 04 721</p>
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
    </>
  )
}
