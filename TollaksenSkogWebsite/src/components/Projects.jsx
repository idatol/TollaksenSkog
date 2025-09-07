import { useEffect, useState } from "react";
import client from "../sanityClient";
import '../assets/styles/styles.css';

export default function Projects() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const query = `*[_type == "job"] | order(date desc){ _id, title, date, summary, "imageUrl": image.asset->url}`;
    client.fetch(query)
      .then(setJobs)
      .catch(console.error);
  }, []);

  if (!jobs.length) return <p>Ingen prosjekter publisert ennå.</p>;

  return (
    <section id="projects-section">
      <h2 id="projects-h2">Innlegg</h2>
      <div id="projects">
        {jobs.map(job => (
          <article key={job._id}>
            {job.imageUrl && (
              <figure>
                <img src={job.imageUrl} alt={job.title} loading="lazy" />
              </figure>
            )}
            <h3>{job.title}</h3>
            <p className="date">
              {job.date ? new Date(job.date).toLocaleDateString('nb-NO', {
                day: '2-digit', month: '2-digit', year: 'numeric', }) : ''}
            </p>
            <p>{job.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
