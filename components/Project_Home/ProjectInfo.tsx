import { Project } from "@/types/projects";
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
            // Genera lo stesso ID basato sul titolo della challenge
            const challengeId = `challenge-${challenge.title.replace(/\s+/g, '-').toLowerCase()}`;

            return (
              <li key={challenge._id}>
                <Link href={`/projects/${project.slug}#${challengeId}`}>
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





