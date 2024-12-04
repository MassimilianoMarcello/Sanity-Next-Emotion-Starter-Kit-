import React from "react";
import ProjectInfo from "./ProjectInfo";
import TechnologiesUsed from "./TecnologiesUsed";
import { PortableText } from "@portabletext/react";
import { Project } from "@/types/projects";
import styles from "./ProjectList.module.scss";
import "../../app/main.module.scss";
import Link from "next/link";

interface Technology {
  _id: string;
  name: string;
  slug: string;
}

interface ProjectListProps {
  projects: Project[];
  openProjectId: string | null;
  toggleProjectInfo: (id: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  openProjectId,
  toggleProjectInfo,
}) => {
  console.log("Projects received in ProjectList:", projects);

  if (projects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <div className={styles.projectContainer}>
      {projects.map((project) => (
        <div
          key={project._id}
          className={`${styles.projectCard} ${
            project.importance === "main" ? "main" : "other-style"
          }`}
          onClick={() => toggleProjectInfo(project._id)}
        >
          <div className={styles.boxTextProject}>
            <h3>{project.name}</h3>
            <h3>{project.importance}</h3>
            <h3>{project.status}</h3>
            <h3>{project.status}</h3>
         
            <div className={styles.portableStyle}>
              <PortableText value={project.content[0]} />
            </div>
          </div>
          <div className={styles.boxImageProject}>
            <img
              className={styles.projectImage}
              src={project.image}
              alt={project.imageAlt}
            />
          </div>
          <div className={styles.visitRepoAndWebsiteButtons}>
          <div className={styles.styledButton}>
            <Link href={project.githubUrl}>GitHub</Link>
          </div>
          <div className={styles.styledButton}>
            <Link href={project.url}>Visit Website</Link>
          </div>
          </div>
<div className={styles.technologiesUsed}>
<TechnologiesUsed technologies={project.technologies} />
</div>
         
          {openProjectId === project._id && (
            <div className={styles.infoBubble}>
              <ProjectInfo project={project} openProjectId={null} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Usando React.memo per evitare renderizzazioni non necessarie
export default React.memo(ProjectList);
