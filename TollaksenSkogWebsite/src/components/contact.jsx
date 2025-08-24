export default function Contact() {
  return (
    <>
      <h2>Kontakt</h2>
      <p>
        Ta kontakt med meg via epost, telefon eller skjemaet under.
      </p>
      <div>
        <h3>Epost</h3>
        <p>tollaksenskgscervice@gmail.com</p>
      </div>
      <div>
        <h3>Telefon</h3>
        <p>936 04 721</p>
      </div>
      <form action="">
        <label for="name">Navn:</label>
        <input type="text" id="name" name="name" required />

        <label for="email">Epost:</label>
        <input type="email" id="email" name="email" required />

        <label for="message">Melding:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>
    </>
  );
}
