import { Project } from "@/types/projects";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import styles from "./ProjectInfo.module.scss";

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

      {project.challenges && project.challenges.length > 0 ? (
        <ul className={styles.challengesList}>
          <h4>Challenges Faced:</h4>
          {project.challenges.map((challenge) => {
            // Controllo per il caso in cui lo slug sia nullo o indefinito
            if (!challenge.slug || !challenge.slug.current) {
              return (
                <li key={challenge._id}>
                  <span>{challenge.title} (No link available)</span>
                </li>
              );
            }

            // Renderizza il link solo se lo slug è valido
            return (
              <li key={challenge._id}>
                <Link href={`/challenges/${challenge.slug.current}`}>
                  {challenge.title}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No challenges faced for this project.</p>
      )}

      <div className={styles.textDetails}>
        <div className={styles.buttons}>
          <div className={styles.styledButton}>
            <Link href={project.githubUrl}>GitHub</Link>
          </div>
          <div className={styles.styledButton}>
            <Link href={project.url}>Visit Website</Link>
          </div>
          <div className={styles.styledButton}>
            <Link href={`/projects/${project.slug}`}>Click for Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfos;




