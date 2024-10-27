import React from 'react';
import ProjectInfo from "./ProjectInfo";
import TechnologiesUsed from "./TecnologiesUsed"; // Assicurati che il nome del file sia corretto
import { PortableText } from '@portabletext/react';
import styles from "./ProjectList.module.scss"; 

interface Technology {
  _id: string;
  name: string;
  slug: string;
}

interface Project {
  _id: string;
  image: string;
  imageAlt: string;
  content: any[];
  technologies: Technology[]; // Cambiato in array di Technology
  name: string;
  githubUrl: string;
  url: string;
  slug: string;
  importance: string;
}

interface ProjectListProps {
  projects: Project[];
  openProjectId: string | null;
  toggleProjectInfo: (id: string) => void;
}

const ProjectList: React.FC<ProjectListProps> = ({ projects, openProjectId, toggleProjectInfo }) => {
    console.log(projects);
    return (
      <div className={styles.projectContainer}> 
        {projects.map((project) => (
          <div
            key={project._id}
            className={`${styles.projectCard} ${project.importance === "main" ? styles.mainProject : ""}`} // Aggiungi una classe per il progetto principale
            onClick={() => toggleProjectInfo(project._id)}
          >
            <div className={styles.boxImageTextProject}>
              <h3>{project.name}</h3>
              
              <img className={styles.projectImage} src={project.image} alt={project.imageAlt} />
              <div className={styles.portableStyle}>
                <PortableText value={project.content[0]} />
              </div>
            </div>
            <TechnologiesUsed technologies={project.technologies} /> {/* Assicurati che questo funzioni con il nuovo tipo */}
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


