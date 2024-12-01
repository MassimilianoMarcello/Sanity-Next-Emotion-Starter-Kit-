import { useEffect, useState } from "react";
import { getProjects } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ProjectInfo.module.scss"; 

// Definisci il tipo Project
interface Project {
  _id: string;
  name: string;
  githubUrl: string;
  url: string;
  slug: { current: string };
  challenges?: { _id: string; title: string; slug: { current: string } }[];
  // Altri campi che possono essere presenti in project
}

interface ProjectInfosProps {
  project: Project;
  openProjectId: string | null;
}



const ProjectInfos: React.FC<ProjectInfosProps> = ({ project, openProjectId }) => {
  return (
    <div
      className={`${styles.projectInfo} ${
        project._id === openProjectId ? styles.visible : styles.hidden
      }`}
    >
      <h3>{project.name}</h3>
      <ul className={styles.challengesList}>
        <h4>Challenges Faced:</h4>
        {project.challenges?.map((challenge: any) => (
          <li key={challenge._id} className={styles.singleChallenge}>
            <Link href={`/blog/${challenge.slug.current}`}>
              {challenge.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={styles.textDetails}>
        <div className={styles.buttons}>
          <div className={styles.styledButton}>
            <Link href={project.githubUrl}>GitHub</Link>
          </div>
          <div className={styles.styledButton}>
            <Link href={project.url}>Visit Website</Link>
          </div>
          <div className={styles.styledButton}>
            <Link href={`/projects/${project.slug.current}`}>Click for Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfos;
