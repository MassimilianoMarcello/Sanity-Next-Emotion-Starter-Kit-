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
  );
}

