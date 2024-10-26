"use client";
import { getProject } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import styles from "./singleProject.module.scss";

type Props = {
  params: { slug: string };
};

export default async function Project({ params }: Props) {
  const project = await getProject(params.slug);

  return (
    <div className={styles.projectContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.titleContainer}>
          <h1 className={styles.howIMade}>How I Made</h1>
          <h1 className={styles.titleProject}>{project.name}</h1>
        </div>
        <div className={styles.projectDescription}>
          <PortableText value={project.content} />
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
          <Link href={`/projects`}>Return</Link>
        </div>
      </div>
    </div>
  );
}
