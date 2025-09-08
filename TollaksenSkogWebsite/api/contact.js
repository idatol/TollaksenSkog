import { Resend } from 'resend';

// En veldig enkel whitelist av opprinnelse (hindrer POST fra fremmede domener)
const ALLOWED_HOSTNAMES = new Set([
  'tollaksenskogsservice.no',
  'www.tollaksenskogsservice.no',
  'tollaksen-skog.vercel.app',
  // legg til 'localhost' ved lokal testing
]);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Metoden er ikke tillatt' });
  }

  const origin = req.headers.origin || '';
  const hostname = origin ? new URL(origin).hostname : '';
  if (hostname && !ALLOWED_HOSTNAMES.has(hostname)) {
    return res.status(403).json({ ok: false, error: 'Forbudt opprinnelse' });
  }

  // Anti-spam honeypot
  const { _honey, name = '', email = '', message = '' } = req.body || {};
  if (_honey) return res.status(200).json({ ok: true });

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ ok: false, error: 'Mangler felter' });
  }

  // Validér lengder og gyldig e-post
  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return res.status(400).json({ ok: false, error: 'For lange felter' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Ugyldig e-post' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Tollaksen Skogsservice <noreply@tollaksenskogsservice.no>',
      to: 'ida.k.tollaksen@gmail.com', // Endre til ønsket mottaker, SKAL VÆRE tollaksen.skog@gmail.com etter testing
      reply_to: email,
      subject: `Ny henvendelse – ${name}`,
      text: `Navn: ${name}\nE-post: ${email}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, error: 'Kunne ikke sende e-post' });
  }
}
