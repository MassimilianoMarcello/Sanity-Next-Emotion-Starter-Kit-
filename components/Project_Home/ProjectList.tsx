import React from "react";
import ProjectInfo from "./ProjectInfo";
import TechnologiesUsed from "./TecnologiesUsed";
import { PortableText } from "@portabletext/react";
import { Project } from "@/types/projects";
import styles from "./ProjectList.module.scss";
import Link from "next/link";

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
  // Raggruppare i progetti per importanza
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.importance]) {
      acc[project.importance] = [];
    }
    acc[project.importance].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  // Ordina le categorie per l'ordine desiderato
  const importanceOrder = ["main", "secondary", "testing"];
  const sortedCategories = importanceOrder.filter((category) =>
    groupedProjects[category]
  );

  return (
    <div className={styles.projectListContainer}>
      {sortedCategories.map((category) => (
        <div key={category} className={styles.categorySection}>
          <div className={styles.categoryLabel}>{category}</div>
          <div className={styles.projectCards}>
            {groupedProjects[category].map((project) => (
              <div
                key={project._id}
                className={styles.projectCard}
                onClick={() => toggleProjectInfo(project._id)}
              >
                <div className={styles.boxTextProject}>
                  <h3>{project.name}</h3>
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
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProjectList);


