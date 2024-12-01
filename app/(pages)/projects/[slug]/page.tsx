"use client";

import { getProject } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import styles from "./singleProject.module.scss";

type Props = {
  params: { slug: string };
};

export default async function Project({ params }: Props) {
  // Recupera il progetto dalla funzione di query
  const project = await getProject(params.slug);

  // Verifica se il progetto è stato trovato
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.howIMade}>How I Made</h1>
          <h1 className={styles.titleProject}>{project.name}</h1>
          <div className={styles.buttons}>
            <div className={styles.styledButton}>
              <Link href={project.githubUrl}>Github</Link>
            </div>
            <div className={styles.styledButton}>
              <Link href={project.url}>Visit Website</Link>
            </div>
            <div className={styles.styledButton}>
              <Link href={`/`}>Return</Link>
            </div>
          </div>
        </div>
        <div className={styles.projectDescription}>
          {/* Assicurati che project.content sia definito prima di renderizzarlo */}
          {project.content ? (
            <PortableText value={project.content} />
          ) : (
            <p>No content available for this project.</p>
          )}
        </div>
      </div>

      {project.challenges && project.challenges.length > 0 ? (
        <div className={styles.challengesSection}>
          <h4>Challenges Index:</h4>
          <ul className={styles.challengesList}>
            {project.challenges.map((challenge) => {
              // Verifica se l'`id` è univoco e valido
              return (
                <li key={challenge._id}>
                  <a href={`#challenge-${challenge._id}`} onClick={(e) => {
                    e.preventDefault(); // Impedisce il comportamento di default se necessario
                    document.getElementById(`challenge-${challenge._id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    {challenge.title}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mostra i dettagli delle sfide sotto l'indice */}
          <div className={styles.challengeDetails}>
            {project.challenges.map((challenge) => (
              <div
                id={`challenge-${challenge._id}`}
                key={challenge._id}
                className={styles.challengeItem}
              >
                <h5>{challenge.title}</h5>
                {challenge.description && <p>{challenge.description}</p>}
                {challenge.link && (
                  <p>
                    <a href={challenge.link} target="_blank" rel="noopener noreferrer">
                      Read more about this challenge
                    </a>
                  </p>
                )}
                {challenge.content && <PortableText value={challenge.content} />}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No challenges faced for this project.</p>
      )}
    </div>
  );
}




