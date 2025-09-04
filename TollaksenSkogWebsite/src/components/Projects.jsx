import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export default function Projects() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
    client.fetch(`*[_type == "job"]{title, date, summary, "imageUrl": image.asset->url}`)
      .then((data) => setJobs(data))
      .catch(console.error);
  }, []);

    return(
        <div>
            <h2>Prosjekter:</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.title}>
                        <h3>{job.title}</h3>
                        <p>{job.summary}</p>
                        <p>{job.date}</p>
                        {job.imageUrl && <img src={job.imageUrl} alt={job.title} />}
                    </li>
                ))}
            </ul>
        </div>
    )
}