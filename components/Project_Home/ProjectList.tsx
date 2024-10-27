import React from 'react';
import ProjectInfo from "./ProjectInfo";
import TechnologiesUsed from "./TecnologiesUsed";
import { PortableText } from '@portabletext/react';
import styles from "./ProjectList.module.scss"; 
import  '../../app/main.module.scss';

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
  technologies: Technology[];
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
    console.log("Projects received in ProjectList:", projects);
  
    if (projects.length === 0) {
      return <p>No projects available.</p>;
    }
  
    return (
      <div className={styles.projectContainer}> 
        {projects.map((project) => (
          <div
            key={project._id}
          
            className={`${styles.projectCard} ${project.importance === 'main' ? 'main' : 'other-style'}`}

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



