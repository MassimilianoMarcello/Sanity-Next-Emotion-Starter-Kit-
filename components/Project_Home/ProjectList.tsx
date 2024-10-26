import React from 'react';
import ProjectInfos from "./ProjectInfo";
import TechnologiesUsed from "./TecnologiesUsed";
import { PortableText } from '@portabletext/react';
import styles from "./ProjectList.module.scss"; 

// Definisci il tipo Project con tutte le proprietà richieste
interface Project {
    _id: string;
    image: string;
    imageAlt: string;
    content: any[];  // Specifica meglio il tipo se possibile
    technologies: string[]; // Supponendo che sia un array di stringhe
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
    <div className="project-container">
      {projects.map((project) => (
        <div
          key={project._id}
          className="project-card"
          onClick={() => toggleProjectInfo(project._id)}
        >
          <div className="box-image-text-project">
            <img className="project-image" src={project.image} alt={project.imageAlt} />
            <div className="portable-style">
              <PortableText value={project.content[0]} />
            </div>
          </div>
          <TechnologiesUsed technologies={project.technologies} />
          <ProjectInfos project={project} openProjectId={openProjectId} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;



