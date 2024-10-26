import React from 'react';
import ProjectInfo from "./ProjectInfo";
import TechnologiesUsed from "./TecnologiesUsed";
import { PortableText } from '@portabletext/react';
import styles from "./ProjectList.module.scss"; 

interface Project {
  _id: string;
  image: string;
  imageAlt: string;
  content: any[];
  technologies: string[];
  name: string;
  githubUrl: string;
  url: string;
  slug: string;
}

interface ProjectListProps {
  projects: Project[];
  openProjectId: string | null;
  toggleProjectInfo: (id: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, openProjectId, toggleProjectInfo }) => {
  return (
    <div className={styles.projectContainer}> 
      {projects.map((project) => (
        <div
          key={project._id}
          className={styles.projectCard}
          onClick={() => toggleProjectInfo(project._id)}
        >
          <div className={styles.boxImageTextProject}>
          <h3>{project.name}</h3>
            <img className={styles.projectImage} src={project.image} alt={project.imageAlt} />
            <div className={styles.portableStyle}>
              <PortableText value={project.content[0]} />
            </div>
          </div>
          <TechnologiesUsed technologies={project.technologies} />
          {/* Mostra le info del progetto solo se il progetto è aperto */}
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

export default ProjectList;

