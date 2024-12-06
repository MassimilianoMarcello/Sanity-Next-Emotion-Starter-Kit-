import React, { useState } from "react";
import ProjectInfo from "./ProjectInfo";
import TechnologiesUsed from "./TechnologiesUsed";
import { PortableText } from "@portabletext/react";
import { Project } from "@/types/projects";
import styles from "./ProjectList.module.scss";
import Link from "next/link";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);
  const toggleProjectInfo = (projectId: string) => {
    if (openProjectId === projectId) {
      setIsExiting(true);
      setTimeout(() => {
        setOpenProjectId(null);
        setIsExiting(false);
      }, 500); // Tempo dell'animazione
    } else {
      setOpenProjectId(projectId);
    }
  };

  const handleMouseLeave = () => {
    setIsExiting(true);
    setTimeout(() => {
      setOpenProjectId(null);
      setIsExiting(false);
    }, 100); // Tempo dell'animazione
  };

  // Raggruppa i progetti per importanza
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
      {sortedCategories.map((category, index) => (
        <div
          key={category}
          className={`${styles.categorySection} ${styles.fadeIn}`}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className={styles.categoryLabel}>{category}</div>
          <div className={styles.projectCards}>
            {groupedProjects[category].map((project) => (
              <div
                key={project._id}
                className={styles.projectCard}
                onClick={() => toggleProjectInfo(project._id)}
                onMouseLeave={handleMouseLeave}
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
                  <div className={`${styles.infoBubble} ${isExiting ? styles.exit : ""}`}>
                    <ProjectInfo project={project} openProjectId={openProjectId} />
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





