import img1 from '../assets/img1.jpg'

export default function Forside() {
  return (
    <>
      <h1>Tollaksen Skogsservice</h1>
      <figure>
          <img src={img1} alt="Skogsarbeider" />
      </figure>
      <p>Tollaksen skog hjelper deg med alt innenfor skogbruk i Rogaland.</p>
    </>
  );
}
